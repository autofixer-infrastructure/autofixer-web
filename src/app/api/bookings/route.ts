import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for demo (would be DB in production)
const bookings: Map<string, any> = new Map()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const required = ['service', 'vehicleType', 'commune', 'name', 'email', 'phone', 'date', 'time']
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }
    
    // Generate booking ID
    const bookingId = `BK${Date.now().toString(36).toUpperCase()}`
    
    // Create booking
    const booking = {
      id: bookingId,
      ...body,
      status: 'PENDING_CONFIRMATION',
      createdAt: new Date().toISOString(),
      estimatedTotal: body.total || 0,
    }
    
    // Store
    bookings.set(bookingId, booking)
    
    // In production: send confirmation email/WhatsApp
    
    return NextResponse.json({
      success: true,
      data: {
        id: bookingId,
        status: booking.status,
        message: 'Booking created successfully',
      }
    })
    
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const bookingId = searchParams.get('id')
  
  if (!bookingId) {
    return NextResponse.json(
      { success: false, error: 'Booking ID required' },
      { status: 400 }
    )
  }
  
  const booking = bookings.get(bookingId)
  
  if (!booking) {
    return NextResponse.json(
      { success: false, error: 'Booking not found' },
      { status: 404 }
    )
  }
  
  return NextResponse.json({
    success: true,
    data: booking,
  })
}

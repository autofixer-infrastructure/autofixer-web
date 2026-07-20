import { NextRequest, NextResponse } from 'next/server'

// Quote calculation logic
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { service, vehicleType, commune } = body
    
    if (!service || !vehicleType) {
      return NextResponse.json(
        { success: false, error: 'Service and vehicle type required' },
        { status: 400 }
      )
    }
    
    // Service prices
    const servicePrices: Record<string, { base: number; max?: number }> = {
      'diagnostico': { base: 25000 },
      'carga-r134a': { base: 35000, max: 70000 },
      'carga-r1234yf': { base: 90000 },
      'sanitizacion-sedan': { base: 45000 },
      'sanitizacion-suv': { base: 55000 },
      'reparacion': { base: 0 },
    }
    
    // Displacement fees by commune
    const displacementFees: Record<string, number> = {
      'providencia': 5000,
      'las-condes': 10000,
      'nunoa': 5000,
      'santiago': 5000,
      'la-florida': 15000,
      'vitacura': 15000,
      'la-reina': 5000,
      'maipu': 10000,
      'penalolen': 10000,
      'puente-alto': 25000,
    }
    
    const servicePrice = servicePrices[service] || { base: 25000 }
    const displacementFee = displacementFees[commune?.toLowerCase()] || 15000
    
    const estimatedTotal = servicePrice.base + displacementFee
    
    // Available time slots (for demo, all available)
    const availableSlots = []
    for (let hour = 8; hour <= 18; hour++) {
      availableSlots.push({
        time: `${hour.toString().padStart(2, '0')}:00`,
        available: true,
      })
    }
    
    return NextResponse.json({
      success: true,
      data: {
        service,
        vehicleType,
        commune,
        servicePrice: servicePrice.base,
        maxPrice: servicePrice.max || null,
        displacementFee,
        estimatedTotal,
        estimatedDuration: 90, // minutes
        availableSlots,
      }
    })
    
  } catch (error) {
    console.error('Quote error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

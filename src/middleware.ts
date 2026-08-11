import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Proteger /admin/panel/* (excepto /admin/panel/login)
  if (pathname.startsWith('/admin/panel') && !pathname.startsWith('/admin/panel/login')) {
    const token = request.cookies.get('admin_token')?.value 
      || request.headers.get('authorization')?.replace('Bearer ', '');

    if (!token) {
      const loginUrl = new URL('/admin/panel/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/panel/:path*'],
};

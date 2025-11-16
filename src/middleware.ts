import { NextRequest, NextResponse } from 'next/server';

// Croatian routes to English folder mappings
const routeMap: Record<string, string> = {
  '/o-nama': '/about-us',
  '/usluge': '/services',
  '/cesta-pitanja': '/faq',
  '/kontakt': '/contact',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API routes, Next.js internals, and static files
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_vercel') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Handle English routes with /en prefix
  if (pathname.startsWith('/en')) {
    const cleanPath = pathname.replace(/^\/en/, '') || '/';
    const url = request.nextUrl.clone();
    url.pathname = `/en${cleanPath}`;
    
    // Set locale header for next-intl
    const response = NextResponse.rewrite(url);
    response.headers.set('x-locale', 'en');
    return response;
  }

  // Handle Croatian translated routes (root level)
  for (const [hrPath, enFolder] of Object.entries(routeMap)) {
    if (pathname === hrPath) {
      const url = request.nextUrl.clone();
      url.pathname = `/hr${enFolder}`;
      
      // Set locale header for next-intl
      const response = NextResponse.rewrite(url);
      response.headers.set('x-locale', 'hr');
      return response;
    }
  }

  // Handle Croatian homepage
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/hr';
    
    // Set locale header for next-intl
    const response = NextResponse.rewrite(url);
    response.headers.set('x-locale', 'hr');
    return response;
  }

  // Default: treat as Croatian (hr locale)
  const url = request.nextUrl.clone();
  url.pathname = `/hr${pathname}`;
  
  // Set locale header for next-intl
  const response = NextResponse.rewrite(url);
  response.headers.set('x-locale', 'hr');
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};

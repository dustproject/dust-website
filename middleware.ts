import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  const url = request.nextUrl;

  // Skip static files
  if (url.pathname.match(/\.(svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|woff2|woff|ttf|otf)$/)) {
    return NextResponse.next();
  }

  if (host === 'www.slayherobrine.com') {
    url.pathname = '/slayherobrine' + url.pathname;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  const url = request.nextUrl;

  if (host === 'www.slayherobrine.com') {
    url.pathname = '/slayherobrine' + url.pathname;
    return NextResponse.rewrite(url);
  }

  // Default behavior for other domains
  return NextResponse.next();
}

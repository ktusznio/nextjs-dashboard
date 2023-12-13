import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  // Restrict access to the /dashboard route
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // Redirect to login if not authenticated
    if (!session) {
      const url = req.nextUrl.clone();
      url.pathname = '/api/auth/signin';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

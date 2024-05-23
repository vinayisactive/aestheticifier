import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname; 
    const accessToken = request.cookies.get("accessToken")?.value || ""
    const isPublic = path === "/login" || path === "/signup"


    if(accessToken && isPublic) {
       return NextResponse.redirect(new URL('/', request.url))
    }        


    if(!accessToken && !isPublic )
        return NextResponse.redirect(new URL("/login", request.url));
 
}
 

export const config = {
  matcher: [
    '/login',
    '/signup',
    '/design'
  ]
}
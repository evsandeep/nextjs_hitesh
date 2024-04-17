import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const token= request.cookies.has('token') // => true
  if (!token){
    return NextResponse.redirect(new URL('/login', request.url))
  }
  const response = NextResponse.next()
  return response
}
export const config = {
    matcher:[
        '/profile',
        "/"
    ],
  }

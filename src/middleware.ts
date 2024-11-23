import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";
// 1st approach
// export function middleware(req: NextRequest, res: NextResponse) {
//   return NextResponse.redirect(new URL("/", req.url));
// }

// export const config = {
//   matcher: "/profile",
// };

//////////////////////////
// 2nd approach
export function middleware(req: NextRequest, res: NextResponse) {
  if (req.nextUrl.pathname == "/profile") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  //   if (req.nextUrl.pathname == "/profile") {
  //     return NextResponse.rewrite(new URL("/", req.url));
  //   } // rewrite will change content but route link/name remain same
}

import { NextRequest, NextResponse } from "next/server";

const middleWare = (request: NextRequest) => {
  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: ["/test/:id"],
};

export default middleWare;

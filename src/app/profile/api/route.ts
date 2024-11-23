import { NextRequest } from "next/server";
// import { headers } from "next/headers";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  // const headersList = headers();
  const headers = new Headers(req.headers);

  const authorization = headers.get("Authorization");
  const id = headers.get("id");

  //   console.log("authorization,id", authorization, id);
  //   return new Response(` Profile Api data authorization ${authorization} `); // this res is plain/text in contnet type

  ////////////////////////

  const cTheme = req.cookies.get("theme");

  console.log("theme", cTheme);
   
  ////
  const cookie = cookies();
  (await cookie).set("resultPage", "7282", { path: "profile" });

  const resultPage = (await cookie).get("resultPage");
  // const resultPage = req.cookies.get("resultPage");
  console.log("resultPage", resultPage);

  /////////////////////////////

  return new Response(
    `<h1> Profile Api data authorization ${authorization}<h1/>`,
    {
      headers: {
        "Content-Type": "text/html",
        // Authorization: "24242",       // this will set Headers
        "Set-Cookie": "theme=dark", //this will  set  cookies
      },
    }
  );
}

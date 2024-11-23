export const dynamic = "force-dynamic"; // this is imp for build to refelect cuurent updated time

export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}



import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filterdComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
 
  return Response.json(filterdComments);


  // const query = searchParams.get("id");
  // const filterdCommentsByID = query
  //   ? comments.filter((comment) => comment.id == Number(query))
  //   : comments;

  // return Response.json(filterdCommentsByID);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newComment = {
    id: comments.length + 1,
    text: body.text,
  };

  comments.push(newComment);
  return Response.json(newComment, { status: 201 });
}

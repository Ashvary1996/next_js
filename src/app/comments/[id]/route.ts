import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  if (parseInt(params.id) > comments.length) {
    redirect("/comments");
  }

  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );

  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;

  const targetedIndex = comments.findIndex((comment) => {
    return comment.id == parseInt(params.id);
  });
  comments[targetedIndex].text = text;

  return Response.json(comments[targetedIndex]);
}

// export async function PATCH(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const body = await request.json();
//   const { text } = body;

//   const data = comments.find((comment) => {
//     return comment.id == parseInt(params.id);
//   });
//   data.text = text;
//   return Response.json(data);
// }

//Delete Request
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const targetedIndex = comments.findIndex((comment) => {
    return comment.id == parseInt(params.id);
  });

  comments.splice(targetedIndex, 1);
  //   return Response.json({ index: targetedIndex, data: comments[targetedIndex] });
  return Response.json(comments);
}

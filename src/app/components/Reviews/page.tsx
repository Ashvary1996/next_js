import React from "react";

async function Reviews() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <div>Reviews</div>;
}

export default Reviews;

import { notFound } from "next/navigation";
import React from "react";

function getRandom(count: number) {
  return Math.floor(Math.random() * count);
}

function page({ params }: { params: { productId: string; reviewId: string } }) {
  const random = getRandom(2);
  console.log(random);

  if (random === 1) {
    throw new Error("Error loading Review");
  }
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }

  return (
    <div>
      <h2>Product : {params.productId}</h2>

      <h3>
        Review :<i> {params.reviewId}</i>
      </h3>
    </div>
  );
}

export default page;

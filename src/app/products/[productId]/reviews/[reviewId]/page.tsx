import { notFound } from "next/navigation";
import React from "react";

function page({ params }: { params: { productId: string; reviewId: string } }) {
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

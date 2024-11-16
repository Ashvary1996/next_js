import React from "react";

function page({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return (
    <>
      <div>Details about product : {params.productId}</div>
    </>
  );
}

export default page;

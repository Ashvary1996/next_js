import React from "react";

async function Product() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Product</div>;
}

export default Product;
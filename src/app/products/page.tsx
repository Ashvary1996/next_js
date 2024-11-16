import Link from "next/link";
import React from "react";

function page() {
  const productId = 100;
  return (
    <>
      <div>Product List </div>
      {/* <div>Product 1 </div>
      <div>Product 2 </div>
      <div>Product 3 </div> */}

      <h6>
        <Link href="/products/1">Product 1 </Link>
      </h6>
      <h6>
        <Link href="/products/2">Product 2 </Link>
      </h6>
      <h6>
        <Link href="/products/3" replace>Product 3 </Link> 
        {/* replace will clear or replace */}
      </h6> 
      <h6>
        <Link href={`/products/${productId}`}>Product  {productId} </Link>
      </h6>
    </>
  );
}

export default page;

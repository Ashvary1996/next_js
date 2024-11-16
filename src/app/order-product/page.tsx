"use client";

import { useRouter } from "next/navigation";

export default function Order_Product() {
  const router = useRouter();

  const handleClick = () => {
    console.log("placing order...");
    // router.push("/");
    router.replace("/");
    // router.back( );
    // router.forward( );
  };
  return (
    <>
      <h3>Order Product</h3>
      <button onClick={handleClick}> Place Order</button>
    </>
  );
}

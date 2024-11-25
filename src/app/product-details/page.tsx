import { Suspense } from "react";
import Product from "../components/Product/page";
import Reviews from "../components/Reviews/page";

function ProductDetailsPage() {
  return (
    <div>
      <h1>Product Details Page</h1>
      <Suspense fallback={<p>loading Product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>loading Reviews...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}

export default ProductDetailsPage;

import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};
// dynamic meta-data
// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };

// dynamic meta-data : for async
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone  ${params.productId}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return (
    <>
      <div>Details about product : {params.productId}</div>
    </>
  );
}

// export default function ProductDetails({
//   params,
// }: {
//   params: {
//     productId: string;
//   };
// }) {
//   return (
//     <>
//       <div>Details about product : {params.productId}</div>
//     </>
//   );
// }

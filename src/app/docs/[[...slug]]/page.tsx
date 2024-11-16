import React from "react";

function page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  {
    if (params.slug?.length === 2) {
      return (
        <h1>
          Viewing docs for feature of {params.slug[0]} and concept given by
          {params.slug[1]}
        </h1>
      );
    } else if (params.slug?.length === 1) {
      return <h2>Viewing docs for feature of {params.slug[0]}</h2>;
    }

    return <h2>slugtera : home page   {params.slug}</h2>;
  }
}
export default page;

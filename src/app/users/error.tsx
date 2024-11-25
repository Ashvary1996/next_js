"use client";

import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.log("error", error);
  }, [error]);
  return (
    <div>
      <h3>Error Fetching Users Data</h3>
      <p>{error.message}</p>
    </div>
  );
}

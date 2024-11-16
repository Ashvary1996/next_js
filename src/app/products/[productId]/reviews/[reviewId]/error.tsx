"use client";
import React from "react";

export default function Error({ error }: { error: Error }) {
  return (
    <>
      <h4>Error in Review--Id</h4>
      <b className="text-red-600">
        Error Msg : <i>{error.message}</i>
      </b>
    </>
  );
}

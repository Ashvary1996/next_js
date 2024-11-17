"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h4>Error in Review--Id</h4>
      <b className="text-red-600">
        Error Msg : <i>{error.message}</i>
      </b>
      <button onClick={reset}>try again</button>
    </div>
  );
}

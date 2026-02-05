"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h2 className="mb-2 text-2xl font-semibold">Something went wrong</h2>
      <p className="mb-6 text-gray-600">{error.message}</p>
      <button
        onClick={() => reset()}
        className="rounded bg-black px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  );
}

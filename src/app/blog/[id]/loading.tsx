export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-4 h-10 w-3/4 animate-pulse rounded bg-gray-200" />
      <div className="mb-6 h-4 w-1/3 animate-pulse rounded bg-gray-200" />
      <div className="mb-8 h-72 animate-pulse rounded-xl bg-gray-200" />
      <div className="space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-4 animate-pulse rounded bg-gray-200" />
        ))}
      </div>
    </div>
  );
}

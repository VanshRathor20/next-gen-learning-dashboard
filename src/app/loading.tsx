export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {/* Hero skeleton */}
      <div className="lg:col-span-2 rounded-2xl border border-white/5 bg-[#0f0f17] p-8 animate-pulse">
        <div className="h-3 bg-white/5 rounded w-24 mb-4" />
        <div className="h-9 bg-white/5 rounded w-56 mb-6" />
        <div className="flex gap-3">
          <div className="h-10 bg-white/5 rounded-xl w-32" />
          <div className="h-10 bg-white/5 rounded-xl w-28" />
        </div>
        <div className="flex gap-2 mt-6">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-white/5" />
              <div className="w-6 h-2 rounded bg-white/5" />
            </div>
          ))}
        </div>
      </div>

      {/* Activity skeleton */}
      <div className="rounded-2xl border border-white/5 bg-[#0f0f17] p-6 animate-pulse">
        <div className="h-3 bg-white/5 rounded w-20 mb-5" />
        <div className="flex gap-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1">
              {Array.from({ length: 7 }).map((_, j) => (
                <div key={j} className="w-4 h-4 rounded-sm bg-white/5" />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Course skeletons */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/5 bg-[#0f0f17] p-6 animate-pulse"
        >
          <div className="w-10 h-10 rounded-xl bg-white/5 mb-4" />
          <div className="h-4 bg-white/5 rounded w-3/4 mb-2" />
          <div className="h-3 bg-white/5 rounded w-1/2 mb-6" />
          <div className="flex justify-between mb-2">
            <div className="h-3 bg-white/5 rounded w-16" />
            <div className="h-3 bg-white/5 rounded w-8" />
          </div>
          <div className="h-1.5 bg-white/5 rounded-full" />
        </div>
      ))}
    </div>
  );
}

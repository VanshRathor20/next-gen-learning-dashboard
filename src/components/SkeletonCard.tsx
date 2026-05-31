export default function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#0f0f17] p-6 animate-pulse">
      {/* Icon skeleton */}
      <div className="w-10 h-10 rounded-xl bg-white/5 mb-4" />

      {/* Title skeleton */}
      <div className="h-4 bg-white/5 rounded-lg w-3/4 mb-2" />
      <div className="h-3 bg-white/5 rounded-lg w-1/2 mb-6" />

      {/* Progress bar skeleton */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <div className="h-3 bg-white/5 rounded w-16" />
          <div className="h-3 bg-white/5 rounded w-8" />
        </div>
        <div className="h-2 bg-white/5 rounded-full w-full" />
      </div>
    </div>
  );
}

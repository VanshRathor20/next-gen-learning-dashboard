import { Suspense } from "react";
import { getCourses } from "@/actions/getCourses";
import BentoGrid from "@/components/BentoGrid";
import SkeletonCard from "@/components/SkeletonCard";

function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {/* Hero skeleton */}
      <div className="lg:col-span-2 rounded-2xl border border-white/5 bg-[#0f0f17] p-8 animate-pulse">
        <div className="h-4 bg-white/5 rounded w-24 mb-4" />
        <div className="h-10 bg-white/5 rounded w-64 mb-6" />
        <div className="flex gap-3">
          <div className="h-10 bg-white/5 rounded-xl w-32" />
          <div className="h-10 bg-white/5 rounded-xl w-28" />
        </div>
      </div>

      {/* Activity skeleton */}
      <div className="rounded-2xl border border-white/5 bg-[#0f0f17] p-6 animate-pulse">
        <div className="h-4 bg-white/5 rounded w-20 mb-5" />
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

      {/* Course card skeletons */}
      {Array.from({ length: 4 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

async function DashboardContent() {
  const courses = await getCourses();

  return <BentoGrid courses={courses} />;
}

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingGrid />}>
      <DashboardContent />
    </Suspense>
  );
}

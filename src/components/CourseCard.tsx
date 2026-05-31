"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import * as LucideIcons from "lucide-react";
import { BookOpen, Clock, CheckCircle } from "lucide-react";
import { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
  index: number;
}

const courseMeta: Record<
  string,
  { duration: string; lessons: number; total: number }
> = {
  "Advanced React Patterns": { duration: "4h 30m", lessons: 9, total: 12 },
  "TypeScript Mastery": { duration: "3h 15m", lessons: 5, total: 14 },
  "System Design Fundamentals": { duration: "6h 00m", lessons: 8, total: 13 },
  "Framer Motion & Animation": { duration: "2h 45m", lessons: 11, total: 12 },
};

function DynamicIcon({ name }: { name: string }) {
  const Icon = (
    LucideIcons as unknown as Record<
      string,
      React.ComponentType<{ size?: number; className?: string }>
    >
  )[name];
  if (!Icon) return <BookOpen size={20} className="text-violet-400" />;
  return <Icon size={20} className="text-violet-400" />;
}

function AnimatedProgressBar({ progress }: { progress: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const controls = animate(0, progress, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate(value) {
        bar.style.width = `${value}%`;
      },
    });
    return () => controls.stop();
  }, [progress]);

  return (
    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
        style={{ width: "0%" }}
      />
    </div>
  );
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const meta = courseMeta[course.title] ?? {
    duration: "3h 00m",
    lessons: 6,
    total: 10,
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24,
      }}
      whileHover={{ scale: 1.02 }}
      className="relative rounded-2xl border border-white/5 bg-[#0f0f17] p-6 overflow-hidden group cursor-pointer"
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(217,70,239,0.06))",
          boxShadow: "inset 0 0 0 1px rgba(139,92,246,0.25)",
        }}
      />

      {/* Icon */}
      <div className="relative z-10 w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
        <DynamicIcon name={course.icon_name} />
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-sm font-semibold text-white mb-3 leading-snug">
        {course.title}
      </h3>

      {/* Meta info */}
      <div className="relative z-10 flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1.5">
          <Clock size={11} className="text-white/30" />
          <span className="text-xs text-white/30">{meta.duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle size={11} className="text-white/30" />
          <span className="text-xs text-white/30">
            {meta.lessons}/{meta.total} lessons
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="relative z-10 flex justify-between items-center mb-2">
        <span className="text-xs text-white/30 uppercase tracking-wider">
          Progress
        </span>
        <span className="text-xs font-semibold text-violet-400">
          {course.progress}%
        </span>
      </div>
      <div className="relative z-10">
        <AnimatedProgressBar progress={course.progress} />
      </div>
    </motion.article>
  );
}

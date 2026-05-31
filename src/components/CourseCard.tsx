"use client";

import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import * as LucideIcons from "lucide-react";
import { BookOpen } from "lucide-react";
import { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
  index: number;
}

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
      className="relative rounded-2xl border border-white/5 bg-[#0f0f17] p-6 overflow-hidden group"
    >
      {/* Hover glow border */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(139,92,246,0.08), rgba(217,70,239,0.05))",
          boxShadow: "inset 0 0 0 1px rgba(139,92,246,0.2)",
        }}
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Icon */}
      <div className="relative z-10 w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
        <DynamicIcon name={course.icon_name} />
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-sm font-semibold text-white mb-1 leading-snug">
        {course.title}
      </h3>

      {/* Progress label */}
      <div className="relative z-10 flex justify-between items-center mb-2 mt-4">
        <span className="text-xs text-white/30 uppercase tracking-wider">
          Progress
        </span>
        <span className="text-xs font-semibold text-violet-400">
          {course.progress}%
        </span>
      </div>

      {/* Animated progress bar */}
      <div className="relative z-10">
        <AnimatedProgressBar progress={course.progress} />
      </div>
    </motion.article>
  );
}

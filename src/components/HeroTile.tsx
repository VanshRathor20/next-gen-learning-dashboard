"use client";

import { motion } from "framer-motion";
import { Flame, Star, Target, Zap, BookOpen } from "lucide-react";

export default function HeroTile() {
  const streakDays = 7;
  const todayProgress = 68;
  const dailyGoal = 2;

  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative col-span-2 rounded-2xl overflow-hidden border border-white/5 bg-[#0f0f17] p-8"
    >
      {/* Grain texture — CSS based, no SVG URL */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          opacity: 0.04,
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4t5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dKoJ4ORq+e0Dz7uLv1P8Ua1bBHkf4Oo26/tPtlfAyWyTh18MDME9Gm6kYWMUIyMptIpkypIhVJhiqoiW+joqSjiSNMOkPISTDKm1sfFm7bXRe16xjxyds0lot8suvf1j/qm1slbC1uVRntkHkcu8RPQdPKU+FLtHjtL1gFyUzoz89YWmXKkUm3Hy19dyWnGerIRuBMZSMFoYjUkJQkah+MEIOsWvSHEkA2hHaHwfqI5Tqjau1a6hUAjpHE4tqHGbB7aHHNyhAAoAAAAASUVORK5CYII=")`,
        }}
      />

      {/* Glow blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-10 left-40 w-48 h-48 rounded-full bg-white/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-transparent to-gray-900/20 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        {/* Left — Greeting */}
        <div className="flex-1">
          <p className="text-xs text-white/40 mb-2 uppercase tracking-widest font-medium">
            Welcome back
          </p>

          {/* Name — no emoji, clean */}
          <h1 className="text-4xl font-bold text-white mb-6">Vansh Rathor</h1>

          {/* Badges — all Lucide icons, no emoji */}
          <div className="flex items-center gap-3 flex-wrap mb-6">
            <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-xl px-4 py-2">
              <Flame size={16} className="text-orange-400" />
              <span className="text-orange-300 font-semibold text-sm">
                {streakDays} Day Streak
              </span>
            </div>
            <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-4 py-2">
              <Star size={16} className="text-yellow-400" />
              <span className="text-yellow-300 font-semibold text-sm">
                1,240 XP
              </span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-2">
              <Zap size={16} className="text-emerald-400" />
              <span className="text-emerald-300 font-semibold text-sm">
                Top 12%
              </span>
            </div>
          </div>

          {/* Streak dots — Lucide Flame icon, no emoji */}
          <div className="flex items-center gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
              <div key={day} className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    i < streakDays
                      ? "bg-orange-500/80 border border-orange-400/50"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <Flame
                    size={13}
                    className={i < streakDays ? "text-white" : "text-white/20"}
                  />
                </div>
                <span className="text-[10px] text-white/30">{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Stats panel */}
        <div className="flex flex-col gap-3 min-w-[200px]">
          {/* Today's Progress */}
          <div className="rounded-xl bg-white/5 border border-white/[0.08] p-4">
            <div className="flex items-center gap-2 mb-3">
              <Target size={14} className="text-gray-300" />
              <span className="text-xs text-white/50 uppercase tracking-wider">
                Today's Progress
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold text-white">
                {todayProgress}%
              </span>
              <span className="text-xs text-white/30">Daily Goal</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${todayProgress}%` }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                className="h-full bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"
              />
            </div>
          </div>

          {/* Lessons Today */}
          <div className="rounded-xl bg-white/5 border border-white/[0.08] p-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen size={14} className="text-gray-300" />
              <span className="text-xs text-white/50 uppercase tracking-wider">
                Lessons Today
              </span>
            </div>
            <p className="text-2xl font-bold text-white">
              {dailyGoal}{" "}
              <span className="text-sm font-normal text-white/30">
                / 3 done
              </span>
            </p>
          </div>

          {/* Motivational — Lucide icon instead of emoji */}
          <div className="rounded-xl bg-white/5 border border-white/15 p-4">
            <div className="flex items-start gap-2">
              <Flame
                size={14}
                className="text-orange-400 mt-0.5 flex-shrink-0"
              />
              <p className="text-xs text-white/70 leading-relaxed">
                You're on fire! Complete 1 more lesson to hit your daily goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

"use client";

import { motion } from "framer-motion";
import { Flame, Star } from "lucide-react";

export default function HeroTile() {
  const streakDays = 7;

  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative col-span-2 rounded-2xl overflow-hidden border border-white/5 bg-[#0f0f17] p-8"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-fuchsia-900/10 pointer-events-none" />

      {/* Decorative circle */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <p className="text-sm text-white/40 mb-2 uppercase tracking-widest font-medium">
          Welcome back
        </p>
        <h1 className="text-4xl font-bold text-white mb-6">Vansh Rathor 👋</h1>

        {/* Streak */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-xl px-4 py-2.5">
            <Flame size={18} className="text-orange-400" />
            <span className="text-orange-300 font-semibold text-sm">
              {streakDays} Day Streak
            </span>
          </div>

          <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-4 py-2.5">
            <Star size={18} className="text-yellow-400" />
            <span className="text-yellow-300 font-semibold text-sm">
              1,240 XP
            </span>
          </div>
        </div>

        {/* Streak dots */}
        <div className="flex items-center gap-2 mt-6">
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
                  size={14}
                  className={i < streakDays ? "text-white" : "text-white/20"}
                />
              </div>
              <span className="text-[10px] text-white/30">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

const intensityClass = (value: number) => {
  if (value === 0) return "bg-white/5 border-white/5";
  if (value === 1) return "bg-violet-900/60 border-violet-700/30";
  if (value === 2) return "bg-violet-700/70 border-violet-500/40";
  if (value === 3) return "bg-violet-500/80 border-violet-400/50";
  return "bg-violet-400 border-violet-300/60";
};

// Fixed data — no Math.random(), no hydration mismatch
const ACTIVITY_DATA = [
  [4, 2, 0, 3, 1, 4, 2],
  [0, 3, 2, 4, 1, 0, 3],
  [2, 1, 4, 0, 3, 2, 1],
  [3, 4, 1, 2, 0, 3, 4],
  [1, 0, 3, 4, 2, 1, 0],
  [4, 2, 1, 3, 0, 4, 2],
  [0, 3, 4, 1, 2, 0, 3],
  [2, 1, 0, 4, 3, 2, 1],
  [3, 4, 2, 0, 1, 3, 4],
  [1, 0, 3, 2, 4, 1, 0],
  [4, 2, 1, 0, 3, 4, 2],
  [0, 3, 4, 2, 1, 0, 3],
];

export default function ActivityTile() {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-2xl border border-white/5 bg-[#0f0f17] p-6"
    >
      <div className="flex items-center gap-2 mb-5">
        <Activity size={16} className="text-violet-400" />
        <h2 className="text-sm font-semibold text-white/70 uppercase tracking-widest">
          Activity
        </h2>
      </div>

      <div className="flex gap-1">
        {ACTIVITY_DATA.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day, di) => (
              <motion.div
                key={di}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: (wi * 7 + di) * 0.005,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={`w-4 h-4 rounded-sm border ${intensityClass(day)}`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-4">
        <span className="text-xs text-white/30">Less</span>
        {[0, 1, 2, 3, 4].map((v) => (
          <div
            key={v}
            className={`w-3 h-3 rounded-sm border ${intensityClass(v)}`}
          />
        ))}
        <span className="text-xs text-white/30">More</span>
      </div>
    </motion.article>
  );
}

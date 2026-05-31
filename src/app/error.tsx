"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-full p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="max-w-md w-full rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center"
      >
        <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
          <AlertTriangle size={22} className="text-red-400" />
        </div>

        <h2 className="text-lg font-semibold text-white mb-2">
          Something went wrong
        </h2>
        <p className="text-sm text-white/40 mb-6">
          Could not connect to the database. Please check your Supabase
          credentials or try again.
        </p>

        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white/70 hover:text-white hover:border-white/20 transition-colors"
        >
          <RefreshCw size={14} />
          Try again
        </button>
      </motion.div>
    </div>
  );
}

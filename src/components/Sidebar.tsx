"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ─── DESKTOP sidebar (≥1024px) ─── */}
      <motion.nav
        animate={{ width: collapsed ? 72 : 220 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="hidden lg:flex flex-col h-full bg-[#0f0f17] border-r border-white/5 py-6 overflow-hidden flex-shrink-0"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 mb-10">
          <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center flex-shrink-0">
            <Zap size={16} className="text-white" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-semibold text-white whitespace-nowrap"
              >
                LearnFlow
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col gap-1 px-3 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm w-full text-left"
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-desktop"
                    className="absolute inset-0 bg-white/8 border border-white/15 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon
                  size={18}
                  className={`relative z-10 flex-shrink-0 transition-colors ${
                    isActive ? "text-gray-300" : "text-white/40"
                  }`}
                />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.15 }}
                      className={`relative z-10 whitespace-nowrap transition-colors ${
                        isActive ? "text-white/70" : "text-white/50"
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>

        {/* Collapse Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mx-3 mt-4 flex items-center justify-center p-2 rounded-xl border border-white/10 text-white/40 hover:text-white/70 hover:border-white/20 transition-colors"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </motion.nav>

      {/* ─── TABLET sidebar (768px–1024px) icons only ─── */}
      <nav className="hidden md:flex lg:hidden flex-col h-full w-[72px] bg-[#0f0f17] border-r border-white/5 py-6 items-center flex-shrink-0">
        <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center mb-10">
          <Zap size={16} className="text-white" />
        </div>
        <div className="flex flex-col gap-1 w-full px-3 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                title={item.label}
                className="relative flex items-center justify-center p-2.5 rounded-xl w-full"
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-tablet"
                    className="absolute inset-0 bg-white/8 border border-white/15 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon
                  size={18}
                  className={`relative z-10 transition-colors ${
                    isActive ? "text-gray-300" : "text-white/40"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </nav>

      {/* ─── MOBILE hamburger button ─── */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 w-10 h-10 rounded-xl bg-[#0f0f17] border border-white/10 flex items-center justify-center text-white/70"
      >
        <Menu size={18} />
      </button>

      {/* ─── MOBILE drawer overlay ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.nav
              initial={{ x: -240 }}
              animate={{ x: 0 }}
              exit={{ x: -240 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-0 left-0 z-50 h-full w-[220px] bg-[#0f0f17] border-r border-white/5 py-6 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center">
                    <Zap size={16} className="text-white" />
                  </div>
                  <span className="text-sm font-semibold text-white">
                    LearnFlow
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white/40 hover:text-white/70 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav Items */}
              <div className="flex flex-col gap-1 px-3 flex-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = active === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActive(item.id);
                        setMobileOpen(false);
                      }}
                      className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm w-full text-left"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="sidebar-active-mobile"
                          className="absolute inset-0 bg-white/8 border border-white/15 rounded-xl"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                      <Icon
                        size={18}
                        className={`relative z-10 flex-shrink-0 transition-colors ${
                          isActive ? "text-gray-300" : "text-white/40"
                        }`}
                      />
                      <span
                        className={`relative z-10 whitespace-nowrap transition-colors ${
                          isActive ? "text-white/70" : "text-white/50"
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* ─── MOBILE bottom nav (always visible on mobile) ─── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0f0f17] border-t border-white/5 flex items-center justify-around px-4 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="relative flex flex-col items-center gap-1 px-3 py-1"
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active-bottom"
                  className="absolute inset-0 bg-white/8 rounded-xl"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon
                size={18}
                className={`relative z-10 transition-colors ${
                  isActive ? "text-gray-300" : "text-white/40"
                }`}
              />
              <span
                className={`relative z-10 text-[10px] transition-colors ${
                  isActive ? "text-white/70" : "text-white/40"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}

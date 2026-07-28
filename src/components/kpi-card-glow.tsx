"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import KPICardProps from "@/interface/KpiCardProps";

export function KPICardGlow({ title, value, change, isPositive, icon, delay = 0 }: KPICardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5 }}
      className="group relative p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden"
    >
      {/* Resplandor decorativo de fondo en hover */}
      <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

      <div className="flex items-center justify-between relative z-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{title}</span>
        <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
          {icon}
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between relative z-10">
        <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">{value}</h3>
        <span
          className={`inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full border ${
            isPositive
              ? "text-emerald-700 bg-emerald-50/80 border-emerald-200 dark:border-emerald-900/50 dark:bg-emerald-950/60 dark:text-emerald-400"
              : "text-rose-700 bg-rose-50/80 border-rose-200 dark:border-rose-900/50 dark:bg-rose-950/60 dark:text-rose-400"
          }`}
        >
          {isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
          {change}
        </span>
      </div>
    </motion.div>
  );
}
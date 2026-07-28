"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

import { KPICardProps } from "../interface/KpiCardProps";


export function KPICard({ title, value, change, isPositive, icon }: KPICardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</span>
        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{value}</h3>
        <span
          className={`inline-flex items-center text-xs font-semibold px-2 py-1 rounded-full ${
            isPositive
              ? "text-emerald-700 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-400"
              : "text-rose-700 bg-rose-50 dark:bg-rose-950/50 dark:text-rose-400"
          }`}
        >
          {isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
          {change}
        </span>
      </div>
    </motion.div>
  );
}
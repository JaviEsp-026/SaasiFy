"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { month: "Ene", mrr: 4200 },
  { month: "Feb", mrr: 5100 },
  { month: "Mar", mrr: 6800 },
  { month: "Abr", mrr: 7400 },
  { month: "May", mrr: 9100 },
  { month: "Jun", mrr: 11300 },
  { month: "Jul", mrr: 14250 },
];

export function RevenueChart() {
  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Crecimiento de Ingresos (MRR)</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Evolución en los últimos 7 meses</p>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
          +239% este año
        </span>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorMrr" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${val / 1000}k €`} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 p-3 rounded-xl shadow-xl text-xs space-y-0.5 border border-slate-700 dark:border-slate-200">
                      <p className="font-semibold opacity-80">{payload[0].payload.month}</p>
                      <p className="text-indigo-400 dark:text-indigo-600 font-bold text-sm">{payload[0].value?.toLocaleString()} €</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area type="monotone" dataKey="mrr" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorMrr)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
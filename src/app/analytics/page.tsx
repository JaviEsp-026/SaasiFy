"use client";

import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from "recharts";
import { ArrowUpRight, ArrowDownRight, Globe, Smartphone, Monitor, Tablet } from "lucide-react";

// Datos de Tráfico por Fuente
const trafficData = [
  { source: "Google", visits: 12400 },
  { source: "Directo", visits: 8300 },
  { source: "X / Twitter", visits: 5600 },
  { source: "LinkedIn", visits: 3200 },
  { source: "GitHub", visits: 2100 },
];

// Datos de Dispositivos 
const deviceData = [
  { name: "Escritorio", value: 65, color: "#6366f1" }, // Indigo
  { name: "Móvil", value: 28, color: "#a855f7" },      // Purple
  { name: "Tablet", value: 7, color: "#38bdf8" },      // Sky
];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Cabecera */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Analítica de Tráfico</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Comportamiento de los usuarios, fuentes de adquisición y dispositivos.
          </p>
        </div>

        {/* Métricas rápidas de conversión */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Tasa de Conversión</p>
            <div className="mt-2 flex items-baseline justify-between">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">3.42%</h3>
              <span className="inline-flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-1 rounded-full">
                <ArrowUpRight className="w-3 h-3 mr-1" /> +0.6%
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Tasa de Rebote</p>
            <div className="mt-2 flex items-baseline justify-between">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">41.8%</h3>
              <span className="inline-flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-1 rounded-full">
                <ArrowDownRight className="w-3 h-3 mr-1" /> -2.1%
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Tiempo Medio de Sesión</p>
            <div className="mt-2 flex items-baseline justify-between">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">4m 12s</h3>
              <span className="inline-flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-1 rounded-full">
                <ArrowUpRight className="w-3 h-3 mr-1" /> +18s
              </span>
            </div>
          </div>
        </div>

        {/* Sección de Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Gráfico 1: Fuentes de Tráfico (Barras Horizontal) */}
          <div className="lg:col-span-2 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Fuentes de Adquisición</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">Visitas totales desglosadas por canal</p>
              </div>
              <Globe className="w-5 h-5 text-indigo-500" />
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trafficData} layout="vertical" margin={{ top: 10, right: 10, left: 20, bottom: 0 }}>
                  <XAxis type="number" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis dataKey="source" type="category" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-slate-900 text-white p-2.5 rounded-xl text-xs">
                            <span className="font-semibold">{payload[0].value?.toLocaleString()} visitas</span>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="visits" fill="#6366f1" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Gráfico 2: Dispositivos (Dona) */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Dispositivos</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Distribución de audiencia por hardware</p>
            </div>

            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {deviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-slate-900 text-white p-2.5 rounded-xl text-xs">
                            <span>{payload[0].name}: {payload[0].value}%</span>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Leyenda visual de dispositivos */}
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                <span className="flex items-center"><Monitor className="w-3.5 h-3.5 mr-1.5 text-indigo-500" /> Escritorio</span>
                <span className="font-bold">65%</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                <span className="flex items-center"><Smartphone className="w-3.5 h-3.5 mr-1.5 text-purple-500" /> Móvil</span>
                <span className="font-bold">28%</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                <span className="flex items-center"><Tablet className="w-3.5 h-3.5 mr-1.5 text-sky-500" /> Tablet</span>
                <span className="font-bold">7%</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
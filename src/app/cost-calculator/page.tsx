"use client";

import { useState } from "react";
import { Server, Cpu, Database, Zap, Sparkles } from "lucide-react";

export function CostCalculator() {
  const [users, setUsers] = useState(5000);

  // Lógica de estimación de costes de infraestructura según volumen de usuarios
  const vercelCost = Math.round(users * 0.002 + 20);
  const supabaseCost = Math.round(users * 0.005 + 25);
  const openAiCost = Math.round(users * 0.012);
  const totalCost = vercelCost + supabaseCost + openAiCost;

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Estimador de Costes Cloud</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Simulación del consumo de infraestructura en tiempo real</p>
          </div>
        </div>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
          Pro Feature
        </span>
      </div>

      {/* Control Deslizante (Slider) */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-semibold">
          <span className="text-slate-500 dark:text-slate-400">Usuarios Activos Estimados:</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">{users.toLocaleString()} usuarios</span>
        </div>
        <input
          type="range"
          min="1000"
          max="50000"
          step="1000"
          value={users}
          onChange={(e) => setUsers(Number(e.target.value))}
          className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
      </div>

      {/* Desglose de Proveedores */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1">
          <div className="flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 space-x-1.5">
            <Server className="w-3.5 h-3.5 text-black dark:text-white" />
            <span>Vercel Hosting</span>
          </div>
          <p className="text-base font-bold text-slate-900 dark:text-white">{vercelCost} € <span className="text-[10px] text-slate-400 font-normal">/mes</span></p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1">
          <div className="flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 space-x-1.5">
            <Database className="w-3.5 h-3.5 text-emerald-500" />
            <span>Supabase DB</span>
          </div>
          <p className="text-base font-bold text-slate-900 dark:text-white">{supabaseCost} € <span className="text-[10px] text-slate-400 font-normal">/mes</span></p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1">
          <div className="flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 space-x-1.5">
            <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>OpenAI API</span>
          </div>
          <p className="text-base font-bold text-slate-900 dark:text-white">{openAiCost} € <span className="text-[10px] text-slate-400 font-normal">/mes</span></p>
        </div>
      </div>

      {/* Resultado Total */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-between shadow-md shadow-indigo-500/20">
        <div className="flex items-center space-x-2">
          <Zap className="w-5 h-5 fill-current text-amber-300" />
          <span className="text-xs font-medium">Coste de Operación Estimado:</span>
        </div>
        <span className="text-xl font-extrabold">{totalCost} € / mes</span>
      </div>
    </div>
  );
}
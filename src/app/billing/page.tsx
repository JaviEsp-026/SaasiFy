"use client";

import { useState } from "react";
import { PlanGrid } from "./atoms/plan-grid";
import { BillingHistory } from "./atoms/billing-history";

export default function BillingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Cabecera */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Facturación y Planes</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Gestiona tu suscripción activa, métodos de pago e historial de facturas.
          </p>
        </div>

        {/* Interruptor Mensual / Anual */}
        <div className="flex justify-center items-center space-x-4">
          <span className={`text-sm font-medium ${!isAnnual ? "text-slate-900 dark:text-white" : "text-slate-400"}`}>
            Facturación Mensual
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-8 bg-indigo-600 rounded-full p-1 transition-colors focus:outline-none"
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                isAnnual ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <div className="flex items-center space-x-1.5">
            <span className={`text-sm font-medium ${isAnnual ? "text-slate-900 dark:text-white" : "text-slate-400"}`}>
              Facturación Anual
            </span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400">
              Ahorra 20%
            </span>
          </div>
        </div>

        {/* Grid de Planes */}
        <PlanGrid isAnnual={isAnnual} />

        {/* Historial de Facturas */}
        <BillingHistory />

      </div>
    </main>
  );
}
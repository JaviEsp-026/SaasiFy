import { Zap, Check } from "lucide-react";
import { useState } from "react";

const plans = [
    {
      name: "Starter",
      description: "Ideal para proyectos personales y validar ideas rápido.",
      priceMonthly: 19,
      priceAnnual: 15,
      features: ["Hasta 3 proyectos", "Análisis de tráfico básico", "Soporte por email", "Exportación de datos a CSV"],
      isPopular: false,
    },
    {
      name: "Pro",
      description: "La opción preferida para startups y desarrolladores solistas.",
      priceMonthly: 49,
      priceAnnual: 39,
      features: ["Proyectos ilimitados", "Análisis avanzado en tiempo real", "Integración con Stripe / PayPal", "Soporte prioritario 24/7", "Exportación en PDF"],
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "Para equipos grandes que necesitan infraestructura dedicada.",
      priceMonthly: 129,
      priceAnnual: 99,
      features: ["Todo lo de Pro", "Infraestructura dedicada", "Gestor de cuenta exclusivo", "SLA garantizado del 99.9%", "Auditoría de seguridad"],
      isPopular: false,
    },
  ];

export function PlanGrid(props: {isAnnual: boolean}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 bg-white dark:bg-slate-900 border transition-all ${
                plan.isPopular
                  ? "border-indigo-500 shadow-xl shadow-indigo-500/10 ring-2 ring-indigo-500"
                  : "border-slate-100 dark:border-slate-800 shadow-sm"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full uppercase tracking-wider flex items-center space-x-1">
                  <Zap className="w-3 h-3 fill-current" />
                  <span>Más Popular</span>
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 min-h-[32px]">{plan.description}</p>

              <div className="my-6">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                  {props.isAnnual ? plan.priceAnnual : plan.priceMonthly} €
                </span>
                <span className="text-slate-400 text-sm font-medium"> / mes</span>
              </div>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.isPopular
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                }`}
              >
                Cambiar a {plan.name}
              </button>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-xs text-slate-600 dark:text-slate-300">
                    <Check className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    )
}
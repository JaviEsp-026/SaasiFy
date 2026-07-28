import { DollarSign, Users, ShoppingCart, Activity } from "lucide-react";
import { KPICard } from "@/components/kpi-card";
import { RevenueChart } from "@/components/revenue-chart";
import { CostCalculator } from "./cost-calculator/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Cabecera */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Panel de Control</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Resumen en tiempo real de tu rendimiento SaaS.
          </p>
        </div>

        {/* Grid de Métricas KPI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Ingresos Recurrentes (MRR)"
            value="14.250 €"
            change="+12.5%"
            isPositive={true}
            icon={<DollarSign className="w-5 h-5" />}
          />
          <KPICard
            title="Clientes Activos"
            value="1.240"
            change="+4.1%"
            isPositive={true}
            icon={<Users className="w-5 h-5" />}
          />
          <KPICard
            title="Ventas del Mes"
            value="312"
            change="-2.3%"
            isPositive={false}
            icon={<ShoppingCart className="w-5 h-5" />}
          />
          <KPICard
            title="Tasa de Conversión"
            value="3.8%"
            change="+0.8%"
            isPositive={true}
            icon={<Activity className="w-5 h-5" />}
          />
        </div>

        <RevenueChart />
        <CostCalculator />
      </div>
    </main>
  );
}
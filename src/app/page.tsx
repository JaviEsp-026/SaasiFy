import { DollarSign, Users, ShoppingCart, Activity } from "lucide-react";
import { KPICardGlow } from "@/components/kpi-card-glow";
import { RevenueChart } from "@/components/revenue-chart";
import CostCalculator from "@/components/cost-calculator";
import  {ThemeToggler}  from "@/components/theme-toggler";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 lg:p-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Cabecera Principal con ThemeToggle */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Panel de Control
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
              Visión general y métricas clave en tiempo real.
            </p>
          </div>
          <ThemeToggler />
        </div>

        {/* Grid de KPIs con animaciones escalonadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICardGlow delay={0.1} title="Ingresos Recurrentes" value="14.250 €" change="+12.5%" isPositive={true} icon={<DollarSign className="w-5 h-5" />} />
          <KPICardGlow delay={0.2} title="Clientes Activos" value="1.240" change="+4.1%" isPositive={true} icon={<Users className="w-5 h-5" />} />
          <KPICardGlow delay={0.3} title="Ventas del Mes" value="312" change="-2.3%" isPositive={false} icon={<ShoppingCart className="w-5 h-5" />} />
          <KPICardGlow delay={0.4} title="Tasa de Conversión" value="3.8%" change="+0.8%" isPositive={true} icon={<Activity className="w-5 h-5" />} />
        </div>

        {/* Gráfico de Ingresos */}
        <RevenueChart />

        {/* Calculadora de Infraestructura */}
        <CostCalculator />

      </div>
    </main>
  );
}
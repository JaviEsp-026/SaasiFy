import { CreditCard, Download, ShieldCheck } from "lucide-react";


const invoices = [
    { id: "INV-2026-001", date: "01 May, 2026", amount: "39,00 €", status: "Pagada" },
    { id: "INV-2026-002", date: "01 Apr, 2026", amount: "39,00 €", status: "Pagada" },
    { id: "INV-2026-003", date: "01 Mar, 2026", amount: "39,00 €", status: "Pagada" },
  ];

export function BillingHistory() {
    return (
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Historial de Facturación</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Descarga los recibos de tus pagos recientes.</p>
            </div>
            <ShieldCheck className="w-6 h-6 text-emerald-500" />
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="py-4 flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{invoice.id}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{invoice.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="font-semibold text-slate-900 dark:text-white">{invoice.amount}</span>
                  <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
}

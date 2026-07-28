"use client";

import { useState } from "react";
import { Search, Filter, MoreHorizontal, ArrowUpDown, UserPlus } from "lucide-react";

interface Customer {
  id: string;
  name: string;
  email: string;
  avatar: string;
  plan: string;
  status: "active" | "pending" | "canceled";
  spent: string;
  date: string;
}

const customersData: Customer[] = [
  { id: "1", name: "Ana Martínez", email: "ana.martinez@example.com", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150", plan: "Pro Anual", status: "active", spent: "299,00 €", date: "12 May, 2026" },
  { id: "2", name: "Carlos Gómez", email: "carlos.g@company.com", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150", plan: "Starter Mensual", status: "active", spent: "29,00 €", date: "10 May, 2026" },
  { id: "3", name: "Elena Rostova", email: "elena@techcorp.io", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150", plan: "Enterprise", status: "pending", spent: "899,00 €", date: "08 May, 2026" },
  { id: "4", name: "David Luque", email: "david.l@designstudio.es", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150", plan: "Pro Mensual", status: "canceled", spent: "145,00 €", date: "01 May, 2026" },
  { id: "5", name: "Sofía Fernández", email: "sofia@startup.co", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150", plan: "Pro Anual", status: "active", spent: "299,00 €", date: "28 Apr, 2026" },
];

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customersData.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Cabecera de la página */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Clientes</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Gestiona los usuarios registrados, sus suscripciones y facturación.
            </p>
          </div>
          <button className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shadow-lg shadow-indigo-500/20">
            <UserPlus className="w-4 h-4" />
            <span>Añadir Cliente</span>
          </button>
        </div>

        {/* Barra de Filtros y Búsqueda */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por nombre o email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white placeholder-slate-400"
            />
          </div>
          <button className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filtros Avanzados</span>
          </button>
        </div>

        {/* Tabla de Clientes */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-100 dark:border-slate-800">
                <tr>
                  <th className="p-4 pl-6">Cliente</th>
                  <th className="p-4">Plan</th>
                  <th className="p-4">Estado</th>
                  <th className="p-4">Total Gastado</th>
                  <th className="p-4">Fecha de Registro</th>
                  <th className="p-4 pr-6 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 pl-6 flex items-center space-x-3">
                      <img src={customer.avatar} alt={customer.name} className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white leading-tight">{customer.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{customer.email}</p>
                      </div>
                    </td>
                    <td className="p-4 font-medium">{customer.plan}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                          customer.status === "active"
                            ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400"
                            : customer.status === "pending"
                            ? "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {customer.status === "active" ? "Activo" : customer.status === "pending" ? "Pendiente" : "Cancelado"}
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-slate-900 dark:text-white">{customer.spent}</td>
                    <td className="p-4 text-xs text-slate-500 dark:text-slate-400">{customer.date}</td>
                    <td className="p-4 pr-6 text-right">
                      <button className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
"use client";

import { useState } from "react";
import { User, Lock, Bell, Key, Save, Trash2, Copy, Check } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "security" | "notifications" | "api">("profile");
  const [copiedKey, setCopiedKey] = useState(false);

  const apiKey = "sk_live_51M00x2eS29sSaasifyUI8921";

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Cabecera */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Ajustes</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Administra la cuenta, preferencias de seguridad y credenciales de integración.
          </p>
        </div>

        {/* Menú de Pestañas (Tabs) */}
        <div className="flex space-x-2 border-b border-slate-200 dark:border-slate-800 overflow-x-auto pb-1">
          {[
            { id: "profile", label: "Perfil", icon: User },
            { id: "security", label: "Seguridad", icon: Lock },
            { id: "notifications", label: "Notificaciones", icon: Bell },
            { id: "api", label: "API Keys", icon: Key },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Contenido de la Pestaña: Perfil */}
        {activeTab === "profile" && (
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Información de Usuario</h2>

            {/* Avatar */}
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                alt="Avatar"
                className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
              />
              <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl text-xs font-semibold transition-colors">
                Cambiar foto
              </button>
            </div>

            {/* Formulario */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Nombre</label>
                <input
                  type="text"
                  defaultValue="Elena"
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Apellidos</label>
                <input
                  type="text"
                  defaultValue="Rostova"
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  defaultValue="elena@techcorp.io"
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shadow-lg shadow-indigo-500/20">
                <Save className="w-4 h-4" />
                <span>Guardar Cambios</span>
              </button>
            </div>
          </div>
        )}

        {/* Contenido de la Pestaña: API Keys */}
        {activeTab === "api" && (
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Claves de API de Producción</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Utiliza estas credenciales para autenticar las peticiones a la API desde tus servidores.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">Secret Key</label>
              <div className="flex items-center space-x-2">
                <input
                  type="password"
                  value={apiKey}
                  readOnly
                  className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white font-mono"
                />
                <button
                  onClick={handleCopyKey}
                  className="p-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors flex-shrink-0"
                >
                  {copiedKey ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Zona de Peligro (Común en todos los SaaS) */}
        <div className="p-6 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/50 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-rose-700 dark:text-rose-400">Eliminar cuenta</h3>
            <p className="text-xs text-rose-600/80 dark:text-rose-400/70">
              Esta acción borrará de forma permanente tus datos y suscripciones activas.
            </p>
          </div>
          <button className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition-colors">
            <Trash2 className="w-4 h-4" />
            <span>Eliminar</span>
          </button>
        </div>
      </div>
    </main>
  );
}
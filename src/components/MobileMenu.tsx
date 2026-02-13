"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Search, Instagram, Facebook } from 'lucide-react';
import navData from '@/data/navigation.json';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    // Estado para las pestañas superiores (estilo Fashion Nova)
    const [activeTab, setActiveTab] = useState("Mujer");
    const tabs = ["Mujer", "Curvas", "Hombre"];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay oscuro de fondo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                    />

                    {/* Menú Lateral Deslizable */}
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 w-[85%] max-w-[400px] h-full bg-white z-[70] flex flex-col shadow-2xl"
                    >
                        {/* Header del Menú */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <img src="/logo.png" alt="Logo" className="h-8 object-contain" />
                            <button onClick={onClose} className="p-1 text-black">
                                <X size={28} />
                            </button>
                        </div>

                        {/* Pestañas Superiores (Tabs) */}
                        <div className="flex w-full border-b">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 py-4 text-xs font-black uppercase tracking-widest transition-all ${activeTab === tab
                                            ? "border-b-4 border-black text-black"
                                            : "text-gray-400 border-b-4 border-transparent"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Buscador Rápido Interno */}
                        <div className="p-4 bg-gray-50">
                            <div className="flex items-center bg-white border border-gray-200 px-3 py-2 rounded-sm">
                                <Search size={18} className="text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Buscar en la tienda..."
                                    className="ml-2 bg-transparent text-sm outline-none w-full font-medium"
                                />
                            </div>
                        </div>

                        {/* Lista de Categorías (Scrollable) */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="divide-y divide-gray-100">
                                {/* Enlace destacado de Ofertas */}
                                <div className="p-4 flex justify-between items-center text-red-600 font-black uppercase italic tracking-tighter cursor-pointer bg-red-50/50">
                                    <span>¡OFERTAS HASTA -70%!</span>
                                    <ChevronRight size={20} />
                                </div>

                                {navData.categories.map((cat) => (
                                    <div key={cat.title} className="p-4 flex justify-between items-center text-black font-black uppercase text-sm tracking-tight cursor-pointer hover:bg-gray-50">
                                        <span>{cat.title}</span>
                                        <ChevronRight size={18} className="text-gray-400" />
                                    </div>
                                ))}
                            </div>

                            {/* Enlaces de Cuenta / Ayuda */}
                            <div className="mt-6 p-4 space-y-4 bg-gray-50">
                                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Mi Cuenta</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="text-[13px] font-bold text-black uppercase border border-black py-2 text-center">Login</button>
                                    <button className="text-[13px] font-bold bg-black text-white uppercase py-2 text-center">Registro</button>
                                </div>
                            </div>
                        </div>

                        {/* Footer del Menú con Redes Sociales */}
                        <div className="p-6 border-t flex justify-center gap-8 text-black">
                            <Instagram size={22} />
                            <Facebook size={22} />
                            <div className="text-[10px] font-black uppercase self-center text-gray-400">Pague Menos para todos</div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
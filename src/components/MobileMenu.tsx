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
    const [activeTab, setActiveTab] = useState("Mujer");
    const tabs = ["Mujer", "Curvas", "Hombre"];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
                    />

                    {/* Menú Lateral */}
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 left-0 w-[85%] max-w-[380px] h-full bg-white z-[110] flex flex-col shadow-2xl"
                    >
                        {/* Header con tu Logo Real */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <img src="/logo.png" alt="Logo" className="h-7 object-contain" />
                            <button onClick={onClose} className="p-1 text-black">
                                <X size={28} />
                            </button>
                        </div>

                        {/* Pestañas */}
                        <div className="flex w-full border-b bg-white">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 py-4 text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === tab
                                            ? "border-b-4 border-black text-black"
                                            : "text-gray-400 border-b-4 border-transparent"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Buscador */}
                        <div className="p-4 bg-gray-50 border-b">
                            <div className="flex items-center bg-white border border-gray-200 px-3 py-2">
                                <Search size={18} className="text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="¿Qué buscas hoy?"
                                    className="ml-2 bg-transparent text-sm outline-none w-full font-bold text-black"
                                />
                            </div>
                        </div>

                        {/* Lista de Categorías con Imágenes */}
                        <div className="flex-1 overflow-y-auto bg-white">
                            <div className="flex flex-col">
                                {/* Banner de Ofertas */}
                                <div className="p-4 flex justify-between items-center text-red-600 font-black uppercase italic text-xs tracking-tighter bg-red-50 border-b border-red-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] not-italic">
                                            -70%
                                        </div>
                                        <span>Liquidación de Temporada</span>
                                    </div>
                                    <ChevronRight size={18} />
                                </div>

                                {navData.categories.map((cat) => (
                                    <div
                                        key={`mobile-${cat.title}`}
                                        className="p-3 px-5 flex justify-between items-center border-b border-gray-50 active:bg-gray-100 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            {/* Miniatura de Categoría */}
                                            <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
                                                <img
                                                    src={cat.image || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=100"}
                                                    alt={cat.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <span className="text-black font-black uppercase text-[13px] tracking-tight">
                                                {cat.title}
                                            </span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-300" />
                                    </div>
                                ))}
                            </div>

                            {/* Enlaces de Ayuda y Cuenta */}
                            <div className="p-8 bg-gray-50 space-y-6">
                                <div className="space-y-3">
                                    <button className="w-full bg-black text-white font-black py-4 uppercase text-[11px] tracking-widest">
                                        Iniciar Sesión
                                    </button>
                                    <button className="w-full bg-white text-black border-2 border-black font-black py-4 uppercase text-[11px] tracking-widest">
                                        Crear Cuenta
                                    </button>
                                </div>
                                <div className="flex justify-center gap-10 text-black">
                                    <Instagram size={24} />
                                    <Facebook size={24} />
                                </div>
                                <p className="text-[9px] text-center text-gray-400 font-bold uppercase tracking-[0.2em]">
                                    Pague Menos Para Todos © 2026
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
"use client";

import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X, ChevronRight, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import navData from '@/data/navigation.json';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [activeMobileTab, setActiveMobileTab] = useState("Mujer");
    const mobileTabs = ["Mujer", "Curvas", "Hombre"];

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    setIsVisible(false);
                    setActiveCategory(null);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        <nav
            className={`w-full font-sans bg-white sticky top-0 z-50 shadow-sm transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
            onMouseLeave={() => setActiveCategory(null)}
        >
            {/* CAPA 1: PROMO BAR */}
            <div className="bg-black text-white text-[11px] py-2.5 px-4 flex justify-center items-center font-bold tracking-[0.2em] uppercase">
                <span>¡50% DE DESCUENTO EN TODO! CÓDIGO: <span className="text-yellow-400">PAGUEMENOS</span></span>
            </div>

            {/* CAPA 2: NAVEGACIÓN PRINCIPAL */}
            <div className="border-b border-gray-100 bg-white relative z-50">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-[75px] flex items-center justify-between">
                    <div className="flex items-center gap-6 flex-1 text-black font-black uppercase text-[13px]">
                        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                            <Menu size={24} />
                        </button>
                        <div className="hidden lg:flex gap-6">
                            <a href="#" className="hover:text-gray-500 transition-colors">Mujer</a>
                            <a href="#" className="text-red-600 font-black italic">Ofertas</a>
                            <a href="#" className="hover:text-gray-500 transition-colors">Hombre</a>
                        </div>
                    </div>

                    <div className="flex-shrink-0 px-4">
                        <a href="/">
                            <img src="/logo.png" alt="Logo" className="h-10 md:h-14 w-auto object-contain" />
                        </a>
                    </div>

                    <div className="flex items-center justify-end gap-5 flex-1 text-black">
                        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
                            <Search size={18} />
                            <input type="text" placeholder="Buscar..." className="bg-transparent text-sm ml-2 outline-none w-40 font-bold" />
                        </div>
                        <button><User size={24} strokeWidth={2.5} /></button>
                        <button className="relative">
                            <ShoppingBag size={24} strokeWidth={2.5} />
                            <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white">0</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* CAPA 3: CATEGORÍAS DESKTOP */}
            <div className="hidden lg:flex justify-center gap-10 py-3 text-[12px] font-black text-black uppercase tracking-widest border-b border-gray-50 bg-white">
                {navData.categories.map((cat) => (
                    <div
                        key={cat.title}
                        onMouseEnter={() => setActiveCategory(cat.title)}
                        className="cursor-pointer py-1 border-b-2 border-transparent hover:border-black transition-all"
                    >
                        {cat.title}
                    </div>
                ))}
            </div>

            {/* MEGA MENU DESKTOP */}
            <div className={`absolute top-full left-0 w-full bg-white border-b shadow-xl transition-all duration-300 overflow-hidden ${activeCategory ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
                <div className="max-w-[1440px] mx-auto p-10 grid grid-cols-4 gap-8 text-black">
                    <div>
                        <h3 className="font-black text-[14px] mb-4 uppercase underline decoration-2 underline-offset-4">Todo en {activeCategory}</h3>
                        <ul className="space-y-2 text-[13px] font-bold text-gray-800">
                            {navData.categories.find(c => c.title === activeCategory)?.items.map(item => (
                                <li key={item} className="hover:text-red-600 cursor-pointer transition-colors uppercase tracking-tighter">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-black text-[14px] mb-4 uppercase">Tendencias</h3>
                        <ul className="space-y-2 text-[13px] font-bold text-gray-800 uppercase tracking-tighter">
                            <li className="hover:text-black cursor-pointer">Básicos de Invierno</li>
                            <li className="hover:text-black cursor-pointer">Looks de Noche</li>
                            <li className="hover:text-red-600 cursor-pointer font-black italic">Outlet %</li>
                        </ul>
                    </div>
                    <div className="col-span-2 relative h-48 bg-gray-100 rounded-sm overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600" alt="Promo" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="bg-white text-black font-black px-6 py-2 text-xs uppercase shadow-xl">Ver Colección</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MENÚ MÓVIL OPTIMIZADO --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm" />
                        <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'tween', duration: 0.3 }} className="fixed top-0 left-0 w-[85%] max-w-[380px] h-full bg-white z-[70] flex flex-col shadow-2xl">

                            {/* Header */}
                            <div className="flex justify-between items-center p-5 border-b bg-white">
                                <img src="/logo.png" alt="Logo" className="h-7 object-contain" />
                                <button onClick={() => setIsMobileMenuOpen(false)}><X size={28} className="text-black" /></button>
                            </div>

                            {/* Tabs */}
                            <div className="flex border-b bg-white">
                                {mobileTabs.map((tab) => (
                                    <button key={tab} onClick={() => setActiveMobileTab(tab)} className={`flex-1 py-4 text-[11px] font-black uppercase tracking-widest transition-all ${activeMobileTab === tab ? "border-b-4 border-black text-black" : "text-gray-400 border-b-4 border-transparent"}`}>
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Contenido Scrollable */}
                            <div className="flex-1 overflow-y-auto overflow-x-hidden bg-white">
                                <div className="p-4 bg-gray-50 border-b">
                                    <div className="flex items-center bg-white border border-gray-200 px-4 py-2">
                                        <Search size={18} className="text-gray-400" />
                                        <input type="text" placeholder="¿Qué buscas?" className="ml-3 text-sm font-bold w-full outline-none text-black" />
                                    </div>
                                </div>

                                {/* Listado Visual con Imágenes */}
                                <div className="flex flex-col">
                                    <div className="p-4 flex justify-between items-center border-b border-gray-100 bg-red-50 active:bg-red-100">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-600 flex items-center justify-center bg-white">
                                                <span className="text-red-600 font-black text-[10px] italic">-70%</span>
                                            </div>
                                            <span className="text-red-600 font-black uppercase italic text-sm tracking-tighter">Ofertas de Infarto</span>
                                        </div>
                                        <ChevronRight size={18} className="text-red-600" />
                                    </div>

                                    {navData.categories.map((cat) => (
                                        <div key={cat.title} className="p-3 px-5 flex justify-between items-center border-b border-gray-50 active:bg-gray-50 transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
                                                    <img
                                                        src={cat.image || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=100"}
                                                        alt={cat.title}
                                                        className="w-full h-full object-cover group-active:scale-110 transition-transform"
                                                    />
                                                </div>
                                                <span className="text-black font-black uppercase text-[13px] tracking-tight">{cat.title}</span>
                                            </div>
                                            <ChevronRight size={18} className="text-gray-300" />
                                        </div>
                                    ))}
                                </div>

                                {/* Footer del menú */}
                                <div className="p-8 bg-gray-50 space-y-6">
                                    <div className="space-y-3">
                                        <button className="w-full bg-black text-white font-black py-4 uppercase text-[11px] tracking-widest">Iniciar Sesión</button>
                                        <button className="w-full bg-white text-black border-2 border-black font-black py-4 uppercase text-[11px] tracking-widest">Crear Cuenta</button>
                                    </div>
                                    <div className="flex justify-center gap-10 text-black py-4">
                                        <Instagram size={24} /><Facebook size={24} />
                                    </div>
                                    <p className="text-[9px] text-center text-gray-400 font-bold uppercase tracking-[0.2em]">Pague Menos © 2026</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
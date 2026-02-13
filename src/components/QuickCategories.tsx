"use client";

import React from 'react';
import categories from '@/data/quick-categories.json';

const QuickCategories = () => {
    return (
        <section className="py-12 px-4 md:px-8 max-w-[1440px] mx-auto">
            {/* Título de la sección */}
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">
                    Compra por Categoría
                </h2>
                <div className="w-20 h-1 bg-black mx-auto mt-2"></div>
            </div>

            {/* Grid de Categorías */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {categories.map((cat) => (
                    <a
                        key={cat.id}
                        href={cat.link}
                        className="group relative overflow-hidden aspect-[3/4] bg-gray-100"
                    >
                        {/* Imagen con efecto de Zoom al hacer hover */}
                        <img
                            src={cat.image}
                            alt={cat.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay Gradiente para legibilidad */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                        {/* Texto de la categoría */}
                        <div className="absolute bottom-6 left-0 w-full text-center z-20">
                            <span className="text-white text-2xl md:text-3xl font-black uppercase italic tracking-widest drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                {cat.title}
                            </span>
                        </div>

                        {/* Botón flotante que aparece en Hover (Desktop) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100">
                            <div className="bg-white text-black text-[10px] font-bold py-2 px-4 uppercase tracking-widest">
                                Ver Todo
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default QuickCategories;
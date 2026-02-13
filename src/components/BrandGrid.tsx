"use client";

import React from 'react';
import { motion } from 'framer-motion';
import brandData from '@/data/brands.json';

const BrandGrid = () => {
    return (
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
            {/* Título de la sección */}
            <h2 className="text-black font-black text-xl md:text-2xl uppercase tracking-tighter mb-8">
                COMPRA POR MARCA
            </h2>

            {/* Grid de Marcas */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
                {brandData.brands.map((brand) => (
                    <motion.a
                        key={brand.id}
                        href={brand.link}
                        whileHover={{ y: -5 }}
                        className="relative aspect-[3/4] md:aspect-square overflow-hidden group bg-gray-100"
                    >
                        {/* Imagen con zoom al hacer hover */}
                        <img
                            src={brand.image}
                            alt={brand.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay sutil para legibilidad del texto */}
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300" />

                        {/* Texto de la marca */}
                        <div className="absolute bottom-6 left-0 w-full flex justify-center px-2">
                            <span className="text-white font-black text-[15px] md:text-[18px] uppercase tracking-tighter drop-shadow-md text-center">
                                {brand.name}
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default BrandGrid;
"use client";

import React, { useState, useEffect } from 'react';
import heroData from '@/data/hero.json';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
    const [current, setCurrent] = useState(0);

    // Auto-reproducción cada 5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent(current === heroData.length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? heroData.length - 1 : current - 1);

    return (
        <section className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden bg-gray-200">
            {heroData.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Imagen de fondo con Overlay oscuro suave */}
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover object-center"
                    />

                    {/* Contenido del Texto */}
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                        <h2 className="text-white text-sm md:text-xl font-bold tracking-[0.3em] mb-2 drop-shadow-md">
                            {slide.subtitle}
                        </h2>
                        <h1 className="text-white text-5xl md:text-8xl font-black italic tracking-tighter mb-8 drop-shadow-xl">
                            {slide.title}
                        </h1>
                        <button className={`bg-white text-black hover:bg-black hover:text-white font-black py-4 px-10 text-sm md:text-base transition-all duration-300 uppercase tracking-widest shadow-2xl`}>
                            {slide.buttonText}
                        </button>
                    </div>
                </div>
            ))}

            {/* Controles de Navegación */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white hover:bg-black/20 rounded-full transition-colors"
            >
                <ChevronLeft size={40} strokeWidth={1} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white hover:bg-black/20 rounded-full transition-colors"
            >
                <ChevronRight size={40} strokeWidth={1} />
            </button>

            {/* Indicadores (Puntos abajo) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {heroData.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-8" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
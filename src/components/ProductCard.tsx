"use client";
import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }: { product: any }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Contenedor de Imagen */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                {/* Etiqueta (Tag) */}
                {product.tag && (
                    <span className="absolute top-2 left-2 z-20 bg-black text-white text-[10px] font-black px-2 py-1 uppercase tracking-tighter">
                        {product.tag}
                    </span>
                )}

                {/* Botón Wishlist */}
                <button className="absolute top-2 right-2 z-20 p-1.5 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart size={18} />
                </button>

                {/* Imágenes (Efecto Swap) */}
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"
                        }`}
                />
                <img
                    src={product.images[1]}
                    alt={`${product.name} alternate`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                        }`}
                />

                {/* Quick Add (Barra inferior que sube en hover) */}
                <div className="absolute bottom-0 left-0 w-full bg-white/90 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <p className="text-[10px] font-black text-center uppercase mb-2">Añadir Rápido</p>
                    <div className="flex justify-center gap-2">
                        {product.sizes.map((size: string) => (
                            <button key={size} className="text-[11px] font-bold border border-black px-2 hover:bg-black hover:text-white transition-colors">
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Información del Producto */}
            <div className="mt-3 space-y-1 text-left">
                <h3 className="text-sm font-medium text-gray-800 truncate">{product.name}</h3>
                <div className="flex items-center gap-2">
                    <span className="text-black font-black">${product.price}</span>
                    {product.originalPrice && (
                        <span className="text-gray-400 line-through text-xs">${product.originalPrice}</span>
                    )}
                </div>
                {/* Indicadores de Color (bolitas) */}
                <div className="flex gap-1 mt-1">
                    <div className="w-3 h-3 rounded-full bg-black border border-gray-300" />
                    <div className="w-3 h-3 rounded-full bg-blue-900 border border-gray-300" />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
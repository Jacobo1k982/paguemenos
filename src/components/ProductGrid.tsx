import React from 'react';
import ProductCard from './ProductCard';
import products from '@/data/products.json';

const ProductGrid = () => {
    return (
        <section className="py-12 px-4 md:px-8 max-w-[1440px] mx-auto">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-2xl font-black uppercase italic tracking-tighter">Tendencias Ahora</h2>
                    <p className="text-gray-500 text-sm uppercase tracking-widest">Lo más buscado de la semana</p>
                </div>
                <a href="#" className="text-xs font-black uppercase border-b-2 border-black pb-1 hover:text-gray-600 transition-colors">
                    Ver Todo
                </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
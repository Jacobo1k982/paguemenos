import Image from 'next/image';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';

export default function Header() {
    return (
        <header className="w-full">
            {/* Promo Bar */}
            <div className="bg-black text-white text-center py-2 text-xs font-bold uppercase tracking-widest">
                Envío Gratis en pedidos superiores a $75 + Devoluciones Fáciles
            </div>

            <div className="border-b px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Menu className="lg:hidden" />
                    <div className="hidden lg:flex gap-6 text-sm font-semibold uppercase">
                        <a href="#">Mujer</a>
                        <a href="#">Hombre</a>
                        <a href="#">Curvas</a>
                    </div>
                </div>

                {/* Tu Logo Personalizado */}
                <div className="flex-shrink-0">
                    <Image
                        src="/logo.png"
                        alt="Pague Menos para todos"
                        width={180}
                        height={50}
                        priority
                    />
                </div>

                <div className="flex items-center gap-5">
                    <Search className="w-5 h-5 cursor-pointer" />
                    <User className="w-5 h-5 cursor-pointer hidden md:block" />
                    <div className="relative">
                        <ShoppingBag className="w-5 h-5 cursor-pointer" />
                        <span className="absolute -top-2 -right-2 bg-yellow-400 text-[10px] font-bold px-1.5 rounded-full">
                            0
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
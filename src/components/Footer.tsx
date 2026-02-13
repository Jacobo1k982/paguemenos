import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';
import footerData from '@/data/footer.json';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">

                {/* ZONA 1: NEWSLETTER (El gancho de Fashion Nova) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
                    <div>
                        <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2">
                            ¡ÚNETE A LA FAMILIA PAGUE MENOS!
                        </h3>
                        <p className="text-black font-bold text-sm uppercase tracking-widest">
                            Suscríbete para recibir ofertas exclusivas y lanzamientos VIP.
                        </p>
                    </div>
                    <div className="flex w-full max-w-md">
                        <input
                            type="email"
                            placeholder="TU CORREO ELECTRÓNICO"
                            className="flex-1 bg-gray-100 border-b-2 border-black px-4 py-3 text-sm focus:outline-none font-bold"
                        />
                        <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
                            <Send size={20} />
                        </button>
                    </div>
                </div>

                {/* ZONA 2: ENLACES */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {/* Logo y Redes */}
                    <div className="col-span-2 md:col-span-1">
                        <img src="/logo.png" alt="Pague Menos" className="h-10 mb-6 object-contain" />
                        <div className="flex gap-4">
                            <Instagram className="cursor-pointer hover:text-gray-500" size={22} />
                            <Facebook className="cursor-pointer hover:text-gray-500" size={22} />
                            <Twitter className="cursor-pointer hover:text-gray-500" size={22} />
                            <Youtube className="cursor-pointer hover:text-gray-500" size={22} />
                        </div>
                    </div>

                    {/* Dinámico desde JSON */}
                    <div>
                        <h4 className="font-black uppercase text-sm mb-6 tracking-widest">Atención al Cliente</h4>
                        <ul className="space-y-3 text-[13px] font-bold text-black/70 uppercase">
                            {footerData.customerCare.map(link => (
                                <li key={link} className="hover:text-black cursor-pointer transition-colors">{link}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black uppercase text-sm mb-6 tracking-widest">Compañía</h4>
                        <ul className="space-y-3 text-[13px] font-bold text-black/70 uppercase">
                            {footerData.aboutUs.map(link => (
                                <li key={link} className="hover:text-black cursor-pointer transition-colors">{link}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black uppercase text-sm mb-6 tracking-widest">Legales</h4>
                        <ul className="space-y-3 text-[13px] font-bold text-black/70 uppercase">
                            {footerData.legal.map(link => (
                                <li key={link} className="hover:text-black cursor-pointer transition-colors">{link}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ZONA 3: COPYRIGHT & PAGOS */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                        © 2026 PAGUE MENOS PARA TODOS. TODOS LOS DERECHOS RESERVADOS.
                    </p>
                    <div className="flex gap-3 grayscale opacity-70">
                        {/* Aquí irían iconos de Visa, Master, PayPal */}
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="PayPal" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
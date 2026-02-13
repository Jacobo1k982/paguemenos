import type { Metadata } from "next";
import { Inter } from "next/font/google"; // O la fuente que prefieras
import "./globals.css";
import Navbar from "@/components/Navbar"; // <--- PASO CLAVE: Importamos tu nuevo Navbar
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pague Menos para todos | Moda Online",
  description: "La mejor moda al mejor precio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Insertamos el Navbar aquí para que sea global */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
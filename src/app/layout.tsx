import { Poppins, Inter } from 'next/font/google';
import Header from "@/components/Header";
import "./globals.css";
import '../styles/global.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} ${inter.className} antialiased`}
      >
        
        {children}
       
      </body>
    </html>
  );
}
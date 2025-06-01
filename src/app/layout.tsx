import { Poppins, Inter } from 'next/font/google';
import "./globals.css";
import '../styles/global.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className}`}
      >
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
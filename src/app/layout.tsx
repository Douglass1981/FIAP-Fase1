

import Header from "@/components/Header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        Teste Cabeçalho
        {children}
       
      </body>
    </html>
  );
}

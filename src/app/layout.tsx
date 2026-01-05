import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "LYSY Croustilles | Le Plaisir de la Gourmandise",
  description: "Crêpes artisanales & gâteaux moelleux à Yaoundé. Livraison à Ngousso & Petrolex. Commandez au 691 03 76 93.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="antialiased">
      <body className={`${poppins.variable} ${inter.variable} grain`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

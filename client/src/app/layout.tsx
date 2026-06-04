import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
// 1. Import your AuthProvider
import { AuthProvider } from '@/features/auth/context/AuthContext'; 

// Configure the fonts
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans", 
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Founders of Joy",
  description: "A holistic wellness community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Keep your font variables and classes applied to the body */}
      <body className={`${dmSans.variable} ${cormorant.variable} font-sans antialiased`}>
        
        {/* 2. Wrap your children with AuthProvider here */}
        <AuthProvider>
          {children}
        </AuthProvider>

      </body>
    </html>
  );
}
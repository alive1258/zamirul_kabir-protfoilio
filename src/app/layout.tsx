import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers/Providers";
import { Toaster } from "sonner";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zamirul Protfolio",
  description:
    "I'm Zamirul Kabir, a dedicated web developer with a knack for delivering innovative solutions. With years of experience in Javascript, TypeScript, ReactJS, Redux,NextJs,MongoDB, Mongoose,NodeJS,Express, I'm committed to excellence in every project I undertake.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} bg-[#0F172A]`}>
          {children}
          <Toaster position="top-right" />
        </body>
      </html>
    </Providers>
  );
}

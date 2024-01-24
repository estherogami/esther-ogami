import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Zen_Maru_Gothic, Inter } from "next/font/google";
import Layout from "@/components/layout/layout";
const ZenMaru = Zen_Maru_Gothic({
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Esther Ogami Portfolio',
    default: 'Home', // a default is required when creating a template
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className={ZenMaru.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

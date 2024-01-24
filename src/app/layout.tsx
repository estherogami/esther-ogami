import "@/styles/globals.scss";
import type { Metadata } from "next";
import Layout from "@/components/layout/layout";

//Fonts
import { Zen_Maru_Gothic } from "next/font/google";
const ZenMaruGothic = Zen_Maru_Gothic({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

import localFont from 'next/font/local'
const   abcountryroadregular = localFont({
  src: [
    {
      path: '../../public/assets/fonts/abcountryroadregular.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/abcountryroadregular.woff',
      weight: 'normal',
      style: 'italic',
    }
  ],
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
    
      <body className={`${ZenMaruGothic.className} ${abcountryroadregular.className}`}>
        
        <Layout>
          {children}
        </Layout>
      </body>
     
    </html>
  );
}

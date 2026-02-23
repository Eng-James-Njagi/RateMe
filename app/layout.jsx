import "./globals.css";
import {Toaster} from 'sonner'
import { Geist, Geist_Mono , Inter} from "next/font/google";
import Navigation from './components/nav'
import Footer from './components/footer'
import { Analytics } from '@vercel/analytics/next'

const geistSans = Geist({
  variable: "--geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--inter",
  subset: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}  ${inter.variable} antialiased`}>
      <head>
        <title>Rate Me</title>
      </head>
      <body>
        <Toaster 
        position="top-left"
        />
         <Navigation/>
        <main>
          {children}
        </main>
        <Footer/>
        <Analytics />
      </body>
    </html>
  );
}

import "./globals.css";
import { Geist, Geist_Mono , Inter} from "next/font/google";
import Navigation from './components/nav'
import Footer from './components/footer'

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
         <Navigation/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}

import type { Metadata } from "next"
import "./globals.css"
import { Tenor_Sans, Poppins } from "next/font/google"
import { Header } from "@/src/presentation/components/sections/header"
import Footer from "@/src/presentation/components/ui/footer"
import Maintenance from "@/src/presentation/components/ui/Maintenance"

const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"], // Tenor só tem esse peso
  variable: "--font-display",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Victor Navarro | Portfolio",
  description: "Portfolio de Victor Navarro focado em desenvolvimento web e mobile.",
}

const MAINTENANCE_MODE = true

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className={`${tenor.variable} ${poppins.variable}`}
    >
      <body
        className="
          min-h-screen
          antialiased
          bg-[var(--md-sys-color-background)]
          text-[var(--md-sys-color-on-background)]
        "
      >
        {MAINTENANCE_MODE ? (
          <Maintenance />
        ) : (
          <>
            <Header />
            <main className="relative z-10 min-h-screen bg-[var(--md-sys-color-background)]">
              {children}
            </main>
            <footer id="contato" className="sticky bottom-0 z-0 bg-black text-white">
              <Footer />
            </footer>
          </>
        )}
      </body>
    </html>
  )
}
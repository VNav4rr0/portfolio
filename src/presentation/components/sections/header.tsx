'use client'

import React, { useEffect, useState, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/src/infrastructure/utils/utils'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import {
  RippleButton,
  RippleButtonRipples,
} from '../animations/animate-ui/primitives/buttons/ripple'
import { AnimatedBackground } from '../animations/motion-primitives/animated-background'

const TABS = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projetos' },
]

const Header = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)

  // Lógica de esconder/mostrar o header no scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up"
    
    // Mostra se subir, esconde se descer (após um threshold de 100px)
    if (direction === "down" && latest > 150) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
    
    setIsScrolled(latest > 20)
    lastScrollY.current = latest
  })

  // Tracking logica para One Page (Intersection Observer)
  useEffect(() => {
    if (pathname !== '/') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const matchedTab = TABS.find((tab) => tab.href === `#${id}`)
            if (matchedTab) {
              setActiveTab(matchedTab.label)
            }
          }
        })
      },
      {
        rootMargin: '-80px 0px -70% 0px',
      }
    )

    TABS.forEach((tab) => {
      if (tab.href.startsWith('#')) {
        const section = document.querySelector(tab.href)
        if (section) observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [pathname])

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    
    // Fecha o menu mobile primeiro
    setMenuOpen(false)

    // Delay mínimo para garantir que o fechamento do menu (transição CSS/Motion) 
    // não interfira no cálculo da posição ou na execução do scroll
    setTimeout(() => {
      if (!href.startsWith('#')) {
        router.push(href)
        return
      }

      const element = document.querySelector(href)
      if (element) {
        // Caso especial: Contato (fim da página)
        if (href === '#contato') {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          })
          return
        }

        // Cálculo robusto da posição
        const rect = element.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const offsetPosition = rect.top + scrollTop - 90

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }, 10)
  }

  return (
    <motion.header 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 z-50 w-full"
    >
      <nav className="mx-auto mt-4 max-w-5xl px-4 md:px-6">
        <div
          className={cn(
            'relative overflow-hidden rounded-[24px] border border-white/20 bg-white/70 backdrop-blur-xl transition-all duration-500',
            isScrolled ? 'shadow-[0_20px_40px_rgba(0,0,0,0.08)] py-1' : 'py-2'
          )}
        >
          {/* Barra de Progresso Sutil */}
          <motion.div 
            className="absolute bottom-0 left-0 h-[2px] bg-blue-600 z-50"
            style={{ scaleX: useScroll().scrollXProgress }}
          />

          {/* CONTEÚDO PRINCIPAL */}
          <div className="relative z-10 flex h-14 md:h-16 items-center justify-between px-5">
            {/* Logo */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative">
                <img src="/favicon.ico" alt="Logo" className="h-8 w-8 transition-transform group-hover:rotate-12" />
                <div className="absolute inset-0 bg-blue-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-lg font-bold tracking-tight text-neutral-900">
                Victor.
              </span>
            </motion.a>

            {/* NAV DESKTOP */}
            <div className="hidden md:flex items-center gap-2">
              <AnimatedBackground
                enableHover
                defaultValue={activeTab}
                className="z-0 rounded-xl bg-neutral-100/80"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              >
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.label
                  return (
                    <a
                      key={tab.label}
                      data-id={tab.label}
                      href={tab.href}
                      onClick={(e) => scrollToSection(e, tab.href)}
                      className={cn(
                        'relative px-5 py-2 text-sm transition-colors block font-medium',
                        isActive ? 'text-blue-600' : 'text-neutral-500 hover:text-neutral-950'
                      )}
                    >
                      {tab.label}
                    </a>
                  )
                })}
              </AnimatedBackground>

              <div className="w-[1px] h-6 bg-neutral-200 mx-2" />

              <RippleButton 
                onClick={(e: any) => scrollToSection(e, '#contato')} 
                className="rounded-full bg-neutral-900 px-6 py-2.5 text-white text-sm font-semibold flex items-center gap-2 group overflow-hidden"
              >
                <span>Contato</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <RippleButtonRipples color="#3b82f6" />
              </RippleButton>
            </div>

            {/* MOBILE TOGGLE */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-xl bg-neutral-100 text-neutral-900"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>

          {/* MENU MOBILE EXPANSÍVEL */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative z-10 overflow-hidden md:hidden"
              >
                <div className="flex flex-col gap-2 p-5 pt-2 border-t border-neutral-100">
                  {TABS.map((tab) => (
                    <button
                      key={tab.label}
                      onClick={(e) => scrollToSection(e, tab.href)}
                      className={cn(
                        'flex items-center justify-between p-4 rounded-2xl text-base font-semibold transition-all w-full text-left',
                        activeTab === tab.label
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-neutral-600 active:bg-neutral-100'
                      )}
                    >
                      <span>{tab.label}</span>
                      <ArrowRight className={cn("w-4 h-4 transition-transform", activeTab === tab.label ? "opacity-100" : "opacity-0")} />
                    </button>
                  ))}
                  <button 
                    onClick={(e: any) => scrollToSection(e, '#contato')}
                    className="mt-2 w-full p-4 rounded-2xl bg-neutral-900 text-white font-bold flex items-center justify-center gap-3 active:scale-[0.98] transition-transform"
                  >
                    Falar com Victor
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  )
}

export { Header }
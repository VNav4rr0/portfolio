'use client'

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/src/infrastructure/utils/utils'
import { Menu, X } from 'lucide-react'
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
  const [isScrolled, setIsScrolled] = useState(false)

  // Atualiza nav bar no scroll (sombras)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll)
    // Run at mount to verify existing scroll
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Tracking logica para One Page (Intersection Observer)
  useEffect(() => {
    // Só ligar o observer de seções se estiver de fato na HomeScreen
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
        rootMargin: '-80px 0px -70% 0px', // Aciona quando o topo da section passa pelo header
      }
    )

    TABS.forEach((tab) => {
      if (tab.href.startsWith('#')) {
        const section = document.querySelector(tab.href)
        if (section) {
          observer.observe(section)
        }
      }
    })

    return () => observer.disconnect()
  }, [pathname])

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault()
    
    // Fechar menu mobile (se aplicável)
    setMenuOpen(false)

    // Detecção: se não for um Hash Link, empilha a navegação como uma página normal (re-usando o Router do Next)
    if (!href.startsWith('#')) {
      router.push(href)
      return;
    }

    // Se estiver em outra página (ex: /projetos/nome-do-projeto),
    // empurra o usuário de volta para a HomePage + o Anchor tag (/#sessao)
    if (pathname !== '/' && href !== '#contato') {
      router.push(`/${href}`)
      return;
    }

    const element = document.querySelector(href)
    if (element) {
      if (href === '#contato') {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        })
        return
      }

      // Obter posicao com ajuste do header height (ex: header 80px)
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - 80

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto mt-4 max-w-6xl px-4">
        <div
          className={cn(
            'relative overflow-hidden rounded-2xl border border-border bg-white/70 backdrop-blur-xl transition-all duration-300',
            isScrolled && 'shadow-lg'
          )}
        >
          {/* CONTEÚDO */}
          <div className="relative z-10 flex h-16 items-center justify-between px-4">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src="/favicon.ico" alt="Logo" className="h-9 w-9" />
              <span className="text-lg font-semibold tracking-tight">
                Portfolio
              </span>
            </a>

            {/* NAV DESKTOP */}
            <div className="relative hidden md:flex">
              <AnimatedBackground
                enableHover
                defaultValue={activeTab}
                className="z-0 rounded-lg bg-blue-100 dark:bg-zinc-800"
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
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
                        'relative px-4 py-2 text-sm transition-colors block w-full h-full group',
                        isActive
                          ? 'text-zinc-950 dark:text-white font-medium'
                          : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400'
                      )}
                    >
                      <span className="relative z-20">{tab.label}</span>
                    </a>
                  )
                })}
              </AnimatedBackground>
            </div>

            {/* CTA DESKTOP */}
            <div className="hidden md:block">
              <RippleButton onClick={(e: any) => scrollToSection(e, '#contato')} className="rounded-full w-40 bg-[var(--md-sys-color-primary)] px-4 py-2 text-white">
                Contato
                <RippleButtonRipples color="#A2C4FF" />
              </RippleButton>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* MENU MOBILE */}
          {menuOpen && (
            <div className="relative z-10 flex flex-col gap-4 border-t border-border px-4 py-6 md:hidden">
              {TABS.map((tab) => (
                <a
                  key={tab.label}
                  href={tab.href}
                  onClick={(e) => scrollToSection(e, tab.href)}
                  className={cn(
                    'text-sm font-medium transition-colors cursor-pointer',
                    activeTab === tab.label
                      ? 'text-zinc-950 dark:text-white'
                      : 'text-zinc-600 dark:text-zinc-400'
                  )}
                >
                  {tab.label}
                </a>
              ))}

              <div className="w-fit">
                <RippleButton onClick={(e: any) => scrollToSection(e, '#contato')} className="rounded-full w-40 bg-[var(--md-sys-color-primary)] px-4 py-2 text-white">
                  Contato
                  <RippleButtonRipples color="#A2C4FF" />
                </RippleButton>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export { Header }
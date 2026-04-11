"use client"

import { useRef, useEffect, useState } from "react"
import { HorizontalGallery } from "@/src/presentation/components/sections/HorizontalGallery"
import {
  RotatingText,
  RotatingTextContainer,
} from "@/src/presentation/components/animations/animate-ui/primitives/texts/rotating"
import { RippleButton, RippleButtonRipples } from "@/src/presentation/components/animations/animate-ui/primitives/buttons/ripple"
import { Skills } from "@/src/presentation/components/sections/skills"
import { motion } from "framer-motion"
import { BentoCard } from "@/src/presentation/components/sections/BentoCard";
import { Cursor, CursorFollow, CursorProvider } from "@/src/presentation/components/animations/animate-ui/primitives/animate/cursor"
import { AboutCarousel } from "@/src/presentation/components/ui/AboutCarousel"

export default function Home() {
  const scrollSectionRef = useRef<HTMLElement>(null!)

  const words = [
    { text: "intuitivo", color: "#2563EB" },
    { text: "simples", color: "#34a853" },
    { text: "fluido", color: "#fbbc04" },
    { text: "eficiente", color: "#e74639" }
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2200)

    return () => clearInterval(interval)
  }, [])

  const current = words[index]

  return (
    // Reduzi o padding vertical no mobile (py-12) e mantive grande no desktop (md:py-24)
    <main className="relative z-0 py-12 md:py-24">

      {/* ── HERO SECTION ── */}
      <section id="home" className="w-full flex flex-col justify-start px-5 md:px-14 pb-16 md:pt-10 md:pb-32 min-h-[80vh] md:min-h-auto relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-8 md:gap-x-12 w-full max-w-screen-2xl mx-auto items-start md:items-end">

          {/* Coluna Esquerda: Título */}
          <div className="md:col-span-8 lg:col-span-8 flex flex-col items-start relative z-10 w-full">
            <h1 className="w-full text-left text-[clamp(2.8rem,8vw,4rem)] sm:text-7xl md:text-[5.5rem] lg:text-[8rem] xl:text-[7.5rem] font-medium tracking-tight md:tracking-tighter leading-[0.9] text-neutral-900">
              Transformando <br />
              complexo em <br />
              <span className="relative flex flex-wrap items-center gap-3 md:gap-4 mt-2">
                <span
                  style={{ color: current.color }}
                  className="transition-colors duration-700 ease-in-out"
                >
                  <div className="pb-1 md:pb-2">
                    <RotatingTextContainer text={current.text}>
                      <RotatingText />
                    </RotatingTextContainer>
                  </div>
                </span>
              </span>
            </h1>
          </div>

          {/* Coluna Direita: Descrição e Botão */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col items-start justify-end gap-6 md:gap-8 relative z-10 w-full mb-0 md:mb-6 lg:mb-8 pt-4 md:pt-0">
            <p className="text-base sm:text-lg md:text-xl text-neutral-800 leading-relaxed font-medium w-full md:max-w-sm">
              Olá, me chamo Victor. Sou desenvolvedor focado em construir interfaces modernas e funcionais.
            </p>
            <a href="#projetos">
              <RippleButton className="w-fit flex items-center gap-2 md:gap-3 !rounded-full bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-100 px-5 py-3 md:px-[30px] md:py-[18px] text-[14px] md:text-base font-medium transition-colors shadow-sm">
                Ver projetos <span className="text-lg md:text-xl leading-none">→</span>
              </RippleButton>
            </a>
          </div>

        </div>

      </section>

      {/* ── GALERIA HORIZONTAL ── */}
      <section ref={scrollSectionRef} className="relative h-auto">
        <div className="top-0 h-screen overflow-hidden">
          <HorizontalGallery scrollRef={scrollSectionRef} />
        </div>
      </section>

      {/* ── GRID: DESENVOLVEDOR EM FORMAÇÃO ── */}
      <section id="about" className="px-6 md:px-14 py-16 md:py-24 max-w-screen-2xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

          {/* Cabeçalho */}
          <div className="md:col-span-6 flex flex-col justify-start pr-0 md:pr-16 lg:pr-24  text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-4 md:mb-2 text-neutral-900 font-medium">
              Conheça um pouco <br className="hidden md:block" />sobre mim
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600">
              Desenvolvedor em formação
            </p>
          </div>

          <div className="md:col-span-6 bg-gradient-to-br from-black/10 to-transparent rounded-[32px] md:rounded-[48px] p-8 md:px-14 md:py-14 flex flex-col justify-between min-h-[280px] md:min-h-[340px]">
            <h3 className="text-[80px] md:text-[120px] font-light leading-none mb-4 md:mb-6">4</h3>
            <p className="text-lg md:text-xl text-neutral-800 leading-relaxed w-full md:max-w-[90%]">
              Trajetória técnica de 4 anos, unindo a base profissional da ETEC à especialização em Análise e Desenvolvimento de Sistemas pela FATEC. Focado na criação de soluções práticas e arquitetura de software.            </p>
          </div>

          <div className="md:col-span-7 bg-gradient-to-br from-black/10 to-transparent rounded-[48px]  overflow-hidden min-h-[450px] flex flex-col relative">
            {/* Certifique-se que o componente Skills receba a altura total */}
            <div className="absolute inset-0 z-0">
              <Skills />
            </div>

            {/* O texto deve ter z-index maior para ficar acima das pílulas */}
            <div className="relative z-10 p-8 md:p-14 pointer-events-none  rounded-[32px]">
              <span className="text-blue-600 ... ">Stack Atual</span>
              <h3 className="text-3xl md:text-5xl ...">Tecnologias</h3>
            </div>
          </div>

          {/* Card: UI/UX Design */}
          <div className="md:col-span-5  rounded-[32px] md:rounded-[48px] flex flex-col justify-between ">
            <AboutCarousel />
          </div>

        </div>
      </section>
      <section id="projetos" className="min-h-screen flex flex-col items-center px-6 md:px-14 py-24 max-w-screen-2xl mx-auto w-full">

        {/* Header */}
        <div className="w-full mb-20 md:mb-28 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-zinc-900">
            Projetos em Destaque
          </h1>

          <p className="mt-4 text-zinc-500 text-sm md:text-base">
            Alguns dos meus trabalhos realizados
          </p>
        </div>

        {/* Grid inspirado na imagem de referência */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 w-full mt-10">

          {/* Card 2 - Metade da largura */}
          <BentoCard
            className="md:col-span-2"
            imageClassName="aspect-[16/9] md:aspect-[21/9] object-cover"
            image="/canisherz.png"
            href="/projetos/canisherz"
            subtitle="CanisHerz"
            title="Referência em cuidado veterinário"
            tags={["CLÍNICA VETERINÁRIA", "WEB DESIGN"]}
          />
          {/* Card 1 - Fica em destaque (Largura total no topo) */}
          <BentoCard
            className="md:col-span-1"
            imageClassName="aspect-[4/5] "
            image="/vestibulize.png"
            href="/projetos/vestibulize"
            subtitle="Vestibulize"
            title="Aprovando o seu futuro com tecnologia"
            tags={["EDUCAÇÃO", "PLATAFORMA WEB", "SAAS"]}
          />


          {/* Card 3 - Metade da largura */}
          <BentoCard
            className="md:col-span-1"
            imageClassName="aspect-[4/5]"
            image="/dynamisImage.png"
            href="/projetos/dynamis"
            subtitle="Dynamis"
            title="Elevando o nível da sua performance"
            tags={["LANDING PAGE", "BRAND IDENTITY"]}
          />

          {/* Card 4 - Largura Total novamente ou metade dependendo da quantidade, deixaremos metade e centralizado ou largural total para fechar? Vamos usar Largura total */}
          <BentoCard
            className="md:col-span-2 mt-8 md:mt-16"
            imageClassName="aspect-[16/9] md:aspect-[21/9]"
            image="/unsplash_vHRFraV4U00.png"
            href="/projetos/personapizza"
            subtitle="Persona Pizza"
            title="O sabor tradicional em formato digital"
            tags={["E-COMMERCE", "DESIGN", "FOOD"]}
          />

        </div>
      </section>


    </main>
  )
}
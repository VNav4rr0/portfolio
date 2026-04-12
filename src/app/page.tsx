"use client"

import { useRef, useEffect, useState } from "react"
import { HorizontalGallery } from "@/src/presentation/components/sections/HorizontalGallery"
import {
  RotatingText,
  RotatingTextContainer,
} from "@/src/presentation/components/animations/animate-ui/primitives/texts/rotating"
import { RippleButton, RippleButtonRipples } from "@/src/presentation/components/animations/animate-ui/primitives/buttons/ripple"
import { Skills } from "@/src/presentation/components/sections/skills"
import { motion, Variants } from "framer-motion"
import { BentoCard } from "@/src/presentation/components/sections/BentoCard";
import { Cursor, CursorFollow, CursorProvider } from "@/src/presentation/components/animations/animate-ui/primitives/animate/cursor"
import { AboutCarousel } from "@/src/presentation/components/ui/AboutCarousel"

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

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
    <main className="relative z-0">
      
      {/* Background Decorativo Global - Sutil Grain/Noise */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* ── HERO SECTION ── */}
      <section id="home" className="w-full flex flex-col justify-start px-6 md:px-14 pt-32 pb-12 md:pt-24 md:pb-32 relative overflow-hidden">
        
        {/* Elemento Decorativo Hero */}
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-100/30 blur-[120px] rounded-full z-0" />
        <div className="absolute bottom-[20%] left-[-5%] w-[300px] h-[300px] bg-purple-100/20 blur-[100px] rounded-full z-0" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-8 md:gap-x-12 w-full max-w-screen-2xl mx-auto items-start md:items-end relative z-10"
        >

          {/* Coluna Esquerda: Título */}
          {/* Coluna Esquerda: Título */}
          <div className="md:col-span-8 lg:col-span-8 flex flex-col items-start w-full">
            <motion.span 
              variants={revealVariants}
              className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4 md:mb-6"
            >
              Desenvolvedor Web & Mobile
            </motion.span>
            <h1 className="w-full text-left text-[clamp(2.8rem,12vw,4.5rem)] sm:text-7xl md:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] font-medium tracking-tight md:tracking-tighter leading-[1] md:leading-[0.9] text-neutral-900">
              Transformando <br />
              complexo em <br />
              <span className="relative flex flex-wrap items-center gap-3 md:gap-4 mt-1 md:mt-2">
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
          <div className="md:col-span-4 lg:col-span-4 flex flex-col items-start justify-end gap-8 md:gap-10 w-full mb-0 md:mb-6 lg:mb-8 pt-8 md:pt-0">
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-medium w-full md:max-w-sm opacity-90">
              Olá, me chamo Victor. Sou desenvolvedor focado em construir interfaces de alta performance que unem design e funcionalidade.
            </p>
            <div className="w-full sm:w-fit flex flex-col sm:flex-row gap-4">
              <a href="#projetos" className="w-full sm:w-fit group" onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#projetos');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <RippleButton className="w-full sm:w-fit flex items-center justify-center gap-3 !rounded-full bg-neutral-900 text-white border border-neutral-800 hover:bg-black px-8 py-5 md:px-[34px] md:py-[20px] text-base md:text-lg font-bold transition-all shadow-2xl shadow-blue-900/10">
                  Ver projetos 
                  <span className="text-xl md:text-2xl leading-none transition-transform group-hover:translate-x-1 duration-300">→</span>
                </RippleButton>
              </a>
            </div>
          </div>
        </motion.div>

        

      </section>

      {/* ── GALERIA HORIZONTAL ── */}
      <section ref={scrollSectionRef} className="relative h-auto pt-8 md:pt-0">
        <div className="sticky top-0 h-[60vh] md:h-screen overflow-hidden flex items-center">
          <HorizontalGallery scrollRef={scrollSectionRef} />
        </div>
      </section>

      {/* ── GRID: SOBRE MIM ── */}
      <section id="about" className="px-6 md:px-14 py-24 md:py-48 max-w-screen-2xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
        >

          {/* Cabeçalho */}
          <div className="md:col-span-6 flex flex-col justify-start pr-0 md:pr-16 lg:pr-24 text-left">
            <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-4 block">Sobre</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-neutral-900 font-medium tracking-tight">
              Conheça um pouco <br className="hidden md:block" />sobre mim
            </h2>
            <p className="text-xl md:text-2xl text-neutral-500 font-medium">
              Desenvolvedor em formação
            </p>
          </div>

          {/* Trajetória */}
          <div className="md:col-span-6 bg-gray-100  rounded-[40px] md:rounded-[56px] p-10 md:px-16 md:py-16 flex flex-col justify-between min-h-[300px] md:min-h-[420px] shadow-sm hover:shadow-md transition-shadow duration-500">
            <h3 className="text-[100px] md:text-[160px] font-light leading-none mb-6 text-neutral-900 tracking-tighter italic">4</h3>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed w-full md:max-w-[90%] font-medium opacity-80">
              Trajetória técnica de 4 anos, unindo a base profissional da ETEC à especialização em Análise e Desenvolvimento de Sistemas pela FATEC. Focado na criação de soluções práticas e arquitetura de software.
            </p>
          </div>

          {/* Stack / Skills */}
          <div className="md:col-span-7 bg-gray-100 rounded-[40px] md:rounded-[56px] overflow-hidden min-h-[480px] md:min-h-[560px] flex flex-col relative group">
            <div className="absolute inset-0 z-0 ">
              <Skills />
            </div>
            <div className="relative z-10 p-10 md:p-16 pointer-events-none">
              <span className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-2 block">Stack Atual</span>
              <h3 className="text-3xl md:text-5xl font-medium text-neutral-900 tracking-tight">Tecnologias</h3>
            </div>
          </div>

          {/* Card: UI/UX Design Carousel */}
          <div className="md:col-span-5 h-full">
            <AboutCarousel />
          </div>

        </motion.div>
      </section>

      {/* ── SEÇÃO DE PROJETOS ── */}
      <section id="projetos" className="min-h-screen flex flex-col items-center px-6 md:px-14 py-24 md:py-48 max-w-screen-2xl mx-auto w-full">

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="w-full flex flex-col items-center"
        >
          {/* Header */}
          <div className="w-full mb-16 md:mb-32 text-left md:text-center">
            <span className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-4 block">Projetos</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl leading-[0.95] tracking-tighter text-neutral-900 font-medium whitespace-pre-line">
              Trabalhos em <br className="hidden md:block"/> Destaque
            </h1>
            <p className="mt-8 text-neutral-500 text-lg md:text-2xl font-medium max-w-2xl mx-auto">
              Soluções reais construídas com <br className="hidden md:block"/> precisão técnica e atenção ao design.
            </p>
          </div>

          {/* Grid de Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 md:gap-y-32 w-full">
            
            <BentoCard
              className="md:col-span-2"
              imageClassName="aspect-[16/10] md:aspect-[21/9] object-cover"
              image="/canisherz.png"
              href="/projetos/canisherz"
              subtitle="CanisHerz"
              title="Referência em cuidado veterinário"
              tags={["CLÍNICA VETERINÁRIA", "WEB DESIGN"]}
            />

            <BentoCard
              className="md:col-span-1"
              imageClassName="aspect-[4/5] sm:aspect-square md:aspect-[4/5]"
              image="/vestibulize.png"
              href="/projetos/vestibulize"
              subtitle="Vestibulize"
              title="Aprovando o seu futuro com tecnologia"
              tags={["EDUCAÇÃO", "PLATAFORMA WEB", "SAAS"]}
            />

            <BentoCard
              className="md:col-span-1"
              imageClassName="aspect-[4/5] sm:aspect-square md:aspect-[4/5]"
              image="/dynamisImage.png"
              href="/projetos/dynamis"
              subtitle="Dynamis"
              title="Elevando o nível da sua performance"
              tags={["LANDING PAGE", "BRAND IDENTITY"]}
            />

            <BentoCard
              className="md:col-span-2 mt-4 md:mt-10"
              imageClassName="aspect-[16/10] md:aspect-[21/9]"
              image="/unsplash_vHRFraV4U00.png"
              href="/projetos/personapizza"
              subtitle="Persona Pizza"
              title="O sabor tradicional em formato digital"
              tags={["E-COMMERCE", "DESIGN", "FOOD"]}
            />
          </div>
        </motion.div>
      </section>

    </main>
  )
}
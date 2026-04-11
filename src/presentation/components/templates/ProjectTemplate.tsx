"use client"

import { motion, type Variants } from "framer-motion"
import Image from "next/image"

interface ProjectTemplateProps {
  title: string
  slogan: string
  image?: string
  oProjeto: string
  problema: string
  solucao: string
  themeColor?: string
  textColor?: string
  year?: string
  deliverables?: string[]
  extraImages?: string[]
}

export function ProjectTemplate({
  title,
  slogan,
  image,
  oProjeto,
  problema,
  solucao,
  themeColor = "#0b1b19",
  textColor = "white",
  year,
  deliverables = ["UI/UX Design", "Development", "Branding"],
  extraImages = [],
}: ProjectTemplateProps) {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  return (
    <main className="relative z-0 min-h-screen">
      
      {/* ── HERO SECTION (Inspirado no Salud) ── */}
      <section 
        className="relative w-full pt-32 md:pt-48 pb-0 px-4 md:px-10 flex flex-col items-center text-center transition-colors duration-700"
        style={{ backgroundColor: themeColor }}
      >
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-col items-center w-full max-w-screen-2xl mx-auto mb-16 md:mb-24 z-10"
        >
          {/* TÍTULO */}
          <h1 className="text-[20vw] md:text-[14vw] leading-[0.85] tracking-tight text-white mb-6 font-medium" style={{ color: textColor }}>
            {title}
          </h1>
          
          {/* SLOGAN */}
          <p 
            className="text-base md:text-xl font-light tracking-wide flex items-center gap-4"
            style={{ color: textColor, opacity: 0.7 }}
          >
            {slogan}
            {year && (
              <>
                <span 
                  className="w-1 h-1 rounded-full" 
                  style={{ backgroundColor: textColor, opacity: 0.4 }} 
                />
                <span style={{ opacity: 0.6 }}>{year}</span>
              </>
            )}
          </p>
        </motion.div>

        {/* MOCKUP PRINCIPAL OVERLAYING BACKGROUNDS */}
        {image && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="w-full max-w-[95%] md:max-w-screen-2xl mx-auto relative rounded-t-[40px] md:rounded-t-[80px] overflow-hidden z-20 aspect-[4/3] md:aspect-[16/9] shadow-2xl bg-neutral-900"
          >
            <Image 
              src={image} 
              alt={`Mockup de ${title}`} 
              fill 
              sizes="100vw"
              className="object-cover object-top" 
            />
          </motion.div>
        )}
      </section>

      {/* ── CORPO DA PÁGINA (Layout em colunas Minimalista) ── */}
      <section className="relative z-10 bg-[#f7f6f2] px-6 md:px-20 pt-20 md:pt-32 pb-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-24"
        >
          
          {/* Lado Esquerdo: Textos de Descrição */}
          <div className="w-full md:w-8/12 flex flex-col gap-12 md:gap-16">
            
            <motion.div variants={itemVariants}>
              <h3 className="text-base md:text-lg font-medium text-zinc-900 mb-4 uppercase tracking-wider text-xs">
                O projeto
              </h3>
              <p className="text-sm md:text-xl leading-relaxed text-zinc-700 font-light">
                {oProjeto}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-base md:text-lg font-medium text-zinc-900 mb-4 uppercase tracking-wider text-xs">
                O Problema
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-zinc-700 font-light italic border-l-2 border-zinc-300 pl-6">
                {problema}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-base md:text-lg font-medium text-zinc-900 mb-4 uppercase tracking-wider text-xs">
                A Solução
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-zinc-700 font-light">
                {solucao}
              </p>
            </motion.div>
          </div>

          {/* Lado Direito: Resumo (Services da referência) */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-3/12 flex flex-col pt-2 md:sticky md:top-32 h-fit"
          >
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] border-b border-zinc-200 pb-4 mb-6">
              Entregas
            </h3>
            <ul className="flex flex-col gap-4 text-base font-medium text-zinc-800">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Galeria de Imagens Extras - Layout Dinâmico (Largura Total do Container) */}
        {extraImages.length > 0 && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full max-w-screen-2xl mx-auto mt-24 px-4 md:px-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {extraImages.map((img, idx) => {
                const isFullWidth = idx % 3 === 0;
                return (
                  <motion.div 
                    variants={itemVariants}
                    key={idx} 
                    className={`relative rounded-[30px] md:rounded-[60px] overflow-hidden shadow-sm bg-zinc-100 ${
                      isFullWidth ? "md:col-span-2 aspect-[16/9]" : "aspect-square"
                    }`}
                  >
                    <Image 
                      src={img} 
                      alt={`${title} mockup ${idx + 1}`} 
                      fill 
                      sizes={isFullWidth ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                      className="object-cover transition-transform duration-1000 hover:scale-105"
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

      </section>

    </main>
  )
}

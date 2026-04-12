"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, ArrowUp } from "lucide-react"

const Footer: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" })

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
        e.preventDefault()
        
        if (href === '#home') {
             window.scrollTo({ top: 0, behavior: 'smooth' })
             return
        }

        const element = document.querySelector(href)
        if (element) {
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.scrollY - 80

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
        }
    }

    const containerVariants: any = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    }

    return (
        <footer id="contato" className="bg-neutral-900 text-white px-6 md:px-14 py-24 md:py-48 w-full relative overflow-hidden">
            {/* Elemento Decorativo de Fundo */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <motion.div 
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-24 relative z-10"
            >
                {/* Linha Divisória */}
                <div className="md:col-span-12 w-full h-[1px] bg-neutral-800/50 mb-4 md:mb-12" />
          
                {/* Coluna Esquerda: Heading e Email */}
                <motion.div variants={itemVariants} className="md:col-span-7 flex flex-col justify-between">
                    <div className="flex flex-col gap-10 md:gap-14">
                        <h2 className="text-[clamp(2.5rem,10vw,5.5rem)] md:text-[clamp(4rem,8vw,7.5rem)] font-medium tracking-tighter leading-[1] md:leading-[0.9]">
                            Vamos criar <br /> algo incrível?
                        </h2>
                        <p className="text-xl md:text-3xl text-neutral-400 font-medium max-w-lg leading-relaxed">
                            Estou sempre aberto a novos desafios e parcerias criativas.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 mt-16 md:mt-24">
                        <span className="text-blue-400 font-bold uppercase tracking-widest text-xs md:text-sm">Meus contatos</span>
                        <a href="mailto:victor.h.navarro4@gmail.com" className="text-[clamp(1.2rem,5vw,2.5rem)] md:text-4xl hover:text-blue-400 transition-all duration-300 break-words font-medium">
                            victor.h.navarro4@gmail.com
                        </a>
                    </div>
                </motion.div>

                {/* Coluna Direita: Links e Mapa */}
                <motion.div variants={itemVariants} className="md:col-span-5 flex flex-col justify-end gap-16 md:gap-24 pt-10 md:pt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8">
                        {/* Redes Sociais */}
                        <div className="flex flex-col gap-6">
                            <span className="text-neutral-500 font-bold uppercase tracking-widest text-[10px]">Social</span>
                            <div className="flex flex-col gap-4">
                                <a href="https://www.linkedin.com/in/victorhugonavarrotaveira/" target="_blank" rel="noreferrer" className="text-lg md:text-xl hover:text-blue-400 transition-colors w-fit">LinkedIn</a>
                                <a href="https://github.com/VNav4rr0" target="_blank" rel="noreferrer" className="text-lg md:text-xl hover:text-blue-400 transition-colors w-fit">GitHub</a>
                                <a href="https://wa.me/5511919068515" target="_blank" rel="noreferrer" className="text-lg md:text-xl hover:text-blue-400 transition-colors w-fit">WhatsApp</a>
                            </div>
                        </div>
                        {/* Páginas */}
                        <div className="flex flex-col gap-6">
                            <span className="text-neutral-500 font-bold uppercase tracking-widest text-[10px]">Páginas</span>
                            <div className="flex flex-col gap-4">
                                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-lg md:text-xl hover:text-blue-400 transition-colors w-fit">Home</a>
                                <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="text-lg md:text-xl hover:text-blue-400 transition-colors w-fit">Sobre</a>
                                <a href="#projetos" onClick={(e) => scrollToSection(e, '#projetos')} className="text-lg md:text-xl hover:text-blue-400 transition-colors w-fit">Projetos</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Copyright e Bottom Actions */}
                    <div className="pt-10 border-t border-neutral-800 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 text-neutral-500">
                        <div className="flex flex-col gap-1">
                            <p className="text-base text-neutral-300 font-medium">© 2026 Victor Navarro.</p>
                            <p className="text-[10px] opacity-40 uppercase tracking-widest">Todos os direitos reservados</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-6 md:gap-10">
                            <div className="flex items-center gap-2 text-sm">
                                <span>Brasil</span>
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            </div>
                            <button 
                                onClick={(e) => scrollToSection(e, '#home')}
                                className="flex items-center gap-3 hover:text-white transition-colors group py-2 text-sm uppercase tracking-widest font-bold"
                            >
                                Voltar ao topo <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    )
}

export default Footer
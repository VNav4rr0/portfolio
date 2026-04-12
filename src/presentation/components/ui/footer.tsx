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
        <footer id="contato" className="bg-neutral-900 text-white px-6 md:px-14 py-24 md:py-40 w-full relative overflow-hidden">
            {/* Elemento Decorativo de Fundo */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <motion.div 
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 relative z-10"
            >
                <div className="md:col-span-12 w-full h-[1px] bg-neutral-800 mb-12 md:mb-20" />
          
                <motion.div variants={itemVariants} className="md:col-span-7 flex flex-col justify-between">
                    <div>
                        <h2 className="text-5xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-12">
                            Vamos criar <br /> algo incrível?
                        </h2>
                        <p className="text-xl md:text-3xl text-neutral-400 font-medium max-w-lg mb-16">
                            Estou sempre aberto a novos desafios e parcerias criativas.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Meus contatos</span>
                        <a href="mailto:victor.h.navarro4@gmail.com" className="text-2xl md:text-4xl hover:text-blue-400 transition-all duration-300">victor.h.navarro4@gmail.com</a>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="md:col-span-5 flex flex-col justify-end gap-12 pt-12 md:pt-0">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-4">
                            <span className="text-neutral-500 font-bold uppercase tracking-widest text-[10px]">Social</span>
                            <a href="https://www.linkedin.com/in/victorhugonavarrotaveira/" target="_blank" rel="noreferrer" className="text-lg hover:text-blue-400 transition-colors">LinkedIn</a>
                            <a href="https://github.com/VNav4rr0" target="_blank" rel="noreferrer" className="text-lg hover:text-blue-400 transition-colors">GitHub</a>
                            <a href="https://wa.me/5511919068515" target="_blank" rel="noreferrer" className="text-lg hover:text-blue-400 transition-colors">WhatsApp</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-neutral-500 font-bold uppercase tracking-widest text-[10px]">Páginas</span>
                            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-lg hover:text-blue-400 transition-colors">Home</a>
                            <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="text-lg hover:text-blue-400 transition-colors">Sobre</a>
                            <a href="#projetos" onClick={(e) => scrollToSection(e, '#projetos')} className="text-lg hover:text-blue-400 transition-colors">Projetos</a>
                        </div>
                    </div>
                    
                    <div className="pt-12 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-neutral-500 text-sm">
                        <p>© 2026 Victor Navarro. All rights reserved.</p>
                        <div className="flex items-center gap-4">
                            <span>Brasil</span>
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <button 
                                onClick={(e) => scrollToSection(e, '#home')}
                                className="ml-4 flex items-center gap-2 hover:text-white transition-colors group"
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
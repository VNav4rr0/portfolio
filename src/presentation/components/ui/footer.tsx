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
        <div className="w-full bg-[#0a0a0a] text-white rounded-t-[40px] md:rounded-t-[80px] mt-[-40px] pt-24 md:pt-32 relative z-20 overflow-hidden shadow-[0_-20px_40px_rgba(0,0,0,0.1)] flex flex-col justify-between min-h-[70vh]">
            
            <motion.div 
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-full max-w-screen-2xl mx-auto flex flex-col h-full justify-between"
            >
                
                {/* Top Section */}
                <div className="px-8 md:px-14 flex flex-col md:flex-row justify-between items-start w-full">
                    
                    {/* Left: Heading & Button */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-10 md:w-1/2">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05]">
                            Vamos criar <br />
                            algo incrível!
                        </h2>
                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=victor.h.navarro4@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-fit flex items-center gap-3 px-8 py-3 rounded-[32px] border border-zinc-700 hover:border-zinc-300 hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base font-medium group"
                        >
                            Contato 
                            <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
                        </a>
                    </motion.div>
                    
                    {/* Right: Links Grids */}
                    <motion.div variants={itemVariants} className="flex flex-row gap-16 sm:gap-24 md:gap-32 mt-20 md:mt-0 md:w-1/2 md:justify-end">
                        
                        {/* Socials Column */}
                        <div className="flex flex-col gap-6">
                            <h4 className="text-lg md:text-xl text-white mb-2">Sociais</h4>
                            <div className="flex flex-col gap-4">
                                <a href="https://github.com/VNav4rr0" target="_blank" rel="noreferrer" className="text-xs md:text-sm font-medium tracking-wide uppercase text-zinc-400 hover:text-white transition-colors">
                                    Github
                                </a>
                                <a href="https://www.linkedin.com/in/victorhugonavarrotaveira/" target="_blank" rel="noreferrer" className="text-xs md:text-sm font-medium tracking-wide uppercase text-zinc-400 hover:text-white transition-colors">
                                    LinkedIn
                                </a>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=victor.h.navarro4@gmail.com" target="_blank" rel="noreferrer" className="text-xs md:text-sm font-medium tracking-wide uppercase text-zinc-400 hover:text-white transition-colors">
                                    Email
                                </a>
                            </div>
                        </div>

                        {/* Sitemap Column */}
                        <div className="flex flex-col gap-6">
                            <h4 className="text-lg md:text-xl text-white mb-2">Mapa</h4>
                            <div className="flex flex-col gap-4">
                                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-xs md:text-sm font-medium tracking-wide uppercase text-zinc-400 hover:text-white transition-colors">
                                    Home
                                </a>
                                <a href="#projetos" onClick={(e) => scrollToSection(e, '#projetos')} className="text-xs md:text-sm font-medium tracking-wide uppercase text-zinc-400 hover:text-white transition-colors">
                                    Projetos
                                </a>
                                <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="text-xs md:text-sm font-medium tracking-wide uppercase text-zinc-400 hover:text-white transition-colors">
                                    Sobre
                                </a>
                                <button onClick={(e) => scrollToSection(e, '#home')} className="text-xs md:text-sm font-medium tracking-wide uppercase text-zinc-400 hover:text-white transition-colors text-left flex items-center gap-2">
                                    Subir <ArrowUp className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                        
                    </motion.div>

                </div>

                {/* Bottom Section: Giant Text */}
                <motion.div variants={itemVariants} className="mt-32 w-full flex flex-col relative px-4 md:px-8 pb-4">
                    
                    <div className="flex flex-col items-center w-full pt-10 border-t border-zinc-800/50">
                        {/* Huge Display Text */}
                        <h1 
                            className="text-[17vw] leading-[0.85] tracking-tighter text-white whitespace-nowrap overflow-hidden flex w-full justify-center md:justify-between items-center px-2"
                        >
                            <span className="font-semibold px-1 text-center w-full">Portfolio</span>
                        </h1>
                    </div>
                </motion.div>
                
            </motion.div>
        </div>
    )
}

export default Footer
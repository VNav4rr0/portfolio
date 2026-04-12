"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cursorTo } from "readline";

export function AboutCarousel() {
  const [current, setCurrent] = useState(0);

  // Mapeamento de conteúdo e esquema de cores solicitado
  const slides = [
    {
      label: "Design",
      title: "Entusiasta na\nárea de UI/UX",
      description: "Minha formação integrou conceitos visuais à arquitetura de sistemas para criar interfaces intuitivas e focar na experiência do usuário.",
      // Combinações de cores Principais e Light solicitadas
      color: "bg-[#f8f8f8]", 
      textColor: "text-black",
      dotColor: "bg-black",
      cursor: "cursor-pointer"
    },
    {
      label: "Estrutura",
      title: "Foco total em\nBack-end",
      description: "Especialista em lógica estrutural, segurança e bancos de dados. Construo APIs robustas, escaláveis e eficientes.",
      color: "bg-[#f8f8f8]", 
      textColor: "text-black",
      dotColor: "bg-black",
      cursor: "cursor-pointer"
    },
    {
      label: "Infra",
      title: "Vivência técnica\nem Hardware",
      description: "Entender o software exige conhecer o hardware. Tenho experiência com infraestrutura e componentes para uma visão 360º.",
      color: "bg-[#f8f8f8]", 
      textColor: "text-black",
      dotColor: "bg-black",
      cursor: "cursor-pointer"
    },
    
  ];

  // Auto-play a cada 6 segundos para dar tempo de ler o texto no mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    // Card Container com transição suave de cor de fundo
    <div className={`rounded-[32px] md:rounded-[56px] h-full p-10 md:p-16 flex flex-col justify-between min-h-[360px] md:min-h-[420px] transition-colors duration-1000 relative overflow-hidden ${slides[current].color}`}>
      
      {/* Overlay de gradiente sutil para melhorar a legibilidade (UX) */}
      <div className="absolute inset-0 bg-neutral-200/50 pointer-events-none" />

      {/* Conteúdo Animado com AnimatePresence (Motion) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          // Animação de entrada (surge da direita)
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          // Animação de saída (desliza para a esquerda)
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // EaseOut cubic para suavidade
          className={`flex flex-col justify-between h-full z-10 relative ${slides[current].textColor}`}
        >
          <div>
            {/* Label discreta acima do título */}
            <span className="text-xs uppercase tracking-widest opacity-70 font-bold mb-3 block">
              {slides[current].label}
            </span>
            
            {/* Título com quebra de linha manual preservada */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl leading-tight mb-6 font-bold whitespace-pre-line tracking-tighter">
              {slides[current].title}
            </h3>
            
            {/* Descrição */}
            <p className="text-lg md:text-xl leading-relaxed opacity-90 font-normal">
              {slides[current].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicadores (Dots) Interativos (UX) */}
      <div className="flex gap-2 mt-8 z-20 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`transition-all duration-500 rounded-full h-2 cursor-pointer ${
              slides[current].dotColor
            } ${
              current === i 
                ? 'w-10 opacity-100' // Dot Ativo: longo e visível
                : 'w-2 opacity-30 hover:opacity-60' // Dot Inativo: pequeno e sutil
            }`}
          />
        ))}
      </div>
    </div>
  );
}
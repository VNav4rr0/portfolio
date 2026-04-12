"use client"

import { motion } from "framer-motion"

export default function Maintenance() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-black overflow-hidden font-body">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-50 rounded-full blur-[120px] opacity-60"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-4xl md:text-6xl mb-6 tracking-tight">
            Site em <span className="text-[var(--md-sys-color-primary)]">atualização</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto leading-relaxed">
            Estamos preparando algo incrível. Voltaremos em breve com novidades no meu portfolio.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-[var(--md-sys-color-primary)] animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="h-1.5 w-1.5 rounded-full bg-[var(--md-sys-color-primary)] animate-bounce" style={{ animationDelay: '200ms' }} />
          <div className="h-1.5 w-1.5 rounded-full bg-[var(--md-sys-color-primary)] animate-bounce" style={{ animationDelay: '400ms' }} />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 text-sm text-muted-foreground font-medium tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        © {new Date().getFullYear()} Victor Navarro
      </motion.div>
    </div>
  )
}

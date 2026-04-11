'use client'

import React from 'react'
import { RippleButton, RippleButtonRipples } from '@/src/presentation/components/animations/animate-ui/primitives/buttons/ripple'
import { Mail, MessageSquare, Linkedin } from 'lucide-react'

export default function ContatoPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-14 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Decoração de Fundo Sutil (Gradients) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-zinc-700/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full z-10 flex flex-col gap-16">
        
        {/* Cabeçalho da página */}
        <div className="text-left space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9]">
            Vamos tirar <br className="hidden md:block" />
            a sua <span className="text-zinc-500">ideia</span> do papel?
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-medium">
            Preencha o formulário abaixo para enviar um e-mail ou conecte-se comigo diretamente através das minhas redes profissionais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Formulário (Esquerda) */}
          <form className="lg:col-span-7 flex flex-col gap-6 bg-white/[0.03] border border-white/10 p-6 md:p-10 rounded-[32px] backdrop-blur-md">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-300">Nome</label>
                <input 
                    type="text" 
                    id="name"
                    placeholder="Seu nome" 
                    className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
                </div>
                
                <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-300">E-mail</label>
                <input 
                    type="email" 
                    id="email"
                    placeholder="seuemail@exemplo.com" 
                    className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
                </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-300">Mensagem</label>
              <textarea 
                id="message"
                rows={5}
                placeholder="Como posso te ajudar?" 
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
              ></textarea>
            </div>

            <RippleButton className="w-full mt-4 rounded-full bg-white text-black font-semibold py-4 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-3">
              <Mail size={20} />
              Enviar Mensagem
              <RippleButtonRipples color="#000000" />
            </RippleButton>
          </form>

          {/* Links diretos (Direita) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-center pb-8 lg:pb-0">
            <div className="space-y-4">
              <h3 className="text-3xl font-medium tracking-tight">Outros canais</h3>
              <p className="text-base text-zinc-400 leading-relaxed max-w-sm">
                Recomendado para contatos mais ágeis ou propostas diretas. Eu normalmente respondo em até 24 horas por aqui!
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* WhatsApp Button */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 bg-white/[0.03] border border-white/10 p-5 rounded-3xl hover:bg-white/[0.08] transition-all">
                <div className="w-14 h-14 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors flex-shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white text-lg">WhatsApp</span>
                  <span className="text-sm text-zinc-400">Em horário comercial</span>
                </div>
              </a>

              {/* LinkedIn Button */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 bg-white/[0.03] border border-white/10 p-5 rounded-3xl hover:bg-white/[0.08] transition-all">
                <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors flex-shrink-0">
                  <Linkedin size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white text-lg">LinkedIn</span>
                  <span className="text-sm text-zinc-400">Conexões profissionais</span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

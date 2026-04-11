"use client";
import { motion } from "framer-motion";
import { Cursor, CursorFollow, CursorProvider } from "@/src/presentation/components/animations/animate-ui/components/animate/cursor";
import { cn } from "@/src/infrastructure/utils/utils";
import Link from "next/link";

export interface BentoCardProps {
  className?: string;
  image?: string;
  logo?: string; // Mantido por compatibilidade
  href?: string;
  title?: string;
  subtitle?: string;
  tags?: string[];
  imageClassName?: string;
}

export const BentoCard = ({ className, image, href, title, subtitle, tags = [], imageClassName }: BentoCardProps) => {
  const ImageLinkWrapper = href ? Link : "div";

  return (
    <div className={cn("flex flex-col gap-4 group block w-full relative", className)}>
      <ImageLinkWrapper href={href as string} className="block w-full cursor-none">
      <CursorProvider className="relative w-full z-10 cursor-none">
        <Cursor className="hidden" />
        <CursorFollow className="bg-blue-600/90 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-2xl backdrop-blur-sm z-50 border border-blue-400/50 uppercase tracking-wider">
          Ver projeto
        </CursorFollow>

        <motion.div 
          initial="initial"
          whileHover="hover"
          className={cn(
            "relative w-full rounded-[24px] md:rounded-[36px] overflow-hidden bg-zinc-100 dark:bg-zinc-900",
            imageClassName || "aspect-[4/3]"
          )}
        >
          {image && (
            <motion.img
              src={image}
              alt={title || "Project Image"}
              className="w-full h-full object-cover"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.05 }
              }}
              transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.6 }}
            />
          )}

          {/* Opcional Overlay Escuro para estilo se quiser */}
          <motion.div
            className="absolute inset-0 bg-black/10 pointer-events-none"
            variants={{
              initial: { opacity: 0 },
              hover: { opacity: 1 }
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </CursorProvider>
      </ImageLinkWrapper>

      {/* TEXT DETAILS BELOW IMAGE */}
      <div className="flex flex-col gap-2 mt-2 px-2 md:px-0">
        {(subtitle || title) && (
          <div className="flex flex-col">
            {subtitle && (
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {subtitle}
              </span>
            )}
            {title && (
              <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
                {title}
              </h3>
            )}
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 text-[11px] font-semibold tracking-wider text-zinc-600 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 rounded-full uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

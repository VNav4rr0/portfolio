'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useLayoutEffect } from 'react'
import Image from 'next/image'

type Props = {
  scrollRef: React.RefObject<HTMLElement>
}

const galleryItems = [
  { id: 1, title: "CanisHerz", src: "/imageCanis.png" },
  { id: 2, title: "Dynamis", src: "/dynamis.png" },
  { id: 3, title: "PersonaPizza", src: "/personapizza.png" },
   { id: 4, title: "Vestibulize", src: "/vestibulize.png" },
]

export function HorizontalGallery({ scrollRef }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)

  // Observa a seção pai para fazer o scroll
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  })

  useLayoutEffect(() => {
    if (!trackRef.current || !containerRef.current) return

    const totalWidth = trackRef.current.scrollWidth
    const viewportWidth = containerRef.current.offsetWidth

    setScrollWidth(totalWidth - viewportWidth)
  }, [])

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth])

  return (
    <div ref={containerRef} className="h-auto w-full overflow-hidden">
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex h-full items-center gap-[40px] px-14 md:px-24"
      >
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="
              relative
              min-w-[400px] md:min-w-[500px]
              h-[550px] md:h-[676px]
              rounded-[4rem] md:rounded-[7rem]
              bg-neutral-200
              overflow-hidden
              shadow-lg
            "
          >
            <Image
              src={item.src}
              alt={`Projeto ${item.title}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
"use client"

import * as React from "react"
import { Attraction } from "@/src/presentation/components/animations/attraction"

const mySkills = {
  frontEnd: [
    "React", "Next.js", "TypeScript", "JavaScript",
    "HTML5", "CSS3", "Tailwind CSS",
  ],
  backEnd: [
    "Java", "Spring Boot", "REST API", "Lógica Estrutural",
  ],
  uiUxDesign: [
    "UI/UX Design", "Figma", "Prototipagem",
    "Design de Interfaces", "Experiência do Usuário (UX)",
  ],
  toolsAndEcosystem: [
    "Git", "GitHub", "VS Code", "Vercel", "Shadcn/UI",
  ],
}

const googleColorsPalette = [
  "bg-[#4285F4] text-white", // Blue Principal
  "bg-[#57CBFF] text-black", // Blue Light
  "bg-[#34A853] text-white", // Green Principal
  "bg-[#5CDE6D] text-black", // Green Light
  "bg-[#FBBC04] text-black", // Yellow Principal
  "bg-[#FFD527] text-black", // Yellow Light
  "bg-[#E74639] text-white", // Red Principal
  "bg-[#FF7DB0] text-black", // Red Light (Rosa)
]

const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min

const Skills = () => {
  // 1. Criamos um estado para saber se já estamos no navegador
  const [isMounted, setIsMounted] = React.useState(false)

  // 2. O useEffect só roda no navegador (nunca no servidor)
  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  // 3. Só calculamos as posições aleatórias se estivermos montados no navegador
  const skillsWithProps = React.useMemo(() => {
    if (!isMounted) return []

    const allSkills = Object.values(mySkills).flat()
    return allSkills.map((skill, index) => ({
      skill,
      x: `${getRandom(20, 80)}%`,
      y: `${getRandom(0, 20)}%`,
      angle: getRandom(0, 360),
      colorClass: googleColorsPalette[index % googleColorsPalette.length],
    }))
  }, [isMounted])

  // 4. Se o componente ainda estiver no servidor, retornamos uma div vazia
  // com as MESMAS dimensões para não quebrar o layout
  if (!isMounted) {
    return <div className="absolute top-[130px] bottom-12 left-10 right-10 z-0" />
  }

  return (
    <div className="absolute inset-0 z-0">
      <Attraction gravity={{ x: 0, y: 1.5 }}>
        {skillsWithProps.map(({ skill, x, y, angle, colorClass }, index) => (
          <div
            key={index}
            data-x={x}
            data-y={y}
            data-angle={angle}
            className={`${colorClass} cursor-grab rounded-full px-3 py-1 text-xs md:px-5 md:py-2 md:text-sm select-none active:cursor-grabbing whitespace-nowrap shadow-sm`}
          >
            {skill}
          </div>
        ))}
      </Attraction>
    </div>
  )
}

export { Skills }
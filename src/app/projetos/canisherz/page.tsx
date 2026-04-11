import { ProjectTemplate } from "@/src/presentation/components/templates/ProjectTemplate"

export default function CanisHerzPage() {
  return (
    <ProjectTemplate
      title="CanisHerz"
      slogan="Inovação em IoT para monitoramento cardíaco canino"
      image="/canisherz.png"
      oProjeto="Um sistema que utiliza sensores e hardware embarcado para monitorar batimentos cardíacos de cães em tempo real, enviando dados para uma interface web."
      problema="A dificuldade de monitorar a saúde cardíaca pet de forma constante e preventiva fora de clínicas."
      solucao="Integração entre sensores IoT e um dashboard visual para acompanhamento doméstico."
      themeColor="#FFDADA"
      textColor="#181D19"
      extraImages={["/canisherz.png", "/imageCanis.png", "/canisherz.png"]}
    />
  )
}

import { ProjectTemplate } from "@/src/presentation/components/templates/ProjectTemplate"

export default function DynamisPage() {
  return (
    <ProjectTemplate
      title="Dynamis"
      slogan="Alta performance e UX aplicada à nutrição"
      image="/dynamisImage.png"
      oProjeto="Um aplicativo focado em atletas e entusiastas da saúde que precisam de um controle rigoroso de macros e micronutrientes com uma interface ágil."
      problema="Aplicativos de nutrição atuais são burocráticos e desestimulam a constância do usuário."
      solucao="Uma interface focada em microinterações rápidas e visualização de dados fluida."
      themeColor="#151515"
      textColor="#FFFFFF"
      extraImages={["/dynamis.png", "/dynamisImage.png", "/dynamis.png"]}
    />
  )
}

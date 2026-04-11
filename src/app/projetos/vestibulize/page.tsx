import { ProjectTemplate } from "@/src/presentation/components/templates/ProjectTemplate"

export default function VestibulizePage() {
  return (
    <ProjectTemplate
      title="Vestibulize"
      slogan="Reconhecido pelo Centro Paula Souza e Agência SP"
      image="/vestibulize.png"
      oProjeto="Uma plataforma educacional que centraliza informações de vestibulares, facilitando a organização de estudos para alunos de escolas públicas."
      problema="A fragmentação de dados torna a preparação para o vestibular exaustiva e confusa."
      solucao="Um ecossistema intuitivo que organiza cronogramas e materiais em um só lugar."
      themeColor="#0b1b28"
      textColor="#FFFFFF"
      extraImages={["/vestibulize.png", "/vestibulize.png", "/vestibulize.png"]}
    />
  )
}

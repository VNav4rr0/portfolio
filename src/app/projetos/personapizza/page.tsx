import { ProjectTemplate } from "@/src/presentation/components/templates/ProjectTemplate"

export default function PersonaPizzaPage() {
  return (
    <ProjectTemplate
      title="Persona Pizza"
      slogan="Design estratégico focado em conversão comercial"
      image="/unsplash_vHRFraV4U00.png"
      oProjeto="Um website de vendas para uma pizzaria local, priorizando a velocidade de carregamento e o fluxo de fechamento de pedido."
      problema="Interfaces de delivery confusas que geram altas taxas de desistência no carrinho."
      solucao="Um fluxo de checkout simplificado e design visual focado no apetite-appeal."
      themeColor="#380e0e"
      textColor="#FFFFFF"
      extraImages={["/personapizza.png", "/unsplash_vHRFraV4U00.png", "/personapizza.png"]}
    />
  )
}

import { Main } from "./Components/Main"
import { Carousel } from "./Components/Carousel"
import { Contradiction } from "./Components/Contradiction"
import { Loop } from "./Components/Loop"
import { Differential } from "./Components/Differential"
import { About } from "./Components/About"

import logoVc from "./assets/svg/logo-vcusa.svg"

export function App() {
  return (
    <div>
      <Main/>

      <Carousel/>

      <Contradiction/>

      <Loop/>

      <Differential/>

      <About 
      image={logoVc} 
      title="Não é só um curso. É um caminho para sua liberdade!" 
      description="Muitos brasileiros que chegam aos Estados Unidos enfrentam a mesma barreira: falta de documentos, crédito limitado e a dificuldade de conquistar estabilidade logo no começo da vida. Mas a verdade é que isso não precisa ser um obstáculo.
      Nós desenvolvemos um método exclusivo pensado para quem está começando agora nos EUA e deseja construir um futuro com mais segurança e oportunidades. Um passo a passo simples, direto e comprovado, que mostra como superar as limitações e abrir portas que antes pareciam fechadas.
      Aqui, você não encontra apenas conhecimento técnico, mas uma nova forma de enxergar suas possibilidades. Você vai aprender estratégias práticas que podem ser aplicadas imediatamente, independentemente do seu nível de experiência ou da sua situação atual."/> 
    </div>
  )
}
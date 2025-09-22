import { Main } from "./Components/Main"
import { Carousel } from "./Components/Carousel"
import { Contradiction } from "./Components/Contradiction"
import { Loop } from "./Components/Loop"
import { Differential } from "./Components/Differential"
import { About } from "./Components/About"
import { Price } from "./Components/Price"
import { Faq } from "./Components/Faq"
import { Footer } from "./Components/Footer"

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
        description={
          <>
            <strong>Leilão 1 – Copart</strong><br />
            A Copart é uma das maiores plataformas de leilão de veículos do mundo, especializada em carros sinistrados,
            recuperados de financiamento, e veículos para revenda ou desmanche. Ideal para quem busca oportunidades
            em veículos com pequenas avarias ou para quem trabalha com peças e recuperação.

            <br /><br />

            <strong>Leilão 2 – IAAI (Insurance Auto Auctions)</strong><br />
            A IAAI é referência em leilões de veículos provenientes de seguradoras, bancos e empresas de leasing.
            Este leilão oferece uma grande seleção de veículos sinistrados, roubados, recuperados e retomados de financiamento.
            É uma excelente opção para quem atua no setor de reconstrução automotiva ou para quem procura oportunidades
            abaixo do valor de mercado.

            <br /><br />

            <strong>Leilão 3 – Manheim</strong><br />
            Reconhecida por seu foco em veículos seminovos e usados em bom estado, a Manheim é uma das maiores redes
            de leilões automotivos voltadas ao mercado de revenda. Seus leilões contam com veículos de locadoras,
            frotas corporativas e concessionárias, geralmente com manutenção em dia e boas condições gerais.
            É o leilão ideal para revendedores, lojistas e compradores que buscam veículos prontos para uso com menor risco.
          </>
        }
      />

      <Price/>

      <About 
      image={ logoVc }
      title="Mas afinal, quem somos?"
      description="Somos um grupo de investidores brasileiros que, por gostar muito de carros e observar que existe uma forma de levar liberdade financeira para brasileiros que vivem no exterior, se uniu e, além da VCUSA Auto Sales, que é nosso dealer (revenda de carros), fundou a VCUSA Auto Service.
      Desde então, com a ideia de ajudar seus seguidores a conquistar a tão sonhada liberdade financeira revendendo carros, o grupo, além de investir nos carros de leilão para revenda na VCUSA Auto Sales, iniciou investimentos na parte educacional e de broker, onde o sócio Adriano, responsável pela gestão da companhia em solo americano, encabeçou o projeto e passou a ensinar sobre a parte técnica de como adquirir e escolher os melhores carros e, assim, conquistar lucros através da parceria e união com nossa organização empresarial."
      />

      <Faq/>

      <Footer/>
    </div>
  )
}
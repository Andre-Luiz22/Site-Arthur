import DefaultLayout from "@/layouts/default";
import imgProdArtistica1 from "@/assets/imgProdArtistica1.jpg";
import imgProdArtistica2 from "@/assets/imgProdArtistica2.jpg";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4">
        <div className="max-w-[900px] w-dvw text-center px-3">
          <h1 className="font-bold text-3xl mb-5">
            Saude Mental X Produção Artística
          </h1>

          <h2 className="text-2xl font-bold text-center">
            O impacto da arte na subjetividade humana
          </h2>
          <p className="text-justify indent-4">
            A arte tem um impacto significativo na subjetividade humana, ela
            reflete valores, crenças e identidades culturais, bem como desafia
            normas e provoca mudanças sociais
          </p>
          <p className="text-justify indent-4">
            Nesse sentido, sua interpretação permite que cada um veja e sinta de
            maneira única, com base em suas próprias experiências e
            perspectivas, o que na psicologia chamamos de projeção.
          </p>
          <p className="text-justify indent-4">
            Portanto, é comum a projeção do nosso interior na arte. Dessa forma,
            promovemos nosso autoconhecimento e ressignificamos também nossas
            experiências traumáticas e angústias internas.
          </p>
          <img
            alt=""
            className=" sm:size-2/4 mx-auto my-2"
            src={imgProdArtistica1}
          />

          <h2 className="text-2xl font-bold text-center">
            Arte e saúde mental: Qual é a relação entre ambas?
          </h2>
          <p className="text-justify indent-4">
            A relação entre arte e saúde mental é simples: a catarse promovida
            pela arte permite que as pessoas expressem emoções. Isso, por sua
            vez, promove a libertação de tensões e o processamento de
            experiências pessoais através da criação ou apreciação de obras
            artísticas. Estas, podem se dar por meio da:
          </p>

          <ul className="list-disc ml-5 text-start my-4">
            <li>música;</li>
            <li>pintura;</li>
            <li>literatura;</li>
            <li>teatro;</li>
            <li>cinema;</li>
            <li>entre outros;</li>
          </ul>

          <p className="text-justify indent-4">
            Desse modo, através da identificação com o personagem ou com o tema,
            podemos encontrar consolo, compreensão e alívio emocional. Portanto,
            a catarse através da arte é uma maneira poderosa de lidar com a
            complexidade da vida.
          </p>
          <img
            alt=""
            className=" sm:size-2/4 mx-auto my-2"
            src={imgProdArtistica2}
          />

          <h2 className="text-2xl font-bold text-center">
            10 Efeitos positivos da arte.
          </h2>
          <p className="text-justify indent-4">
            Quando é o próprio sujeito que produz a arte, sua criação permite a
            expressão de emoções complexas que podem ser difíceis de se
            comunicar em palavras. Assim, pintar, desenhar, escrever, dançar ou
            tocar instrumentos são meios potentes de liberar sentimentos
            reprimidos.
          </p>
          <p className="text-justify indent-4">
            Com efeito, a arte tem um impacto positivo na saúde mental e
            emocional das pessoas, proporcionando formas de expressão e
            comunicação. Logo, muitas pessoas encontram conforto, alívio do
            estresse e equilíbrio emocional através da criação e/ou apreciação
            artística. A arte apoia a cura de várias maneiras, como:
          </p>

          <h2 className="text-xl font-semibold text-center mb-3">
            1.Na expressão emocional
          </h2>
          <p className="text-justify indent-4">
            A criação artística permite que as pessoas expressem emoções
            complexas, aliviando o estresse e a ansiedade. Dessa forma, ela
            oferece um canal seguro para liberar sentimentos reprimidos,
            possibilitando a exploração e compreensão das próprias emoções.
          </p>

          <h2 className="text-xl font-semibold text-center mb-3">
            2.No favorecimento da reflexão
          </h2>
          <p className="text-justify indent-4">
            A criação artística também pode incentivar a reflexão sobre a vida,
            valores e experiências pessoais, auxiliando no processo de
            autoconhecimento. Logo, ao se envolver com obras de arte, as pessoas
            muitas vezes se deparam com temas profundos que as fazem repensar
            suas perspectivas e ganhar uma compreensão mais profunda de si
            mesmas.
          </p>

          <h2 className="text-xl font-semibold text-center mb-3">
            3.No autoconhecimento
          </h2>
          <p className="text-justify indent-4">
            Ao explorar a arte, as pessoas podem se conhecer melhor,
            identificando pensamentos e sentimentos que podem não estar
            conscientes de outra forma. Entretanto, a análise de suas próprias
            reações à arte e a compreensão das razões por trás dessas respostas
            podem revelar aspectos ocultos do consciente.
          </p>

          <h2 className="text-xl font-semibold text-center mb-3">
            4.Na redução do estresse
          </h2>
          <p className="text-justify indent-4">
            A prática artística pode funcionar como uma forma de meditação,
            reduzindo o estresse e promovendo o relaxamento. Durante o processo
            criativo, as pessoas muitas vezes se concentram inteiramente em sua
            arte, deixando de lado preocupações e distrações do dia a dia.
          </p>

          <h2 className="text-xl font-semibold text-center mb-3">
            5.Na construção de resiliência
          </h2>
          <p className="text-justify indent-4">
            Enfrentar desafios criativos na arte ajuda a desenvolver habilidades
            de resiliência que podem ser aplicadas em outras áreas da vida.
            Sendo assim, a resolução de problemas artísticos e a superação de
            obstáculos no processo criativo fortalecem a capacidade de lidar com
            adversidades, incertezas e fracassos.
          </p>

          <h2 className="text-xl font-semibold text-center mb-3">
            6.No aprimoramento da comunicação não verbal
          </h2>
          <p className="text-justify indent-4">
            A arte permite a comunicação de experiências e emoções de forma não
            verbal, útil para aqueles que têm dificuldade em expressar-se
            verbalmente. Isso é especialmente valioso em terapias para pessoas
            com autismo ou outras condições que afetam a comunicação
          </p>

          <h2 className="text-xl font-semibold text-center mb-3">
            7.No senso de realização
          </h2>
          <p className="text-justify indent-4">
            Ao completar uma obra de arte, as pessoas frequentemente
            experimentam uma sensação de conquista e orgulho em seu trabalho.
            Todavia, esse sentimento positivo de realização pode ser transferido
            para outras áreas da vida, impulsionando a confiança e a autoestima.
          </p>

          <h2 className="text-xl font-semibold text-center mb-3">
            8.Promovendo a catarse
          </h2>
          <p className="text-justify indent-4">
            O ato de apreciar ou criar arte pode levar a uma catarse emocional,
            onde as pessoas se sentem aliviadas ou liberadas de emoções intensas
            depois de entrar em contato com uma obra de arte que ressoa com
            elas.
          </p>

          <h2 className="text-xl font-semibold text-center mb-3">
            9.No estímulo de conexão social
          </h2>
          <p className="text-justify indent-4">
            Participar de atividades artísticas, como aulas de arte em grupo,
            pode promover a interação social e construir conexões com outras
            pessoas, o que é benéfico para o bemestar emocional.
          </p>

          <h2 className="text-xl font-semibold text-center mb-3">
            10.Inspirando e dando mais esperança
          </h2>
          <p className="text-justify indent-4">
            Obras de arte podem inspirar, motivar e fornecer esperança,
            oferecendo uma visão positiva do mundo ou da vida. Contudo, muitas
            vezes, a arte retrata a beleza, a resiliência e a capacidade humana
            de superar desafios, servindo como uma fonte de inspiração para
            aqueles que a contemplam.
          </p>

          <div className="flex-1">
            <h2 className="text-xl font-semibold text-center mb-3">
              Conclusão
            </h2>
            <p className="text-justify indent-4">
              A arte impacta profundamente a subjetividade humana e a saúde
              mental, refletindo valores culturais e desafiando normas. A
              interpretação artística promove autoconhecimento e ressignificação
              de traumas. A catarse pela arte facilita a expressão de emoções e
              alívio de tensões.
            </p>
            <p className="text-justify indent-4">
              Criar ou apreciar arte oferece conforto, reduz estresse e
              equilibra emoções. A prática artística funciona como meditação e
              desenvolve resiliência.
            </p>

            <p className="text-justify indent-4">
              Além disso, a arte melhora a comunicação não verbal e proporciona
              sensação de conquista e orgulho. Atividades artísticas em grupo
              fortalecem conexões sociais e beneficiam o bem-estar emocional.
              Obras de arte inspiram, motivam e oferecem esperança, mostrando a
              capacidade humana de superar desafios.
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

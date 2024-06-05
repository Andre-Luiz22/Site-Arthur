import DefaultLayout from "@/layouts/default";
import imgAtvFis1 from "@/assets/imgAtvFis1.jpg";
import imgAtvFis2 from "@/assets/imgAtvFis2.jpg";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4   ">
        <div className="max-w-[900px] w-dvw text-center px-3">
          <h1 className="font-bold text-3xl">
            Saúde mental e Atividade Física
          </h1>
          <p className="text-justify indent-4">
            A relação entre saúde mental e atividade física é forte. Exercícios
            regulares podem ajudar a reduzir o estresse, melhorar o humor e
            aumentar a autoestima. A prática regular de atividade física pode
            contribuir significativamente para a saúde mental, reduzindo os
            níveis de estresse, ansiedade e depressão, além de melhorar a
            qualidade do sono e promover um melhor equilíbrio emocional.
          </p>
          <p className="text-justify indent-4">
            A saúde física desempenha um papel crucial na manutenção e promoção
            da saúde mental. Há uma interconexão significativa entre corpo e
            mente, onde o estado físico influencia diretamente o bem-estar
            psicológico e emocional, ambas são partes fundamentais do bem-estar
            geral de uma pessoa.
          </p>
          <img alt="" className=" sm:size-2/4 mx-auto my-2" src={imgAtvFis2} />
          <p className="text-justify indent-4">
            Diversos estudos têm evidenciado os inúmeros benefícios que a
            atividade física pode proporcionar para a saúde mental. Quando nos
            exercitamos, nosso corpo libera endorfinas, neurotransmissores que
            atuam como analgésicos naturais e promovem uma sensação de bem-estar
            e euforia, muitas vezes referida como &quot;euforia do
            corredor&quot; ou &quot;runner&apos;s high&quot;. Essa sensação pode
            ajudar a aliviar o estresse, reduzir a ansiedade e combater a
            depressão.
          </p>
          <p className="text-justify indent-4">
            Pesquisas mostram que o exercício físico regular pode reduzir o
            risco de depressão e reduzir a perda cognitiva em pacientes com
            Alzheimer. Uma das descobertas de pesquisas recentes é que
            exercícios como caminhar, correr ou andar de bicicleta são
            essenciais para manter a função nervosa saudável, mesmo com a idade
            mais avançada. Diante do declínio do nível de atividade física da
            população mundial, a Organização Mundial da Saúde (OMS) assumiu que
            estamos vivenciando a prevalência de estilos de vida sedentários.
          </p>
          <img alt="" className=" sm:size-2/4 mx-auto my-2" src={imgAtvFis1} />
          <h2 className="text-start font-semibold text-2xl my-4">
            Pontos que destacam essa importância:
          </h2>
          <ol className="list-decimal mx-4 text-justify">
            <li>
              Redução do Estresse: Exercícios físicos ajudam a reduzir os níveis
              de cortisol, o hormônio do es- tresse, e aumentam a produção de
              endorfinas, que são substâncias químicas no cérebro que atuam como
              analgésicos naturais e elevam o humor.
            </li>
            <li>
              Melhoria do Sono: A atividade física regular pode melhorar a
              qualidade do sono, o que é essenci- al para a saúde mental. Um
              sono adequado ajuda a regular as emoções e o humor, além de
              aumentar a capacidade de lidar com o estresse. Ao se dedicar a uma
              prática esportiva ou a um exercício físico, as pessoas têm a
              oportunidade de canalizar suas energias para algo positivo,
              aliviando as tensões acumuladas ao longo do dia.
            </li>
            <li>
              Aumento da Autoestima: Manter uma rotina de exercícios pode levar
              a uma melhora na autoper- cepção e na autoestima. Sentir-se
              fisicamente apto e forte pode traduzir-se em uma imagem corporal
              mais positiva e maior confiança em si mesmo.
            </li>
            <li>
              Redução dos Sintomas de Depressão e Ansiedade*: Diversos estudos
              mostram que a atividade física regular pode ser tão eficaz quanto
              os antidepressivos em alguns casos de depressão levem a mo-derada.
              O exercício ajuda a aumentar a produção de neurotransmissores,
              como serotonina e dopamina, que são importantes para o humor.
            </li>
            <li>
              Melhoria da Função Cognitiva: O exercício físico regular está
              associado a uma melhora na função cognitiva, incluindo melhor
              memória, atenção e velocidade de processamento. Isso é
              particularmente importante para a saúde mental, pois contribui
              para um melhor desempenho nas atividades diárias e na resolução de
              problemas.
            </li>
            <li>
              Interação Social: Atividades físicas em grupo, como esportes
              coletivos ou aulas de ginástica, proporcionam oportunidades de
              interação social, o que é benéfico para a saúde mental. O apoio
              social é um fator protetor contra o estresse e pode melhorar o
              humor e a sensação de pertencimento.
            </li>
            <li>
              Regulação das Emoções: A prática de exercícios ajuda a regular as
              emoções e pode ser uma estratégia eficaz para lidar com
              sentimentos de raiva, frustração e tristeza.
            </li>
          </ol>
        </div>
      </section>
    </DefaultLayout>
  );
}

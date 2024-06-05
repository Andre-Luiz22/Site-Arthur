import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4   ">
        <div className="max-w-[900px] w-dvw text-center px-3">
          <h1 className="font-bold text-3xl">Ervas Medicinais</h1>
          <h2 className="text-start font-semibold text-2xl my-4">Beneficios</h2>
          <p className="text-justify indent-4">
            Muitas pessoas optam pela medicina natural para tratar seus
            problemas de saúde, e não é diferente quando se trata de saúde
            mental. Soa mais agradável a possibilidade de usar um remédio para
            ansiedade que seja natural, produzido a partir de uma erva, do que
            utilizar remédios de tarja preta que podem causar dependência
            química. Nem todos os remédios naturais são confiáveis e possuem
            eficácia verdadeira; e a possibilidade do tratamento com ervas não
            anula a importância do tratamento tradicional, mas pode ser uma boa
            alternativa!
          </p>
          <h2 className="text-start font-semibold text-2xl my-4">
            Alguns Exemplos
          </h2>
          <div className="space-y-4 pt-4">
            <p className="text-justify indent-4">
              <b>Erva-de-são-João, hipérico ou hipericão:</b> Combate a
              depressão leve e moderada, bem como sintomas relacionados à
              ansiedade, tensão muscular, déficit de atenção, síndrome de fadiga
              crônica, síndrome do intestino irritável e TPM.
            </p>

            <p className="text-justify indent-4">
              <b>Maracujá ou Flor da Paixão:</b> Possui prosperidade sedativa,
              calmante, sonífera e hipnótica. São utilizadas no tratamento de
              ansiedade, depressão, tensão nervosa, insônia e déficit de
              atenção.
            </p>

            <p className="text-justify indent-4">
              <b>Erva cidreira:</b> Possui propriedade calmante, sonífera,
              ansiedade, digestiva, sedativa e antiespasmódica.
            </p>

            <p className="text-justify indent-4">
              <b>Camomila:</b> Redução de sintomas do transtorno de ansiedade.
            </p>

            <p className="text-justify indent-4">
              <b>Kava-Kava:</b> Tratamento da ansiedade, agitação, epilepsia,
              psicose, depressão e distúrbios nervosos, como estresse e cansaço.
            </p>

            <p className="text-justify indent-4">
              <b>Lúpulo ou Pé de galo:</b> Alívio a insônia, excitação e
              inquietação associada a dores de cabeça e nervosismo
            </p>
            <p className="text-justify indent-4">
              <b>Espinheiro branco:</b> Tratamento de ansiedade e insônia com
              propriedade relaxante
            </p>
          </div>

          {/* <img alt="" className=" sm:size-2/4 mx-auto my-2" src={imgAtvFis1} /> */}
          <h2 className="text-start font-semibold text-2xl my-4">Riscos</h2>
          <p className="text-justify indent-4">
            Os medicamentos fitoterápicos são substâncias produzidas a partir de
            plantas medicinais ou vegetais para a obtenção de ação terapêutica.
            Seu uso, apesar de ser muito comum, deve ser feito com cautela. De
            acordo com a Organização Mundial da Saúde (OMS), aproximadamente 80%
            da população de países em desenvolvimento utilizam práticas
            tradicionais no cuidado com a saúde. Apesar disso, algumas plantas
            medicinais não têm eficiência nem segurança comprovadas, por isso é
            importante estar atento e buscar informações confiáveis antes de
            utilizar qualquer produto
          </p>
          <h2 className="text-start font-semibold text-2xl my-4">
            Uso Correto
          </h2>
          <p className="text-justify indent-4">
            O Ministério da Saúde afirma que as plantas medicinais têm um papel
            importante no desenvolvimento de medicamentos e na pesquisa na área
            de Farmácia.
          </p>
          <p className="text-justify indent-4">
            Uma pesquisa realizada em 2001 mostra que 40% dos medicamentos foram
            desenvolvidos, direta ou indiretamente, a partir de recursos
            naturais. A fitoterapia é reconhecida pelo Conselho Federal de
            Farmácia (CFF), o qual afirma que o uso correto dessa prática pode
            auxiliar no combate de doenças de diversas causas, como alergias,
            infecções, traumas e disfunções metabólicas.
          </p>
          <p className="text-justify indent-4">
            Para que os fitoterápicos sejam comercializados, é preciso comprovar
            que o produto é seguro, tem qualidade e eficiência. A qualidade pode
            ser obtida controlando fatores como: época de colheita, parte da
            planta utilizada, tipo de armazenamento e contaminação microbiana.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}

import imgSaudeTec from "@/assets/imgSaudeTec1.jpg";
import imgSaudeTec2 from "@/assets/imgSaudeTec2.jpg";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 pt-8 md:pt-10 ">
        <div className="max-w-[900px] w-dvw text-center px-3">
          <h1 className="font-bold text-3xl">Saúde mental e tecnologia</h1>
          <h2 className="text-start font-semibold text-2xl">Dependência</h2>
          <p className="text-justify indent-4">
            O uso excessivo de tecnologias pode levar à dependência, o que pode
            levar a problemas de saúde mental. Por exemplo, o uso excessivo de
            redes sociais pode levar a ansiedade, depressão e baixa autoestima.
          </p>
          <img alt="" className=" sm:size-2/4 mx-auto my-2" src={imgSaudeTec} />
          <h2 className="text-start font-semibold text-2xl">
            Efeito das mídias sociais:
          </h2>
          <p className="text-justify indent-4">
            Um dos efeitos mais óbvios da era digital na saúde mental é a
            ascensão das mídias sociais. Essas plataformas permitem a conexão
            com pessoas de todo o mundo, mas também podem levar a sentimentos de
            solidão e isolamento. “Essa interação excessiva com o universo
            online vem trazendo algumas mudanças na nossa forma de relacionar
            com outras pessoas e com o desenvolvimento da própria pessoa”,
            explica Nara Helena Lopes Pereira da Silva, professora de psicologia
            online no programa de pós-graduação do Instituto de Psicologia da
            USP. Para a pesquisadora, essas mudanças têm agravado ou provocado
            vários quadros de problemas mentais – e afetam inclusive a
            socialização, impactando aspectos como empatia, tolerância e
            aceitação.
          </p>
          <img
            alt=""
            className=" sm:size-2/4 mx-auto my-2"
            src={imgSaudeTec2}
          />
          <h2 className="text-start font-semibold text-2xl">
            Efeito positivo das tecnologias:
          </h2>
          <p className="text-justify indent-4">
            As tecnologias também podem ser aliadas da saúde mental. Isso porque
            podem ser utilizadas para conscientizar sobre problemas como
            ansiedade e depressão, criar grupos de discussão e de apoio, ou
            através da telemedicina. Silva explica que a tecnologia pode ser
            benéfica, se usada com moderação e cautela. É importante lembrar que
            muitos tratamentos e suporte psicoterapêutico acontecem de forma
            on-line, em serviços pagos ou gratuitos; além de muitos canais de
            informação sobre saúde mental que contribuem positivamente para os
            usuários.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}

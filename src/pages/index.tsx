import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import imgBanner from "@/assets/imgBanner.jpg";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="w-full scroll-smooth">
        <section className="w-full lg:h-[calc(100dvh-4rem)] h-[calc(100dvh/2)] overflow-hidden relative flex items-center ">
          <div className="relative z-10 w-full sm:max-w-[30rem] text-white mx-4 sm:ml-8 backdrop-blur-sm p-2 sm:p-8 flex flex-col">
            <h2 className=" font-extrabold sm:text-4xl text-xl sm:max-w-full">
              Obtenha informações sobre saúde mental.
            </h2>
            <p className=" font-thin sm:font-normal hidden sm:block text-sm">
              Explore nosso site e fique por dentro das últimas novidades sobre
              saúde mental. Oferecemos informações atualizadas e confiáveis para
              ajudar você a entender como as inovações tecnológicas podem
              melhorar seu bem-estar emocional. Sua jornada para uma mente mais
              saudável começa aqui!
            </p>
            <a
              className="bg-green-500 px-4 py-2 w-fit rounded mt-4"
              href="#temas"
            >
              Explorar
            </a>
          </div>
          <img
            alt=""
            className="object-cover size-full absolute top-0 "
            src={imgBanner}
          />
        </section>
        <section
          className="min-h-[calc(100dvh/2)] flex gap-4 justify-center items-center flex-wrap py-2 px-2 sm:py-4"
          id="temas"
        >
          <Card className="w-80 h-[20rem] p-2">
            <CardHeader className="font-bold text-lg">
              Plantas Medicinais
            </CardHeader>
            <CardBody className="text-sm">
              Descubra como ervas medicinais podem beneficiar sua saúde mental!
              Explore os usos e benefícios da erva-de-são-joão, maracujá,
              camomila e mais, mas fique atento aos riscos e cuidados
              necessários. Leia agora para saber mais sobre tratamentos naturais
              e suas implicações.
            </CardBody>
            <CardFooter>
              <Link
                className="text-sm bg-green-500 px-4 py-2 rounded-md text-white "
                to={"/ervas"}
              >
                Saiba mais...
              </Link>
            </CardFooter>
          </Card>
          <Card className="w-80 h-[20rem] p-2">
            <CardHeader className="font-bold text-lg">
              Saude Mental e Tecnologia
            </CardHeader>
            <CardBody className="text-sm">
              Descubra o impacto da tecnologia na saúde mental! Veja como o uso
              excessivo de redes sociais pode causar ansiedade e depressão, mas
              também como a tecnologia pode ser uma aliada através da
              telemedicina e grupos de apoio online. Leia mais para entender o
              equilíbrio necessário.
            </CardBody>
            <CardFooter>
              <Link
                className="text-sm bg-green-500 px-4 py-2 rounded-md text-white "
                to={"/saudeTec"}
              >
                Saiba mais...
              </Link>
            </CardFooter>
          </Card>
          <Card className="w-80 h-[20rem] p-2">
            <CardHeader className="font-bold text-lg">
              Atividade Física e Saúde Mental
            </CardHeader>
            <CardBody className="text-sm">
              Descubra como a atividade física melhora sua saúde mental!
              Exercícios reduzem estresse, ansiedade e depressão, além de
              melhorar sono, autoestima e função cognitiva. Leia mais e comece a
              se movimentar para um bem-estar integral!
            </CardBody>
            <CardFooter>
              <Link
                className="text-sm bg-green-500 px-4 py-2 rounded-md text-white "
                to={"/saudeFisica"}
              >
                Saiba mais...
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-80 p-2 h-[20rem]">
            <CardHeader className="font-bold text-lg">
              Produção Artística x Saúde Mental
            </CardHeader>
            <CardBody className="text-sm">
              Descubra o poder da arte na saúde mental! A arte promove
              autoconhecimento, alívio do estresse e expressão emocional através
              de música, pintura, literatura e mais. Veja como a criação e
              apreciação artística podem melhorar seu bem-estar. Leia agora!
            </CardBody>
            <CardFooter>
              <Link
                className="text-sm bg-green-500 px-4 py-2 rounded-md text-white "
                to={"/saudeProd"}
              >
                Saiba mais...
              </Link>
            </CardFooter>
          </Card>
        </section>
      </section>
    </DefaultLayout>
  );
}

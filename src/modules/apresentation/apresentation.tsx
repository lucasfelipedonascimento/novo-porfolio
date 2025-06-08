import Image from "next/image";
import Lucas from "@/public/lucas.png";

export function Apresentation() {
  return (
    <div className="flex flex-col xl:flex-row gap-4">
      <div className="flex flex-col justify-center mx-auto gap-3 xl:w-1/2 pl-16">
        <h1 className="text-2xl max-w-[650px] font-semibold text-white">
          Olá, sou{" "}
          <span className="text-green-600">desenvolvedor full-stack</span> e
          também <span className="text-green-500">estudo análise de dados</span>
          !
        </h1>

        <p className="text-white max-w-[650px]">
          Sou apaixonado por criar soluções que impactam positivamente a vida
          das pessoas.
        </p>
      </div>

      <div className="xl:w-1/2 mx-auto flex justify-center mt-12">
        <Image src={Lucas} alt="Imagem de Lucas" width={350} height={350} />
      </div>
    </div>
  );
}

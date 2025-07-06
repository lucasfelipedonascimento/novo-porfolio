import Link from "next/link";

export function Experiences() {
  return (
    <div className="mt-6 flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white text-center xl:text-start">
        Experiências
      </h1>

      <ul className="flex flex-col xl:list-disc gap-2 text-sm text-white text-center xl:text-start">
        <li>
          Operador de Academia na{" "}
          <Link
            href="https://www.instagram.com/a3_academia/"
            target="_blank"
            className="hover:underline hover:text-green-600 font-bold"
          >
            A3 Academia
          </Link>{" "}
          (2020 - 2020)
        </li>

        <li>
          Serviço Autônomo de Manutenção de PCs/Notebooks pela{" "}
          <Link
            href="https://www.instagram.com/padilha_tech/"
            target="_blank"
            className="hover:underline hover:text-green-600 font-bold"
          >
            Padilha Tech
          </Link>{" "}
          (2020 - Presente)
        </li>

        <li>
          Desenvolvedor Front-end no{" "}
          <Link
            href="https://www.tempario.com.br/"
            target="_blank"
            className="hover:underline hover:text-green-600 font-bold"
          >
            Tempario
          </Link>{" "}
          (2022 - 2025)
        </li>

        <li>
          Desenvolvimento de projetos{" "}
          <span className="font-bold">pessoais</span> carregados abaixo (2020 -
          Presente)
        </li>
      </ul>
    </div>
  );
}

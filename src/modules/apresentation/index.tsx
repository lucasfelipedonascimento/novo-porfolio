import { Curriculum } from "./components/curriculum";
import { Experiences } from "./components/experiences";
import { Diploma } from "./components/diploma";
import { Photo } from "./components/photo";
import Link from "next/link";
import { Technology } from "../technology";

export function Apresentation({ id }: { id: string }) {
  return (
    <div id={id} className="flex flex-col xl:flex-row gap-4">
      <div className="flex flex-col justify-center mx-auto gap-3 xl:w-1/2 px-16 mt-16 xl:mt-0">
        <h1 className="text-2xl max-w-[650px] font-semibold text-white text-center xl:text-start">
          Olá, me chamo Lucas Felipe,{" "}
          <span className="text-green-600">desenvolvedor full-stack</span>{" "}
          <span className="text-green-600">formado</span> em{" "}
          <span className="text-green-600">ciência da computação</span>!
        </h1>

        <p className="text-white max-w-[650px] text-center xl:text-start">
          Sou apaixonado por criar soluções que impactam positivamente a vida
          das pessoas.
        </p>

        <Diploma />

        <Curriculum />

        <Link
          href="mailto:lucas.fel.dev@gmail.com"
          target="_blank"
          className="text-white text-center xl:text-start hover:text-green-600 underline"
        >
          Email
        </Link>

        <Technology />

        <Experiences />
      </div>

      <Photo />
    </div>
  );
}

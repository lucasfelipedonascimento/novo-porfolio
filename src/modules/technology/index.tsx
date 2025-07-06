import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { RiReactjsLine, RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import { FaNodeJs, FaFigma } from "react-icons/fa6";
import {
  SiExpress,
  SiPostgresql,
  SiRender,
  SiZod,
  SiReacthookform,
  SiCanva,
  SiJest,
  SiVitest,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export function Technology() {
  return (
    <div className="flex flex-col items-center xl:items-start gap-3 mt-6">
      <h1 className="text-md font-semibold text-white text-center xl:text-start">
        Tecnologias
      </h1>

      <div className="grid grid-cols-4 xl:grid-cols-none xl:flex gap-4 xl:gap-3">
        <IoLogoHtml5 size={40} color="orange" />
        <IoLogoCss3 size={40} color="blue" />
        <FaJsSquare size={40} color="yellow" />
        <RiReactjsLine size={40} color="blue" />
        <FaNodeJs size={40} color="green" />
        <SiExpress size={40} color="white" />
        <RiNextjsLine size={40} color="white" />
        <RiTailwindCssLine size={40} color="blue" />
        <TbSql size={40} color="orange" />
        <SiPostgresql size={40} color="blue" />
        <SiRender size={40} color="purple" />
        <SiReacthookform size={40} color="pink" />
        <FaFigma size={40} color="red" />
        <SiZod size={40} color="blue" />
        <SiCanva size={40} color="pink" />
        <VscVscode size={40} color="blue" />
        <SiJest size={40} color="purple" />
        <SiVitest size={40} color="green" />
      </div>
    </div>
  );
}

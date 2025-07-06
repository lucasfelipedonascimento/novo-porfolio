import Image from "next/image";
import Logo from "../../../public/logo-2.png";
import { Desktop } from "./desktop";
import { Mobile } from "./mobile";

export function Header() {
  return (
    <header className="flex bg-black items-center justify-between p-4 text-white border-b border-white fixed top-0 left-0 h-21 z-50 w-full ">
      <Image src={Logo} width={80} height={80} alt="Logo" />

      <Mobile />
      <Desktop />
    </header>
  );
}

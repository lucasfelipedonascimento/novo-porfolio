import Image from "next/image";
import Logo from "../../../public/logo-2.png";
import { Desktop } from "./desktop";
import { Mobile } from "./mobile";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex bg-black items-center justify-between p-4 text-white border-b border-white fixed top-0 left-0 h-21 z-50 w-full ">
      <Link href="/">
        <Image src={Logo} width={80} height={80} alt="Logo" />
      </Link>

      <Mobile />
      <Desktop />
    </header>
  );
}

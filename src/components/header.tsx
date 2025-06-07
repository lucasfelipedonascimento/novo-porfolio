import Image from "next/image";
import Logo from "../public/logo-2.png";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-black text-white">
      <div>
        <Image src={Logo} width={95} height={95} alt="Logo" />
      </div>

      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <span className="text-red-500">#</span> início
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="text-red-500">#</span> sobre
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span className="text-red-500">#</span> projetos
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="text-red-500">#</span> contatos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

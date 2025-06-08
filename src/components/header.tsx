import Image from "next/image";
import Logo from "../public/logo-2.png";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 text-white border-b border-white bg-black">
      <div>
        <Image src={Logo} width={70} height={70} alt="Logo" />
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

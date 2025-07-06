import Link from "next/link";

export function Nav({ onClick }: { onClick?: () => void }) {
  return (
    <nav>
      <ul className="flex flex-col items-center xl:flex-row xl:items-start gap-6 xl:gap-0 mt-8 xl:mt-0 space-x-4">
        <li>
          <Link href="#" onClick={onClick}>
            <span className="text-green-600">#</span> início
          </Link>
        </li>
        <li>
          <Link href="/#about" onClick={onClick}>
            <span className="text-green-600">#</span> sobre mim
          </Link>
        </li>
        <li>
          <Link href="/#certificates" onClick={onClick}>
            <span className="text-green-600">#</span> certificações
          </Link>
        </li>
        <li>
          <Link href="/#projects" onClick={onClick}>
            <span className="text-green-600">#</span> projetos
          </Link>
        </li>
        {/* <li>
          <Link href="#contact" onClick={onClick}>
            <span className="text-green-600">#</span> contatos
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

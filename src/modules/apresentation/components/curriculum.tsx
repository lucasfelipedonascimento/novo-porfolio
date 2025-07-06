import Link from "next/link";

export function Curriculum() {
  return (
    <Link
      href="./documents/currículo-profissional-lucas.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className="text-white max-w-[650px] underline hover:text-green-600 text-center xl:text-start">
        Currículo
      </p>
    </Link>
  );
}

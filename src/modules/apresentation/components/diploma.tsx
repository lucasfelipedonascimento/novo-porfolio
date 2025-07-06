import Link from "next/link";

export function Diploma() {
  return (
    <Link
      href="/documents/diploma.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white max-w-[650px] underline hover:text-green-600 text-center xl:text-start"
    >
      Diploma de Graduação
    </Link>
  );
}

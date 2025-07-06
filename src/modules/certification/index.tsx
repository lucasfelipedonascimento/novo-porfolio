import Link from "next/link";
import { certifications } from "./utils/certifications";

export function Certification({ id }: { id: string }) {
  return (
    <div id={id} className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-white text-center xl:text-start">
        Certificações
      </h1>

      <ul className="flex flex-col gap-4">
        {certifications.map((certification) => {
          return (
            <li
              key={certification.id}
              className="text-white xl:list-disc space-y-2 text-center xl:text-start"
            >
              <Link
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-600 text-base xl:text-lg"
              >
                {certification.title}
              </Link>
              <p className="text-white max-w-[650px] mx-auto xl:mx-0">
                {certification.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

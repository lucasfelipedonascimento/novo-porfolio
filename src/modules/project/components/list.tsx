"use client";

import { useQuery } from "@tanstack/react-query";
import { getRepos } from "../utils/get-repos";
import type { Project } from "../../../../types/Project";
import Link from "next/link";

export function List() {
  const { data, isLoading } = useQuery({
    enabled: true,
    queryKey: ["repos"],
    queryFn: getRepos,
  });

  return (
    <div className="flex flex-col gap-6">
      {isLoading && <p className="text-white">Carregando projetos...</p>}

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
        {data?.map((project: Project) => {
          return (
            <li
              key={project.id}
              className="text-white xl:list-disc space-y-2 text-center xl:text-start"
            >
              <Link
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-green-600 text-base xl:text-lg text-center xl:text-start"
              >
                {project.name}
              </Link>

              <p className="text-white max-w-[300px] mx-auto xl:mx-0">
                {project.description || "Tá sendo atualizado"}
              </p>

              <div className="flex flex-col gap-2">
                <span className="text-gray-400 text-sm text-center xl:text-start">
                  Criação:{" "}
                  {new Date(project.created_at).toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>

                <span className="text-gray-400 text-sm text-center xl:text-start">
                  Última Atualização:{" "}
                  {new Date(project.updated_at).toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

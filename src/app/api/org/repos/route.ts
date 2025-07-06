import "dotenv/config";
import { NextResponse } from "next/server";
import { Project } from "../../../../../types/Project";

const GITHUB_URL = process.env.GITHUB_URL;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET() {
  try {
    const response = await fetch(String(GITHUB_URL), {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Erro ao buscar repositórios do GitHub" },
        { status: response.status }
      );
    }

    const allRepos = await response.json();

    const simplified = allRepos.map((repo: Project) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      language: repo.language,
      created_at: new Date(repo.created_at),
      updated_at: new Date(repo.updated_at),
    }));

    return NextResponse.json(simplified, { status: 200 });
  } catch (error: any) {
    console.error("Erro na API do GitHub:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor", message: error.message },
      { status: 500 }
    );
  }
}

export async function getRepos() {
  const repos = await fetch("/api/org/repos");

  if (!repos.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const data = await repos.json();

  return data;
}

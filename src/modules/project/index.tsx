import { List } from "./components/list";

export function Projects({ id }: { id: string }) {
  return (
    <div id={id} className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold text-white text-center xl:text-start">
        Projetos
      </h1>

      <List />
    </div>
  );
}

import { Nav } from "./nav";

export function Desktop({ className }: { className?: string }) {
  return (
    <div className={`hidden xl:flex ${className}`}>
      <Nav />
    </div>
  );
}

import { Apresentation } from "@/modules/apresentation";
import { Certification } from "@/modules/certification";
import { Projects } from "@/modules/project";

export default function Home() {
  return (
    <div className="pb-8 flex flex-col gap-6 pt-20 xl:pt-40">
      <Apresentation id="about" />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-0 px-16 xl:pr-0 xl:pl-16">
        <Projects id="projects" />
        <Certification id="certificates" />
      </div>
    </div>
  );
}

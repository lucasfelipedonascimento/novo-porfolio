import Image from "next/image";
import Lucas from "../../../../public/lucas.png";

export function Photo() {
  return (
    <div className="xl:w-1/2 flex justify-center mt-16">
      <Image src={Lucas} alt="Imagem de Lucas" width={380} height={300} />
    </div>
  );
}

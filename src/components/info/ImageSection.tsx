import infoImage from "@/assets/info-image.webp";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

function ImageSection() {
  return (
    <section className="w-full h-full">
      <BlurFade delay={1} inView>
        <Image src={infoImage} alt="Infographic" objectFit="cover" />
      </BlurFade>
    </section>
  );
}

export default ImageSection;

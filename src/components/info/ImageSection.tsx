import Image from "next/image";
import React from "react";
import infoImage from "@/assets/info-image.webp";

function ImageSection() {
  return (
    <section className="w-full h-full">
      <div className="w-full h-full relative">
        <Image src={infoImage} alt="Infographic" objectFit="cover" />
      </div>
    </section>
  );
}

export default ImageSection;

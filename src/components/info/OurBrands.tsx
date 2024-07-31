import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";

const brands = [
  { img: "/brands/abstract-circle-logo-icon-free-png.webp" },
  { img: "/brands/abstract-circle-logo-icon-free-png.webp" },
  { img: "/brands/abstract-circle-logo-icon-free-png.webp" },
  { img: "/brands/abstract-circle-logo-icon-free-png.webp" },
  { img: "/brands/abstract-circle-logo-icon-free-png.webp" },
  { img: "/brands/abstract-circle-logo-icon-free-png.webp" },
];

const firstRow = brands.slice(0, brands.length / 2);
const secondRow = brands.slice(brands.length / 2);

const OurBrandsCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-40 h-40 cursor-pointer overflow-hidden rounded-xl border p-1",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        // flexbox centering
        "flex items-center justify-center"
      )}
    >
      <div className="flex items-center justify-center">
        <Image
          className="rounded-full"
          width={1000}
          height={1000}
          alt="Brand Logo"
          src={img}
        />
      </div>
    </figure>
  );
};

export function OurBrands() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter my-10">
          Here are some of the brands we work with:
        </h2>
      </BlurFade>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((brand, index) => (
          <OurBrandsCard key={index} img={brand.img} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((brand, index) => (
          <OurBrandsCard key={index} img={brand.img} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default OurBrands;

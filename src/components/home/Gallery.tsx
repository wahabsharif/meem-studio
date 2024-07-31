"use client";
import { galleryData } from "@/data/galleryData";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import HoverVideoPlayer to enable lazy loading
const HoverVideoPlayer = dynamic(() => import("react-hover-video-player"), {
  ssr: false,
});

// Function to shuffle an array
function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function Gallery() {
  // Shuffle the galleryData array
  const shuffledGalleryData = shuffleArray([...galleryData]);

  return (
    <section className="p-6">
      <BlurFade delay={0.25} inView>
        {/* <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Gallery
        </h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8">
          {shuffledGalleryData.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              {item.type === "image" ? (
                <Image
                  src={`/gallery/${item.src}`}
                  alt={item.title}
                  width={1000}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <HoverVideoPlayer
                  videoSrc={`/gallery/${item.src}`}
                  pausedOverlay={<div></div>}
                  loadingOverlay={<div></div>}
                  className="w-full h-auto object-cover"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white p-4 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-lg">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}

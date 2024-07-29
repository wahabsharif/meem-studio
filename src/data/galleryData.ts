// src/data/galleryData.ts

export interface GalleryItem {
  type: "image" | "video";
  src: string;
  title: string;
  category: string;
}

export const galleryData: GalleryItem[] = [
  {
    type: "image",
    src: "gallery-1.jpg",
    title: "Sample Image 1",
    category: "Category 1",
  },
  //   {
  //     type: "video",
  //     src: "gallery-video-1.mp4",
  //     title: "Sample Video 1",
  //     category: "Category 2",
  //   },
  {
    type: "video",
    src: "gallery-video-2.mp4",
    title: "Sample Video 1",
    category: "Category 2",
  },
  {
    type: "image",
    src: "gallery-1.jpg",
    title: "Sample Image 1",
    category: "Category 1",
  },
];

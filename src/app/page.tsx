import MobileMenu from "@/components/common/MobileMenu";
import NavBar from "@/components/common/NavBar";
import Banner from "@/components/home/Banner";
import { Gallery } from "@/components/home/Gallery";

export default function Home() {
  return (
    <>
      <Banner />
      <NavBar />
      <MobileMenu />
      <Gallery />
    </>
  );
}

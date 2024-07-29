import MobileMenu from "@/components/common/MobileMenu";
import NavBar from "@/components/common/NavBar";
import { Banner } from "@/components/info/Banner";
import ImageSection from "@/components/info/ImageSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <MobileMenu />
      <Banner />
      <ImageSection />
    </>
  );
}

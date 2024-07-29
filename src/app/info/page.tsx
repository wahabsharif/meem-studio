import MobileMenu from "@/components/common/MobileMenu";
import NavBar from "@/components/common/NavBar";
import { Banner } from "@/components/info/Banner";

export default function Home() {
  return (
    <>
      <NavBar />
      <MobileMenu />
      <Banner />
    </>
  );
}

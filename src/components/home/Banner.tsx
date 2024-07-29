import React from "react";
import Image from "next/image";
import styles from "@/styles/HomeBanner.module.css";
import bannerLogo from "@/assets/logo/next.svg";

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <video className={styles.videoBackground} autoPlay loop muted>
        <source src="/videos/banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.bannerLogoContainer}>
        <Image
          src={bannerLogo}
          alt="Banner Logo"
          width={1000}
          height={1000}
          className={styles.bannerLogo}
        />
      </div>
    </div>
  );
};

export default Banner;

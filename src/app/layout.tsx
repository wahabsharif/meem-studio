import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";
import Footer from "@/components/common/Footer";
import GoogleMap from "@/components/common/GoogleMap";

const BodoniModa = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Meem Studio - Blueprints and Architecture",
  description:
    "Meem Studio specializes in creating innovative blueprints and architectural designs that blend functionality with aesthetic appeal. Our approach ensures that every project is meticulously planned and structurally sound, delivering exceptional results that meet both practical needs and creative visions.",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  keywords:
    "Architectural Design, Blueprint Design, Structural Planning, Innovative Architecture, Modern Blueprints, Architectural Studio, Design and Architecture, Building Plans, Professional Architecture, Creative Blueprints, Custom Architectural Design, Interior Architecture, Exterior Design, Sustainable Architecture, Modern Building Plans, Residential Architecture, Commercial Design, Urban Planning, Architectural Engineering, Design Blueprint Studio, Architectural Consulting, Innovative Design Solutions, Custom Building Design, Architectural Drafting, Structural Design Studio, Blueprint Services, Design and Planning, Professional Blueprints, Architecture Experts, Design and Architecture Firm, Advanced Architectural Design, High-Quality Blueprints, Functional Design Solutions, Creative Architecture Studio, Architectural Planning Services, Modern Architectural Solutions, Design and Engineering, Architectural Innovations, Custom Architectural Solutions, Blueprint Development, Architectural Design Studio, Cutting-Edge Design, Professional Architecture Firm, Detailed Building Plans, Expert Blueprints, Modern Design Studio, Comprehensive Architectural Services, Tailored Design Solutions, Architecture and Design Firm, Innovative Building Solutions, Architectural Drafting Services, Strategic Architectural Planning, Unique Blueprints, High-End Architectural Design, Design Excellence, Functional Architecture, Visionary Building Design, Elite Architectural Studio, Architectural Expertise, Modern Blueprint Studio",
  openGraph: {
    title: "Meem Studio - Blueprints and Architecture",
    description:
      "Meem Studio - Innovative blueprints and architectural designs that blend functionality with aesthetic appeal. Explore how we turn creative visions into exceptional, meticulously planned projects.",
    url: "https://www.meemstudio.com",
    siteName: "Meem Studio",
    images: [
      {
        url: "og-image.png",
        width: 1200,
        height: 630,
        alt: "Meem Studio - Blueprints and Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@meemstudio",
    title: "Meem Studio - Blueprints and Architecture",
    description:
      "Meem Studio - Innovative blueprints and architectural designs that blend functionality with aesthetic appeal. Explore how we turn creative visions into exceptional, meticulously planned projects.",
    images: [
      {
        url: "og-image.png",
        width: 1200,
        height: 630,
        alt: "Meem Studio",
      },
      {
        url: "og-image.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={BodoniModa.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main>
              {children}
              <GoogleMap />
              <Footer />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

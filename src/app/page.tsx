import Image from "next/image";

import Hero, { HeroSection2 } from "./components/Hero";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <HeroSection2 />
     
      <Footer />
    </>
  );
}

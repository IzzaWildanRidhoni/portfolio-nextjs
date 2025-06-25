import Features01Page from "@/components/features-01/features-01";
import Hero01 from "@/components/hero-01/hero-01";
import { Hero1 } from "@/components/hero1";
import { Navbar1 } from "@/components/navbar1";

export default function Home() {
  return (
    <>
      <Navbar1 />
      {/* <Hero1
        heading="Your Friendly Fullstack Web Developer "
        description="I design and build full-featured web apps using React, Tailwind, and Laravel. Clean code, modern UI, and great performance — all in one package."
        image={{ src: "coffee.png", alt: "" }}
      /> */}
      <Hero01 />
      <Features01Page />
    </>
  );
}

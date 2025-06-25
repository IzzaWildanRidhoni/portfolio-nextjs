import Features01Page from "@/components/features-01/features-01";
import Hero01 from "@/components/hero-01/hero-01";
import { Hero1 } from "@/components/hero1";
import { Navbar1 } from "@/components/navbar1";
import Timeline from "@/components/timeline-04/timeline-04";

export default function Home() {
  return (
    <>
      <Navbar1 />
      <Hero01 />
      <Features01Page />
      <Timeline />
    </>
  );
}

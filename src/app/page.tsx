import Features01Page from "@/components/features-01/features-01";
import Hero01 from "@/components/hero-01/hero-01";
import Timeline from "@/components/timeline-04/timeline-04";
import Footer from "@/components/footer-04/footer-04";
import Testimonial from "@/components/testimonial-06/testimonial-06";
import Contact from "@/components/contact-03/contact-03";
import Navbar2 from "@/components/navbar-02/navbar-02";

export default function Home() {
  return (
    <>
      <Navbar2 />
      <Hero01 />
      <Features01Page />
      {/* <Timeline /> */}
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

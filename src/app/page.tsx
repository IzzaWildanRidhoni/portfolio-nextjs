import Service from "@/components/features-01/features-01";
import Hero from "@/components/hero-01/hero-01";
import Timeline from "@/components/timeline-04/timeline-04";
import Footer from "@/components/footer-04/footer-04";
import Testimonial from "@/components/testimonial-06/testimonial-06";
import Contact from "@/components/contact-03/contact-03";
import Navbar from "@/components/navbar-02/navbar-02";
import Portfolio from "@/components/features-02/features-02";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Portfolio />
      {/* <Timeline /> */}
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

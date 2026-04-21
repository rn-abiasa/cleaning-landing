import Navbar from "@/components/ui/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import HowItWork from "@/components/sections/howItWork";
import SelectedWork from "@/components/sections/selectedWork";
import Blog from "@/components/sections/blog";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <HowItWork />
        <SelectedWork />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

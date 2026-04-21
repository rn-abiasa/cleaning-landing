"use client";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

function Hero() {
  useScrollReveal();

  return (
    <>
      <section className="bg-[url('/cleaning1.jpeg')] bg-cover bg-center h-[100dvh] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        <div className="relative h-full w-full flex flex-col justify-between p-5 md:px-10 lg:px-20 max-w-7xl mx-auto">
          <div className="mt-24 md:mt-32 lg:mt-40 md:w-2/3 lg:w-1/2 reveal">
            <Badge className="text-white border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm">
              Jasa Cleaning Service Terpercaya
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 leading-tight">
              Ruangan Bersih Berkilau, Hidup Lebih Nyaman
            </h1>
            <Button className="bg-secondary h-12 md:h-14 rounded-full p-1 pr-6 mt-8 md:mt-10 hover:scale-105 transition-transform duration-300">
              <span className="bg-primary h-10 w-10 md:h-12 md:w-12 rounded-full flex justify-center items-center text-white mr-3 md:mr-4">
                <ArrowRight size={20} />
              </span>
              <span className="text-base md:text-lg font-medium">Mulai Sekarang</span>
            </Button>
          </div>
          <div className="mb-10 md:mb-16 md:w-2/3 lg:w-1/2 md:self-end reveal reveal-delay-200">
            <p className="text-base md:text-lg lg:text-xl font-normal text-white/80 leading-relaxed md:text-right">
              Resika menghadirkan layanan pembersihan rumah, pindahan, dan kantor yang menyeluruh. 
              Tim profesional, jadwal fleksibel, dan hasil yang dijamin memuaskan sesuai standar kebersihan tertinggi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

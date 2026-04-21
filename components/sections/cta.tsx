"use client";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

function CTA() {
  useScrollReveal();

  return (
    <>
      <section className="px-5 py-20 md:py-32">
        <div className="max-w-6xl mx-auto bg-primary rounded-3xl overflow-hidden relative reveal">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative px-6 py-16 md:py-24 md:px-16 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-medium text-primary-foreground mb-6 max-w-3xl leading-tight">
              Jangan Biarkan Debu Menumpuk. Jadwalkan Pembersihan Sekarang!
            </h2>
            <p className="text-base md:text-xl font-medium text-primary-foreground/80 mb-10 max-w-2xl">
              Hubungi KlinBersih hari ini untuk mendapatkan estimasi biaya
              gratis. Tim kami siap mengembalikan kilau dan kenyamanan ruangan
              Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button className="bg-secondary text-secondary-foreground h-14 px-8 rounded-full text-base font-semibold hover:bg-secondary/90 hover:scale-105 transition-all">
                Booking via WhatsApp
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground/30 h-14 px-8 rounded-full text-base font-semibold hover:bg-primary-foreground hover:text-primary transition-all"
              >
                <PhoneCall size={20} className="mr-2" />
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;

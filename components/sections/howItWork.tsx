"use client";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

const steps = [
  {
    id: 1,
    name: "Pesan Layanan",
    description: "Pilih jadwal, lokasi, dan jenis layanan yang sesuai dengan kebutuhan Anda secara online.",
  },
  {
    id: 2,
    name: "Tim Kami Datang",
    description: "Tenaga pembersih profesional kami tiba tepat waktu dengan peralatan dan bahan pembersih lengkap.",
  },
  {
    id: 3,
    name: "Nikmati Hasilnya",
    description: "Bersantai dan nikmati ruangan yang bersih, harum, dan tertata rapi seperti baru.",
  },
];

function HowItWork() {
  useScrollReveal();

  return (
    <>
      <section id="how-it-works" className="bg-foreground px-5 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="md:w-2/3 lg:w-1/2 mx-auto reveal">
            <p className="text-sm font-semibold tracking-wider text-white/80 text-center uppercase">
              Cara Kerja
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mt-4 leading-tight">
              3 Langkah Sederhana Menuju Ruangan Bersih
            </h2>
            <p className="text-base font-normal text-white/80 text-center mt-6 leading-relaxed">
              Pesan dalam hitungan menit, dapatkan kepastian layanan, dan nikmati hasil yang memuaskan untuk setiap jenis properti Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mt-16 md:mt-24">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col items-center text-center reveal reveal-delay-${(index + 1) * 100}`}>
                <div className="h-16 w-16 md:h-20 md:w-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-primary">{step.id}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{step.name}</h3>
                <p className="text-base text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWork;

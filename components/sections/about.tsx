"use client";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

const statistics = [
  {
    id: 1,
    name: "Tingkat Kepuasan Pelanggan",
    description:
      "Resika dipercaya karena kualitas yang konsisten, tim yang tepat waktu, dan hasil yang selalu sesuai dengan ekspektasi.",
    stats: "98%",
  },
  {
    id: 2,
    name: "Proyek Selesai",
    description:
      "Lebih dari ribuan rumah, kantor, dan properti telah kami bersihkan dengan standar tertinggi yang profesional.",
    stats: "2,500+",
  },
  {
    id: 3,
    name: "Tenaga Pembersih Ahli",
    description:
      "Tim profesional kami dilatih secara khusus dan dilengkapi dengan peralatan modern untuk hasil maksimal.",
    stats: "50+",
  },
];

function About() {
  useScrollReveal();

  return (
    <>
      <section id="about" className="bg-secondary px-5 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div className="reveal">
              <p className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                Tentang Kami
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                Standar Baru Kebersihan untuk Gaya Hidup Modern
              </h2>
            </div>
            <div className="reveal reveal-delay-100">
              <p className="text-base md:text-lg font-medium text-black/80 leading-relaxed">
                Resika menghadirkan layanan pembersihan rumah, pindahan, dan kantor premium yang dibangun berdasarkan standar baku, tim yang teliti, dan hasil yang konsisten.
              </p>
              <p className="text-base font-normal text-muted-foreground mt-6 leading-relaxed">
                Kami menggabungkan metode profesional dengan pengalaman layanan yang ramah dan menghargai privasi, sehingga ruangan Anda kembali segar, aman, dan tertata rapi seperti baru.
              </p>
              <a href="#" className="inline-flex items-center gap-2 py-3 mt-6 font-medium border-b border-black hover:opacity-70 transition-opacity">
                Pelajari Lebih Lanjut
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-20 md:mt-32">
            {statistics.map((statistic, index) => (
              <div key={statistic.id} className={`reveal reveal-delay-${(index + 1) * 100}`}>
                <p className="text-5xl md:text-6xl font-bold text-primary">{statistic.stats}</p>
                <p className="text-xl font-semibold mt-6">{statistic.name}</p>
                <p className="text-base font-normal text-muted-foreground mt-3 leading-relaxed">
                  {statistic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

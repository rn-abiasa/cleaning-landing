"use client";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

const statistics = [
  {
    id: 1,
    name: "Pelanggan Puas",
    description:
      "Kualitas dan ketepatan waktu yang selalu terjaga dalam setiap layanan kami, memberikan senyum di wajah pelanggan.",
    stats: "99%",
  },
  {
    id: 2,
    name: "Proyek Selesai",
    description:
      "Dipercaya oleh ribuan keluarga dan perusahaan untuk menjaga kebersihan dan kenyamanan lingkungan mereka.",
    stats: "3,000+",
  },
  {
    id: 3,
    name: "Staff Ahli Tersertifikasi",
    description:
      "Tim profesional kami dilatih khusus untuk mengutamakan detail kebersihan tingkat tinggi dan standar higienitas.",
    stats: "100+",
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
                Mengapa Memilih Kami
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mt-4 leading-tight">
                Layanan Kebersihan Ekstra Detail untuk Ketenangan Anda
              </h2>
            </div>
            <div className="reveal reveal-delay-100">
              <p className="text-base md:text-lg font-medium text-black/80 leading-relaxed">
                KlinBersih hadir untuk memberikan standar higienitas tertinggi
                pada properti Anda. Kami berfokus pada hasil yang presisi,
                menggunakan metode pembersihan yang aman bagi keluarga dan hewan
                peliharaan.
              </p>
              <p className="text-base font-normal text-muted-foreground mt-6 leading-relaxed">
                Dedikasi kami adalah menghemat waktu Anda yang berharga.
                Serahkan urusan kebersihan kepada ahlinya, dan nikmati waktu
                bersantai Anda dengan maksimal di ruangan yang bersih berkilau.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 py-3 mt-6 font-medium border-b border-black hover:opacity-70 transition-opacity"
              >
                Pelajari Lebih Lanjut
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-20 md:mt-32">
            {statistics.map((statistic, index) => (
              <div
                key={statistic.id}
                className={`reveal reveal-delay-${(index + 1) * 100}`}
              >
                <p className="text-5xl md:text-6xl font-bold text-primary">
                  {statistic.stats}
                </p>
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

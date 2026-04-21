"use client";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Pembersihan Pasca Renovasi",
    category: "Residensial",
    image: "/cleaning1.jpeg",
  },
  {
    id: 2,
    title: "Deep Cleaning Kantor Modern",
    category: "Komersial",
    image: "/cleaning2.jpeg",
  },
  {
    id: 3,
    title: "Persiapan Unit Apartemen",
    category: "Pindahan",
    image: "/cleaning1.jpeg",
  },
  {
    id: 4,
    title: "Pembersihan Rutin Restoran",
    category: "Komersial",
    image: "/cleaning2.jpeg",
  },
];

function SelectedWork() {
  useScrollReveal();

  return (
    <>
      <section id="portfolio" className="px-5 py-20 md:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16 reveal">
            <div>
              <p className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                Portofolio
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                Karya Pilihan Kami
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 py-2 font-medium border-b border-black hover:opacity-70 transition-opacity whitespace-nowrap">
              Lihat Semua Proyek
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <div key={project.id} className={`group cursor-pointer reveal reveal-delay-${(index % 2 + 1) * 100}`}>
                <div className="overflow-hidden rounded-3xl aspect-[4/3] mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <Badge variant="outline" className="font-medium bg-background text-muted-foreground border-border">{project.category}</Badge>
                  </div>
                  <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                    <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SelectedWork;

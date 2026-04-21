"use client";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

const posts = [
  {
    id: 1,
    title: "Cara Ampuh Menghilangkan Kerak Membandel di Kamar Mandi",
    excerpt:
      "Temukan rahasia membersihkan kerak air dan jamur di kamar mandi dengan bahan yang aman dan mudah didapat.",
    date: "12 Okt 2023",
    category: "Tips & Trik",
    image: "/cleaning2.jpeg",
  },
  {
    id: 2,
    title: "Pentingnya Deep Cleaning Rutin untuk Penderita Alergi",
    excerpt:
      "Debu dan tungau bisa memicu alergi. Pelajari bagaimana deep cleaning membantu menciptakan rumah bebas alergen.",
    date: "28 Sep 2023",
    category: "Kesehatan",
    image: "/cleaning1.jpeg",
  },
  {
    id: 3,
    title: "Kapan Waktu Terbaik Memanggil Jasa Cleaning Service?",
    excerpt:
      "Jadwal padat seringkali membuat rumah terbengkalai. Ketahui tanda-tanda kapan Anda membutuhkan bantuan profesional.",
    date: "15 Sep 2023",
    category: "Panduan",
    image: "/cleaning2.jpeg",
  },
];

function Blog() {
  useScrollReveal();

  return (
    <>
      <section id="blog" className="px-5 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16 reveal">
          <div>
            <p className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              Artikel Terbaru
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mt-4 leading-tight">
              Panduan & Tips Menjaga Kebersihan Hunian
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 py-2 font-medium border-b border-black hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            Baca Semua Artikel
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className={`group cursor-pointer flex flex-col reveal reveal-delay-${(index + 1) * 100}`}
            >
              <div className="overflow-hidden rounded-2xl aspect-[3/2] mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground mb-4">
                <span>{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-border"></span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed flex-grow">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-2 font-semibold text-primary group-hover:gap-3 transition-all">
                Baca Selengkapnya
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blog;

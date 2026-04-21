import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <>
      <nav className="absolute top-0 w-full flex justify-between items-center p-5 md:px-10 lg:px-20 z-50">
        <div>
          <a href="#" className="text-2xl font-bold text-white italic">
            Resika<span className="text-primary">.</span>
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            Tentang
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            Layanan
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            Cara Kerja
          </a>
          <a
            href="#portfolio"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            Portofolio
          </a>
          <a
            href="#blog"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            Artikel
          </a>
        </div>

        <div>
          <Button className="bg-foreground py-3 px-4 md:px-6 rounded-full text-white hover:scale-105 transition-transform duration-300">
            <span>
              <Phone size={18} />
            </span>
            <span className="hidden md:inline-block">Konsultasi Gratis</span>
            <span className="md:hidden">Pesan</span>
          </Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

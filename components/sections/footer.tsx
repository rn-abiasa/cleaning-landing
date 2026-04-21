"use client";
import { MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="bg-foreground text-white pt-20 pb-10 px-5 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <a
                href="#"
                className="text-3xl font-bold italic inline-block mb-6"
              >
                Resika<span className="text-primary">.</span>
              </a>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                Mitra kebersihan terpercaya Anda. Kami hadir untuk menciptakan
                lingkungan yang lebih bersih, sehat, dan nyaman untuk
                ditinggali.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <MapPin size={18} />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <MapPin size={18} />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <MapPin size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Layanan</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    Pembersihan Rumah
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    Deep Cleaning
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    Pembersihan Pindahan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    Pembersihan Kantor
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    Pembersihan Pasca Renovasi
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Perusahaan</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    Cara Kerja
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    Portofolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    Artikel & Tips
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    Karir
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Hubungi Kami</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 text-white/70">
                  <MapPin size={20} className="shrink-0 mt-1" />
                  <span>Jl. Kebersihan No. 123, Jakarta Selatan, 12345</span>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <Phone size={20} className="shrink-0" />
                  <span>+62 812 3456 7890</span>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <Mail size={20} className="shrink-0" />
                  <span>halo@resika.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>
              &copy; {new Date().getFullYear()} Resika. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

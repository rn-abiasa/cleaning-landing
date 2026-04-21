"use client";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

const services = [
  {
    id: 1,
    name: "Daily Cleaning Rumah",
    description:
      "Pembersihan harian menyeluruh mencakup sapu, pel, lap debu, sanitasi kamar mandi, dan area dapur Anda.",
    features: [
      "Pembersihan rutin",
      "Fokus dapur & kamar mandi",
      "Sanitasi menyeluruh",
      "Perawatan lantai & debu",
    ],
    image: "/cleaning2.jpeg",
  },
  {
    id: 2,
    name: "Deep Cleaning Menyeluruh",
    description:
      "Fokus pada noda membandel, kerak, pembersihan furnitur, dan disinfeksi total untuk ruangan yang lebih sehat.",
    features: [
      "Pembersihan noda membandel",
      "Vakum furnitur",
      "Pembersihan jendela",
      "Disinfeksi area",
    ],
    image: "/cleaning1.jpeg", // using existing image
  },
  {
    id: 3,
    name: "Bersih Pindahan / Renovasi",
    description:
      "Pembersihan sisa material konstruksi dan debu tebal, mempersiapkan hunian siap ditempati dengan nyaman.",
    features: [
      "Pembersihan menyeluruh",
      "Penghilang debu konstruksi",
      "Pembersihan kabinet",
      "Siap huni",
    ],
    image: "/cleaning2.jpeg", // using existing image
  },
];

function Services() {
  useScrollReveal();

  return (
    <>
      <section id="services" className="px-5 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="reveal">
          <p className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
            Layanan Kami
          </p>
          <div className="mt-4 md:w-2/3 lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              Layanan Cleaning Service Komprehensif Sesuai Kebutuhan Anda
            </h2>
            <p className="text-base md:text-lg font-normal text-muted-foreground mt-6 leading-relaxed">
              Dari pembersihan rutin hingga deep cleaning, KlinBersih memberikan
              hasil konsisten dengan standar baku yang dirancang khusus untuk
              rumah, apartemen, dan kantor Anda.
            </p>
          </div>
        </div>
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col gap-6 group reveal reveal-delay-${(index + 1) * 100}`}
            >
              <div className="overflow-hidden rounded-3xl aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-bold">{service.name}</h3>
                <p className="text-base font-normal text-muted-foreground mt-3 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {service.features.map((feature) => (
                    <Badge
                      key={feature}
                      variant="secondary"
                      className="font-medium bg-secondary text-foreground"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
                <Button className="h-12 w-12 rounded-full text-white mt-8 group-hover:bg-primary transition-colors">
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;

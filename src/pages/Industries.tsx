import { motion } from "framer-motion";
import defenceImg from "@/assets/defence-testing.jpg";
import aerospaceImg from "@/assets/aerospace-testing.jpg";
import automotiveImg from "@/assets/automotive-testing.jpg";
import electronicsImg from "@/assets/electronics-testing.jpg";
import industrialImg from "@/assets/industrial-testing.jpg";
import heroChamber from "@/assets/hero-chamber.jpg";

const fadeIn = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const industries = [
  {
    title: "Defence",
    image: defenceImg,
    desc: "Military-grade environmental testing for defence electronics, communication systems, weapon platforms, and field equipment. We validate product performance under extreme temperatures, shock, vibration, and humidity conditions as per JSS 55555, MIL-STD-810, and STANAG standards.",
  },
  {
    title: "Aerospace & Avionics",
    image: aerospaceImg,
    desc: "Comprehensive environmental qualification testing for avionics systems, flight computers, radar modules, and satellite components. Our testing ensures compliance with DO-160, RTCA, and ECSS standards for airborne and space-grade electronics.",
  },
  {
    title: "Automotive",
    image: automotiveImg,
    desc: "Environmental and reliability testing for automotive ECUs, sensors, actuators, and infotainment systems. We simulate under-hood temperatures, road vibrations, thermal shock, and humidity cycling per AEC-Q standards and OEM specifications.",
  },
  {
    title: "Electronics Manufacturing",
    image: electronicsImg,
    desc: "Accelerated life testing and environmental stress screening for consumer electronics, PCB assemblies, connectors, and semiconductor packages. Our testing identifies early failures and validates product reliability before market launch.",
  },
  {
    title: "Industrial Equipment",
    image: industrialImg,
    desc: "Environmental qualification testing for industrial control systems, power electronics, switchgear, and heavy machinery components. We validate product performance under extreme operating conditions to ensure long-term field reliability.",
  },
];

const Industries = () => (
  <div>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[350px] flex items-center">
      <div className="absolute inset-0">
        <img src={heroChamber} alt="Industries" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 {...fadeIn} className="font-display font-bold text-4xl md:text-5xl text-primary-foreground">
          Industries We Serve
        </motion.h1>
        <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-primary-foreground/70 text-lg mt-4 max-w-xl">
          Delivering precision testing across critical sectors.
        </motion.p>
      </div>
    </section>

    {/* Industries Grid */}
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            {...fadeIn}
            transition={{ delay: i * 0.1 }}
            className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "" : ""}`}
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <img src={ind.image} alt={ind.title} className="rounded-xl shadow-lg w-full h-72 object-cover" />
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <h3 className="font-display font-bold text-2xl text-primary mb-4">{ind.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{ind.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Industries;

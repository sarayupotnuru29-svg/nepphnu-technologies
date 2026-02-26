import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import vibrationImg from "@/assets/vibration-testing.jpg";
import shockImg from "@/assets/shock-testing.jpg";
import lowTempImg from "@/assets/low-temp-chamber.jpg";
import highTempImg from "@/assets/high-temp-chamber.jpg";
import humidityImg from "@/assets/humidity-chamber.jpg";
import thermalShockImg from "@/assets/thermal-shock.jpg";
import labInterior from "@/assets/lab-interior.jpg";
import heroChamber from "@/assets/hero-chamber.jpg";

const fadeIn = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

interface ServiceSectionProps {
  id: string;
  title: string;
  image: string;
  description: string;
  reverse?: boolean;
}

const ServiceSection = ({ id, title, image, description, reverse }: ServiceSectionProps) => (
  <div id={id} className="scroll-mt-24 py-12 md:py-16">
    <div className={`grid md:grid-cols-2 gap-10 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
      <motion.div {...fadeIn} className={reverse ? "md:order-2" : ""}>
        <img src={image} alt={title} className="rounded-xl shadow-lg w-full h-72 object-cover" />
      </motion.div>
      <motion.div {...fadeIn} transition={{ delay: 0.2 }} className={reverse ? "md:order-1" : ""}>
        <h3 className="font-display font-bold text-2xl text-primary mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </motion.div>
    </div>
  </div>
);

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [hash]);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroChamber} alt="Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 {...fadeIn} className="font-display font-bold text-4xl md:text-5xl text-primary-foreground">
            Our Services
          </motion.h1>
          <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-primary-foreground/70 text-lg mt-4 max-w-xl">
            Comprehensive environmental and reliability testing solutions.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dynamic Testing */}
        <section className="py-12">
          <div className="text-center mb-8">
            <h2 className="section-heading">Dynamic Testing</h2>
            <div className="heading-line" />
          </div>

          <ServiceSection
            id="vibration"
            title="Sine & Random Vibration Testing"
            image={vibrationImg}
            description="Our electrodynamic vibration systems simulate real-world mechanical stresses including sine sweep, random vibration, and mixed-mode profiles. Testing is performed per MIL-STD-810, IEC 60068, and IS 9000 standards to validate structural integrity and operational reliability of components and assemblies under dynamic loading conditions."
          />
          <ServiceSection
            id="shock"
            title="Shock Testing"
            image={shockImg}
            description="We perform half-sine, sawtooth, and trapezoidal shock pulse testing to simulate handling drops, transportation impacts, and operational shock events. Our shock test systems are capable of generating high-G pulses to evaluate product ruggedness and packaging effectiveness for defence and industrial applications."
            reverse
          />
        </section>

        {/* Environmental Testing */}
        <section className="py-12">
          <div className="text-center mb-8">
            <h2 className="section-heading">Environmental Testing</h2>
            <div className="heading-line" />
          </div>

          <ServiceSection
            id="low-temp"
            title="Low Temperature Testing (up to -70°C)"
            image={lowTempImg}
            description="Our low temperature chambers simulate extreme cold environments down to -70°C to evaluate material brittleness, seal integrity, lubricant performance, and electronic component functionality under arctic and high-altitude conditions. Testing conforms to MIL-STD-810 and IEC 60068-2-1 standards."
          />
          <ServiceSection
            id="high-temp"
            title="High Temperature Testing (up to +180°C)"
            image={highTempImg}
            description="High temperature exposure testing validates product performance at elevated temperatures up to +180°C. We assess thermal aging, material degradation, component derating, and operational limits for electronics, polymers, and mechanical assemblies used in harsh thermal environments."
            reverse
          />
          <ServiceSection
            id="humidity"
            title="Humidity Testing (up to 98% RH)"
            image={humidityImg}
            description="Our humidity chambers create controlled moisture environments up to 98% relative humidity to evaluate corrosion resistance, insulation integrity, and material absorption characteristics. Testing follows IEC 60068-2-78 and MIL-STD-810 procedures."
          />
          <ServiceSection
            id="thermal-cycling"
            title="Thermal Cycling (10°C/min)"
            image={labInterior}
            description="Thermal cycling tests subject products to rapid temperature transitions at rates up to 10°C/min between extreme hot and cold conditions. This accelerated stress testing reveals solder joint fatigue, coefficient of thermal expansion mismatches, and seal failures in electronic assemblies."
            reverse
          />
          <ServiceSection
            id="damp-heat"
            title="Damp Heat Test"
            image={humidityImg}
            description="Steady-state damp heat testing exposes products to sustained high temperature and humidity conditions to accelerate corrosion, fungal growth, and insulation degradation. This test is critical for products deployed in tropical and coastal environments."
          />
          <ServiceSection
            id="thermal-shock"
            title="Thermal Shock"
            image={thermalShockImg}
            description="Our thermal shock chambers transfer products between extreme hot and cold zones within seconds, creating severe thermal stress. This rapid transition testing identifies material cracking, delamination, and component failures that occur under sudden temperature changes in operational environments."
            reverse
          />
          <ServiceSection
            id="tropical-exposure"
            title="Tropical Exposure"
            image={labInterior}
            description="Tropical exposure testing simulates the combined effects of high temperature, high humidity, and solar radiation found in tropical climates. This comprehensive environmental simulation validates product reliability for deployment in equatorial and monsoon regions."
          />
        </section>
      </div>
    </div>
  );
};

export default Services;

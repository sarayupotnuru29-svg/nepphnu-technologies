import { motion } from "framer-motion";
import { Target, Eye, Building2 } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import labInterior from "@/assets/lab-interior.jpg";

const fadeIn = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const About = () => (
  <div>
    {/* Hero Banner */}
    <section className="relative h-[50vh] min-h-[350px] flex items-center">
      <div className="absolute inset-0">
        <img src={aboutTeam} alt="Our Team" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 {...fadeIn} className="font-display font-bold text-4xl md:text-5xl text-primary-foreground">
          About Us
        </motion.h1>
        <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-primary-foreground/70 text-lg mt-4 max-w-xl">
          Precision, reliability, and engineering excellence since inception.
        </motion.p>
      </div>
    </section>

    {/* Who We Are */}
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <h2 className="section-heading text-left mb-4">Who We Are</h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              NEPPHNU TECHNOLOGIES PVT. LTD. is an independent environmental and reliability testing laboratory based in Hyderabad, India. We specialize in providing controlled environmental simulation and reliability testing services for defence, aerospace, automotive, electronics, and industrial sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our state-of-the-art laboratory is equipped with advanced test chambers and precision instruments to simulate extreme environmental conditions, ensuring products meet the highest standards of quality and durability.
            </p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <img src={labInterior} alt="Lab Interior" className="rounded-xl shadow-xl w-full" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Mission / Vision / Infrastructure */}
    <section className="py-16 md:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "To deliver accurate, reliable, and timely environmental testing solutions that help manufacturers validate product performance under real-world stress conditions, ensuring safety and compliance across industries.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              desc: "To become a leading independent environmental testing laboratory in India, recognized for precision, integrity, and innovation in reliability testing services.",
            },
            {
              icon: Building2,
              title: "Our Infrastructure",
              desc: "Our facility houses state-of-the-art environmental chambers, vibration systems, thermal shock units, and humidity chambers capable of simulating the most demanding operational environments.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-xl p-8 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;

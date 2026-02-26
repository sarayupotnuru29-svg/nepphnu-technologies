import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
}

const IndustryCard = ({ icon: Icon, title }: IndustryCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    className="flex flex-col items-center gap-3 p-6"
  >
    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
      <Icon className="w-8 h-8 text-accent" />
    </div>
    <span className="text-primary-foreground font-display font-semibold text-sm text-center">{title}</span>
  </motion.div>
);

export default IndustryCard;

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const LiquidGlassCard = ({ children, className, hover = true }: LiquidGlassCardProps) => {
  return (
    <motion.div
      className={cn(
        "liquid-glass rounded-3xl overflow-hidden",
        hover && "cursor-pointer",
        className
      )}
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default LiquidGlassCard;

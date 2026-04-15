import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram } from "lucide-react";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import PageTransition from "@/components/PageTransition";
import spiff1 from "@/assets/spiff-1.jpeg";
import chromakopia1 from "@/assets/chromakopia-1.jpeg";
import cn1 from "@/assets/cn-1.jpeg";
import cn2 from "@/assets/cn-2.jpeg";
import uno3 from "@/assets/uno-3.jpeg";

const shopItems = [
  { id: 1, src: spiff1, title: "Spaceman Spiff", price: 250, size: '48" × 26"', available: true },
  { id: 2, src: chromakopia1, title: "Chromakopia", price: 200, size: '60" × 8"', available: true },
  { id: 3, src: cn2, secondarySrc: cn1, title: "Cartoon Network", price: 100, size: '23" × 11"', available: true },
  { id: 4, src: uno3, title: "Uno +4", price: 250, size: '38" × 22"', available: true },
];

const Shop = () => {
  const [selected, setSelected] = useState<typeof shopItems[0] | null>(null);

  return (
    <PageTransition>
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
            Shop
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Each rug is handmade to order. DM us on Instagram to purchase, or find us at local vending events in Houston.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <LiquidGlassCard className="p-3" hover>
                <div
                  className="cursor-pointer"
                  onClick={() => setSelected(item)}
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-square mb-4">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {!item.available && (
                      <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                        <span className="liquid-glass-strong px-4 py-2 rounded-xl font-medium text-foreground text-sm">
                          Sold Out
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="px-2 pb-2">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-primary font-bold text-lg">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.size}</p>
                  </div>
                </div>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </div>

        {/* Quick View Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-foreground/30 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="liquid-glass-strong rounded-3xl p-4 max-w-lg w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end mb-2">
                  <button
                    onClick={() => setSelected(null)}
                    className="w-8 h-8 rounded-full liquid-glass flex items-center justify-center text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square mb-4">
                  <img
                    src={selected.src}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {'secondarySrc' in selected && selected.secondarySrc && (
                  <div className="rounded-2xl overflow-hidden aspect-square mb-4">
                    <img
                      src={selected.secondarySrc}
                      alt={`${selected.title} — alternate view`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="px-2 pb-2">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-1">
                    {selected.title}
                  </h2>
                  <p className="text-muted-foreground mb-3">Size: {selected.size}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-2xl">
                      ${selected.price}
                    </span>
                    <a
                      href="https://www.instagram.com/cozycreations412/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liquid-glass-strong px-6 py-3 rounded-xl font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      <Instagram className="w-4 h-4" /> DM to Order
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </PageTransition>
  );
};

export default Shop;

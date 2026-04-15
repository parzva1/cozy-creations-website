import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import PageTransition from "@/components/PageTransition";
import spiff1 from "@/assets/spiff-1.jpeg";
import chromakopia1 from "@/assets/chromakopia-1.jpeg";
import chromakopia2 from "@/assets/chromakopia-2.jpeg";
import cn1 from "@/assets/cn-1.jpeg";
import cn2 from "@/assets/cn-2.jpeg";
import uno1 from "@/assets/uno-1.png";
import uno2 from "@/assets/uno-2.jpeg";
import uno3 from "@/assets/uno-3.jpeg";

const galleryItems = [
  { src: spiff1, title: "Spaceman Spiff", category: "Custom" },
  { src: chromakopia1, title: "Chromakopia", category: "Pop Culture" },
  { src: chromakopia2, title: "Chromakopia (alt)", category: "Pop Culture" },
  { src: cn2, title: "Cartoon Network", category: "Pop Culture" },
  { src: cn1, title: "Cartoon Network (alt)", category: "Pop Culture" },
  { src: uno3, title: "Uno +4", category: "Pop Culture" },
  { src: uno2, title: "Uno +4 (alt)", category: "Pop Culture" },
  { src: uno1, title: "Uno +4 (lifestyle)", category: "Pop Culture" },
];

const categories = ["All", "Anime", "Sports", "Pop Culture", "Custom"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <PageTransition>
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
            Gallery
          </h1>
          <p className="text-muted-foreground text-lg">Browse our past creations</p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "liquid-glass-strong text-primary"
                  : "liquid-glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-ish Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.title}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid"
              >
                <LiquidGlassCard className="p-2.5">
                  <div
                    className="rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => setLightbox(item.src)}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-2 py-3">
                    <h3 className="font-display font-bold text-foreground">{item.title}</h3>
                    <span className="text-xs text-muted-foreground">{item.category}</span>
                  </div>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-foreground/40 backdrop-blur-md"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                className="relative max-w-3xl max-h-[85vh] w-full"
              >
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full liquid-glass-strong flex items-center justify-center text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="liquid-glass-strong rounded-3xl p-3">
                  <img
                    src={lightbox}
                    alt="Full view"
                    className="w-full h-auto rounded-2xl object-contain max-h-[75vh]"
                  />
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

export default Gallery;

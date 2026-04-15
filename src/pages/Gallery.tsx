import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import PageTransition from "@/components/PageTransition";
import { rugs } from "@/data/rugs";

const categories = ["All", ...Array.from(new Set(rugs.map((r) => r.category)))];

type LightboxState = { slug: string; photoIndex: number };

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const filtered =
    filter === "All" ? rugs : rugs.filter((r) => r.category === filter);

  const lightboxRug = lightbox ? rugs.find((r) => r.slug === lightbox.slug) ?? null : null;

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goNext = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return null;
      const rug = rugs.find((r) => r.slug === prev.slug);
      if (!rug) return null;
      return { ...prev, photoIndex: (prev.photoIndex + 1) % rug.images.length };
    });
  }, []);

  const goPrev = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return null;
      const rug = rugs.find((r) => r.slug === prev.slug);
      if (!rug) return null;
      return {
        ...prev,
        photoIndex: (prev.photoIndex - 1 + rug.images.length) % rug.images.length,
      };
    });
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, goNext, goPrev, closeLightbox]);

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

          {/* Grid — stable keys prevent blink on filter change */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((rug) => (
                <motion.div
                  key={rug.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <LiquidGlassCard className="p-2.5">
                    <div
                      className="rounded-2xl overflow-hidden cursor-pointer"
                      onClick={() =>
                        setLightbox({ slug: rug.slug, photoIndex: 0 })
                      }
                    >
                      <img
                        src={rug.images[0]}
                        alt={rug.title}
                        className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="px-2 py-3 flex items-center justify-between">
                      <div>
                        <h3 className="font-display font-bold text-foreground">
                          {rug.title}
                        </h3>
                        <span className="text-xs text-muted-foreground">
                          {rug.category}
                        </span>
                      </div>
                      {rug.images.length > 1 && (
                        <span className="text-xs text-muted-foreground liquid-glass px-2 py-1 rounded-lg">
                          {rug.images.length} photos
                        </span>
                      )}
                    </div>
                  </LiquidGlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Lightbox */}
          <AnimatePresence>
            {lightbox && lightboxRug && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-foreground/40 backdrop-blur-md"
                onClick={closeLightbox}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative max-w-3xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close */}
                  <button
                    onClick={closeLightbox}
                    className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full liquid-glass-strong flex items-center justify-center text-foreground hover:text-primary transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="liquid-glass-strong rounded-3xl p-3">
                    {/* Photo counter */}
                    {lightboxRug.images.length > 1 && (
                      <p className="text-center text-xs text-muted-foreground mb-2">
                        {lightbox.photoIndex + 1} / {lightboxRug.images.length}
                      </p>
                    )}

                    {/* Main image with crossfade */}
                    <div className="relative rounded-2xl overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={lightbox.photoIndex}
                          src={lightboxRug.images[lightbox.photoIndex]}
                          alt={`${lightboxRug.title} — photo ${lightbox.photoIndex + 1}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-full h-auto rounded-2xl object-contain max-h-[70vh]"
                        />
                      </AnimatePresence>
                    </div>

                    {/* Title + arrows */}
                    <div className="flex items-center justify-between mt-3 px-1">
                      <p className="font-display font-bold text-foreground">
                        {lightboxRug.title}
                      </p>
                      {lightboxRug.images.length > 1 && (
                        <div className="flex gap-2">
                          <button
                            onClick={goPrev}
                            className="w-9 h-9 rounded-full liquid-glass flex items-center justify-center text-foreground hover:text-primary transition-colors"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={goNext}
                            className="w-9 h-9 rounded-full liquid-glass flex items-center justify-center text-foreground hover:text-primary transition-colors"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      )}
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

export default Gallery;

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, ArrowLeft } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { rugs } from "@/data/rugs";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const rug = rugs.find((r) => r.slug === slug);
  const [activePhoto, setActivePhoto] = useState(0);

  if (!rug) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold text-foreground mb-4">
              Rug not found
            </h1>
            <Link to="/shop" className="text-primary hover:underline">
              Back to Shop
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Main photo + thumbnail strip */}
            <div>
              <motion.div
                key={activePhoto}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="liquid-glass rounded-3xl p-3 mb-4"
              >
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={rug.images[activePhoto]}
                    alt={`${rug.title} — photo ${activePhoto + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {rug.images.length > 1 && (
                <div className="flex gap-3 flex-wrap">
                  {rug.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhoto(i)}
                      className={`rounded-xl overflow-hidden w-20 h-20 flex-shrink-0 transition-all duration-300 ${
                        activePhoto === i
                          ? "ring-2 ring-primary ring-offset-2 ring-offset-background opacity-100"
                          : "opacity-50 hover:opacity-80"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${rug.title} view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="pt-2"
            >
              {!rug.available && (
                <span className="inline-block liquid-glass px-4 py-1.5 rounded-xl text-sm font-medium text-muted-foreground mb-5">
                  Sold Out
                </span>
              )}

              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
                {rug.title}
              </h1>

              <p className="text-3xl font-bold text-primary mb-5">${rug.price}</p>

              <p className="text-muted-foreground mb-6">
                <span className="font-medium text-foreground">Size:</span>{" "}
                {rug.size}
              </p>

              <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                {rug.description}
              </p>

              {rug.available ? (
                <a
                  href="https://www.instagram.com/cozycreations412/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass-strong px-8 py-4 rounded-2xl font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-3 text-base"
                >
                  <Instagram className="w-5 h-5" />
                  DM to Order
                </a>
              ) : (
                <span className="liquid-glass px-8 py-4 rounded-2xl font-medium text-muted-foreground inline-block">
                  Currently Unavailable
                </span>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProductDetail;

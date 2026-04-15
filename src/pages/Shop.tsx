import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import PageTransition from "@/components/PageTransition";
import { rugs } from "@/data/rugs";

const Shop = () => {
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
              Each rug is handmade to order. DM us on Instagram to purchase, or
              find us at local vending events in Houston.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rugs.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/shop/${item.slug}`} className="block h-full">
                  <LiquidGlassCard className="p-3 h-full" hover>
                    <div className="relative rounded-2xl overflow-hidden aspect-square mb-4">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
                  </LiquidGlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Shop;

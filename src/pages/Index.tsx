import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import PageTransition from "@/components/PageTransition";
import spiff1 from "@/assets/spiff-1.jpeg";
import chromakopia1 from "@/assets/chromakopia-1.jpeg";
import cn2 from "@/assets/cn-2.jpeg";
import uno3 from "@/assets/uno-3.jpeg";
import uno1 from "@/assets/uno-1.png";
import heroBg from "@/assets/hero-bg.jpg";
import cozyLogo from "@/assets/cozy-logo.png";

const featuredRugs = [
  { src: spiff1, title: "Spaceman Spiff", desc: 'Die cut · 48" × 26" · Custom' },
  { src: chromakopia1, title: "Chromakopia", desc: 'Die cut · 60" × 8" · Pop Culture' },
  { src: cn2, title: "Cartoon Network", desc: '23" × 11" · Pop Culture' },
  { src: uno3, title: "Uno +4", desc: '38" × 22" · Pop Culture' },
  { src: uno1, title: "Uno +4 Lifestyle", desc: '38" × 22" · Pop Culture' },
];

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <PageTransition>
      <div>
        {/* Hero Section with Parallax */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ backgroundImage: `url(${heroBg})`, y: bgY }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />

          <motion.div
            style={{ y: textY, opacity }}
            className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={cozyLogo}
                alt="Cozy Creations Logo"
                className="h-24 md:h-48 w-auto mx-auto mb-6 drop-shadow-2xl"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4"
            >
              Cozy Creations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Where nostalgia meets craft. Tufted rugs inspired by the art, characters, and culture
              that shaped us — designed with a modern eye, made by hand.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/shop"
                className="liquid-glass-strong px-8 py-4 rounded-2xl font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-2 justify-center"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/custom-order"
                className="liquid-glass px-8 py-4 rounded-2xl font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 justify-center"
              >
                Custom Order
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Rugs */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Featured Pieces
              </h2>
              <p className="text-muted-foreground text-lg">Our most loved creations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <LiquidGlassCard className="p-3">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
                  <img
                    src={featuredRugs[0].src}
                    alt={featuredRugs[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-display font-bold text-primary-foreground">
                      {featuredRugs[0].title}
                    </h3>
                    <p className="text-primary-foreground/80">{featuredRugs[0].desc}</p>
                  </div>
                </div>
              </LiquidGlassCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredRugs.slice(1).map((rug, i) => (
                <motion.div
                  key={rug.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <LiquidGlassCard className="p-2.5">
                    <div className="relative rounded-2xl overflow-hidden aspect-square">
                      <img
                        src={rug.src}
                        alt={rug.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-lg font-display font-bold text-primary-foreground">
                          {rug.title}
                        </h3>
                        <p className="text-sm text-primary-foreground/80">{rug.desc}</p>
                      </div>
                    </div>
                  </LiquidGlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Snippet */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <LiquidGlassCard hover={false} className="p-6 md:p-16">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Made with Love in Houston
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                  There's something about the art we grew up with — the cartoons, the album covers,
                  the characters that lived rent-free in our heads — that never really leaves us.
                  Cozy Creations is about honoring that feeling. Each rug is designed with the help of
                  modern tools and brought to life by hand, one loop at a time. Familiar feeling, fresh medium.
                </p>
                <Link
                  to="/faq"
                  className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                >
                  Learn more about our process <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </LiquidGlassCard>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;

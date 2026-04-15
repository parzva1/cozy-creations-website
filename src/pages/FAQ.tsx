import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import PageTransition from "@/components/PageTransition";

const faqSections = [
  {
    title: "About Rug Tufting",
    items: [
      {
        q: "What is rug tufting?",
        a: "Rug tufting is a craft where yarn is pushed through a fabric (called monks cloth or tufting cloth) using a tufting gun or by hand. It creates thick, plush rugs with custom designs, colors, and shapes. Each rug is truly one of a kind!",
      },
      {
        q: "What materials do you use?",
        a: "We use premium acrylic and wool-blend yarns that are soft, durable, and vibrant. The backing is finished with felt and non-slip latex to keep your rug in place.",
      },
      {
        q: "Can I request a custom design?",
        a: "Absolutely! Custom orders are our specialty. Send us your idea — a logo, character, pattern, or even a photo — and we'll turn it into a cozy tufted rug. DM us on Instagram to get started!",
      },
      {
        q: "How long does it take to make a rug?",
        a: "Depending on size and complexity, most rugs take 1–3 weeks to complete. Custom orders may take a bit longer. We'll keep you updated every step of the way.",
      },
    ],
  },
  {
    title: "Care & Cleaning",
    items: [
      {
        q: "How do I clean my tufted rug?",
        a: "For regular maintenance, vacuum gently on a low setting without the beater bar. For spot cleaning, dab (don't rub!) with a damp cloth and mild soap. Avoid soaking the rug.",
      },
      {
        q: "Can I put it in the washing machine?",
        a: "We do not recommend machine washing tufted rugs as it can damage the backing and loosen the yarn. Spot cleaning or professional cleaning is the way to go.",
      },
      {
        q: "How do I prevent shedding?",
        a: "Some light shedding is normal for new tufted rugs, especially with cut-pile designs. It usually decreases after the first few weeks. Gentle vacuuming helps speed up the process.",
      },
      {
        q: "Can I use it outdoors?",
        a: "Tufted rugs are designed for indoor use only. Moisture and direct sunlight can damage the yarn and backing over time.",
      },
    ],
  },
  {
    title: "Orders & Shipping",
    items: [
      {
        q: "How do I place an order?",
        a: "DM us on Instagram @cozycreations412 or reach out via email. We'll discuss your design, size, and budget, then get started on your custom piece!",
      },
      {
        q: "Do you ship nationwide?",
        a: "Yes! We ship throughout the US. Shipping costs depend on the rug size and your location. Local pickup is also available in the Houston area.",
      },
      {
        q: "What's your return policy?",
        a: "Since each rug is custom-made, we don't accept returns. However, we work closely with you throughout the process to make sure you love the final product!",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <PageTransition>
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
            FAQ
          </h1>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our rugs
          </p>
        </motion.div>

        <div className="space-y-10">
          {faqSections.map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: si * 0.15 }}
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                {section.title}
              </h2>
              <LiquidGlassCard hover={false} className="p-4 md:p-6">
                <Accordion type="single" collapsible className="w-full">
                  {section.items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`${si}-${i}`}
                      className="border-border/50"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-4">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default FAQ;

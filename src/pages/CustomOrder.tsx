import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import LiquidGlassCard from "@/components/LiquidGlassCard";
import PageTransition from "@/components/PageTransition";

const CustomOrder = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    size: "",
    shape: "round",
    colors: "",
    description: "",
    budget: "",
    referenceImage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace YOUR_FORMSPREE_ID below with your actual Formspree form ID
    // Sign up free at formspree.io, create a form, and paste the ID here
    const response = await fetch("https://script.google.com/macros/s/AKfycby040Azk_4VVFiK1pOcQiaC0S8ae3by1rpzEci9eaBwRZwetxop5XOlWQB97CAUD-oa/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (response.ok) {
      setSubmitted(true);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
              Custom Order Form
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Dream it, we'll tuft it. Tell us about your perfect rug and we'll bring it to life.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <LiquidGlassCard hover={false} className="p-12 text-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                  Request Received!
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We'll review your custom rug request and get back to you within 24–48 hours.
                  Check your email for updates!
                </p>
              </LiquidGlassCard>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <LiquidGlassCard hover={false} className="p-6 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name *</label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl liquid-glass border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl liquid-glass border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(optional)"
                        className="w-full px-4 py-3 rounded-xl liquid-glass border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Instagram Handle</label>
                      <input
                        name="instagram"
                        value={form.instagram}
                        onChange={handleChange}
                        placeholder="@yourhandle (optional)"
                        className="w-full px-4 py-3 rounded-xl liquid-glass border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Budget Range</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl liquid-glass border-none text-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-transparent"
                      >
                        <option value="">Select a range</option>
                        <option value="under-100">Under $100</option>
                        <option value="100-200">$100 – $200</option>
                        <option value="200-350">$200 – $350</option>
                        <option value="350-500">$350 – $500</option>
                        <option value="500+">$500+</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Desired Size</label>
                      <input
                        name="size"
                        value={form.size}
                        onChange={handleChange}
                        placeholder={'e.g. 24" round, 3\' x 5\''}
                        className="w-full px-4 py-3 rounded-xl liquid-glass border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Shape</label>
                      <select
                        name="shape"
                        value={form.shape}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl liquid-glass border-none text-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-transparent"
                      >
                        <option value="round">Round</option>
                        <option value="rectangle">Rectangle</option>
                        <option value="square">Square</option>
                        <option value="die-cut">Die Cut</option>
                        <option value="custom">Custom Shape</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Preferred Colors</label>
                    <input
                      name="colors"
                      value={form.colors}
                      onChange={handleChange}
                      placeholder="e.g. terracotta, cream, sky blue"
                      className="w-full px-4 py-3 rounded-xl liquid-glass border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Describe Your Custom Rug
                    </label>
                    <textarea
                      name="description"
                      required
                      rows={4}
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Tell us about the design, pattern, vibe, or inspiration for your rug..."
                      className="w-full px-4 py-3 rounded-xl liquid-glass border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-transparent resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Reference Image
                    </label>
                    <input
                      name="referenceImage"
                      value={form.referenceImage}
                      onChange={handleChange}
                      placeholder="Paste a link to an inspo image (optional)"
                      className="w-full px-4 py-3 rounded-xl liquid-glass border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring bg-transparent"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full liquid-glass-strong px-8 py-4 rounded-2xl font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-2 justify-center text-lg"
                  >
                    <Send className="w-5 h-5" /> Submit Request
                  </motion.button>
                </form>
              </LiquidGlassCard>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default CustomOrder;

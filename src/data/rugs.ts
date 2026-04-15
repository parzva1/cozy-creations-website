import spiff1 from "@/assets/spiff-1.jpeg";
import chromakopia1 from "@/assets/chromakopia-1.jpeg";
import chromakopia2 from "@/assets/chromakopia-2.jpeg";
import cn1 from "@/assets/cn-1.jpeg";
import cn2 from "@/assets/cn-2.jpeg";
import uno1 from "@/assets/uno-1.png";
import uno2 from "@/assets/uno-2.jpeg";
import uno3 from "@/assets/uno-3.jpeg";

export type Rug = {
  id: number;
  slug: string;
  title: string;
  price: number;
  size: string;
  available: boolean;
  category: string;
  description: string;
  images: string[];
};

export const rugs: Rug[] = [
  {
    id: 1,
    slug: "spaceman-spiff",
    title: "Spaceman Spiff",
    price: 250,
    size: '48" × 26"',
    available: true,
    category: "Custom",
    description:
      "Calvin's rogue space explorer, immortalized in fiber. A die-cut tufted silhouette hand-shaped to match Spiff's iconic form — the kind of piece that hits differently if you grew up with the Sunday funnies.",
    images: [spiff1],
  },
  {
    id: 2,
    slug: "chromakopia",
    title: "Chromakopia",
    price: 200,
    size: '60" × 8"',
    available: true,
    category: "Pop Culture",
    description:
      "Tyler's Chromakopia era, woven into the floor. A long-format runner that captures the album's raw energy in fiber. For the real ones who need their space to say something.",
    images: [chromakopia1, chromakopia2],
  },
  {
    id: 3,
    slug: "cartoon-network",
    title: "Cartoon Network",
    price: 100,
    size: '23" × 11"',
    available: true,
    category: "Pop Culture",
    description:
      "Old-school Cartoon Network in rug form. Checkerboard nostalgia, two-tone and iconic — this one takes you straight back to Saturday mornings and staying up past bedtime.",
    images: [cn2, cn1],
  },
  {
    id: 4,
    slug: "uno-plus-4",
    title: "Uno +4",
    price: 250,
    size: '38" × 22"',
    available: true,
    category: "Pop Culture",
    description:
      "The card that ended friendships, now a tufted rug. Bold colors, clean lines, maximum chaos. It's iconic, it's ruthless, and it belongs on your floor.",
    images: [uno3, uno2, uno1],
  },
];

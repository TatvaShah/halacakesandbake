import type { SiteConfig } from "@/lib/types";

// The ONLY file a builder edits (plus images in /public).
// Empty or missing optional fields hide their section automatically.
// Use real facts only: the leads JSON, the IG profile, and posts. Never invent hours, prices, or reviews.
// No double hyphens anywhere in copy; the build fails if one slips in.

export const site: SiteConfig = {
  name: "Hala Cakes and Bake",
  tagline: "Luxury custom cakes in Mississauga, serving the GTA.",
  category: "Custom cakes",
  schemaType: "Bakery",
  area: "Mississauga, ON",
  siteUrl: "https://halacakesandbake.vercel.app",

  theme: {
    preset: "bakery-pastel",
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Mississauga and the GTA",
    headline: "Luxury custom cakes for every celebration",
    subhead: "Wedding tiers, engagement cakes, birthdays, cupcakes, and cake pops, made to order. Call or send a DM with your date and idea to get started.",
    images: [
      { src: "/images/post-5.jpg", alt: "Vintage lace wedding cake by Hala Cakes and Bake" },
      { src: "/images/post-2.jpg", alt: "Bridgerton style tea party cake for a bridal shower" },
      { src: "/images/post-3.jpg", alt: "Floral engagement cake with strawberry shortcake layers" },
    ],
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "Luxury custom cakes",
    "Serving all GTA",
    "Made to order",
    "Orders by phone or Instagram DM",
  ],

  about: {
    title: "Cakes made for your moment",
    body: [
      "Hala Cakes and Bake creates luxury custom cakes in Mississauga for weddings, engagements, bridal showers, birthdays, and every sweet celebration in between.",
      "Share your date, size, flavour, and design idea by phone or Instagram DM, and we will craft something beautiful for your day.",
    ],
    image: { src: "/images/post-6.jpg", alt: "Engagement cake with strawberry and pineapple layers" },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    intro: "Custom cakes and sweet treats, quoted for your date, size, and design. Message us for pricing.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for a quote based on your date, size, flavour, and design.",
    groups: [
      {
        title: "Celebration cakes",
        note: "Quoted by DM or phone",
        items: [
          { name: "Wedding and engagement cakes", description: "Tiered designs in sizes from 4 inch to 10 inch, finished with vintage lace, florals, and buttercream detail." },
          { name: "Bridal shower and tea party cakes", description: "Elegant styles for showers and gatherings, including Bridgerton inspired looks." },
          { name: "Birthday and celebration cakes", description: "Custom designs sized for your guest list." },
        ],
      },
      {
        title: "Sweet treats",
        items: [
          { name: "Cupcakes", description: "Coordinated with your cake theme for parties and celebrations." },
          { name: "Cake pops", description: "A sweet bite sized option for birthdays and gatherings." },
        ],
      },
      {
        title: "Flavours we love",
        items: [
          { name: "Chocolate" },
          { name: "Strawberry shortcake" },
          { name: "Strawberry and pineapple" },
          { name: "Vanilla and maple with salted caramel" },
          { name: "Vanilla and lemon with custard" },
        ],
      },
    ],
    footnote: "Every order is custom. Ask about other flavours and finishes when you reach out.",
  },

  gallery: {
    title: "A look at the cakes",
    items: [
      { src: "/images/post-5.jpg", width: 3000, height: 4000, alt: "Vintage lace multi tier wedding cake", caption: "Vintage lace and buttercream", href: "https://www.instagram.com/p/DeaPs_6j4uK/" },
      { src: "/images/post-2.jpg", width: 3015, height: 3955, alt: "Bridgerton style bridal shower cake", caption: "Bridgerton tea party cake", href: "https://www.instagram.com/p/DdLGulSjt2z/" },
      { src: "/images/post-3.jpg", width: 2900, height: 3866, alt: "Floral engagement cake", caption: "Blooming engagement cake", href: "https://www.instagram.com/p/Dc1ONvyDoM-/" },
      { src: "/images/post-6.jpg", width: 2919, height: 3892, alt: "Strawberry and pineapple engagement cake", caption: "Strawberry and pineapple", href: "https://www.instagram.com/p/DeU_fdGDxyA/" },
      { src: "/images/post-4.jpg", width: 3000, height: 4000, alt: "Cake pops and cupcakes for a birthday", caption: "Cake pops and cupcakes", href: "https://www.instagram.com/p/DdK_8NwDpvA/" },
      { src: "/images/post-1.jpg", width: 720, height: 960, alt: "Chocolate vintage wedding cake", caption: "Chocolate vintage tiers", href: "https://www.instagram.com/p/Dd4jBomj2IB/" },
      { src: "/images/post-7.jpg", width: 1216, height: 2160, alt: "Two tier wedding cake", caption: "Two hearts, one cake", href: "https://www.instagram.com/p/DeaRNEPuPJV/" },
      { src: "/images/post-8.jpg", width: 1215, height: 2160, alt: "Vintage wedding cake detail", caption: "Made to last", href: "https://www.instagram.com/p/Dd4kybCv2f7/" },
    ],
  },

  reels: {
    title: "A closer look",
    intro: "",
    items: [],
  },

  instagram: {
    handle: "halacakesandbake",
    embeds: [
      "https://www.instagram.com/p/DeaPs_6j4uK/",
      "https://www.instagram.com/p/DdLGulSjt2z/",
      "https://www.instagram.com/p/Dc1ONvyDoM-/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order by phone or Instagram DM",
    intro: "Orders are taken by phone or Instagram. Tap the button to open a starter message, then fill in your details.",
    dmMessage: "Hi Hala Cakes and Bake! I would like to order a custom cake.\nDate needed:\nServings or size:\nFlavour:\nDesign idea (I can send an inspo photo):",
    links: [],
    note: "Serving all of the GTA. Call 905-609-4267 or send a DM to get started.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Call 905-609-4267 or send an Instagram DM with your date, servings or size, flavour, and design idea. You will get a quote back." },
    { q: "Where do you serve?", a: "Based in Mississauga and serving all of the GTA." },
    { q: "What kinds of cakes do you make?", a: "Luxury custom cakes for weddings, engagements, bridal showers, birthdays, plus cupcakes and cake pops." },
    { q: "How do I get a price?", a: "Every cake is quoted for your date, size, flavour, and design. Reach out by phone or DM for a custom quote." },
  ],

  contact: {
    area: "Mississauga, Ontario",
    phone: "905-609-4267",
    socials: [
      { label: "Facebook", href: "https://www.facebook.com/halacakesandbake/" },
    ],
  },

  seo: {
    title: "Hala Cakes and Bake | Custom cakes in Mississauga",
    description: "Luxury custom cakes in Mississauga, serving the GTA. Weddings, engagements, birthdays, cupcakes, and cake pops. Order by phone or Instagram DM.",
    keywords: ["custom cakes Mississauga", "wedding cakes Mississauga", "luxury cakes GTA", "engagement cakes Mississauga"],
    ogPhoto: "/images/og-photo.jpg",
  },
};

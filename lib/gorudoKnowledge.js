// Gorudo Investments knowledge base for the website chatbot.
// Edit answers / keywords freely — matcher scores by keyword overlap.

export const COMPANY = {
  legalName: "Gorudo Investments (Private) Limited",
  shortName: "Gorudo Investments",
  tagline: "Harvesting Prosperity",
  country: "Zimbabwe",
  address: "Plot 1 Mudakurwa, Chihota, Marondera, Zimbabwe",
  hubs: ["Harare", "Marondera"],
  phone: "+263 242 127233",
  phoneTel: "+263242127233",
  whatsapp: "+263 71 866 8688",
  whatsappRaw: "263718668688",
  email: "info@gorudoinvestments.co.zw",
  website: "https://gorudoinvestments.co.zw",
  divisions: ["Shashi Maputi", "Shashi Ice", "Gorudo Poultry & Piggery"],
};

export const KNOWLEDGE = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "hie", "good morning", "good afternoon", "good evening", "mhoroi", "makadii"],
    answer:
      "Hello! 👋 I'm the Gorudo Investments assistant. Ask me about our divisions, products, procurement services, locations, or how to partner with us.",
  },
  {
    id: "about",
    keywords: ["about", "who are you", "who is gorudo", "what is gorudo", "company", "background", "story", "tell me"],
    answer:
      "Gorudo Investments (Private) Limited — Harvesting Prosperity — is a diversified Zimbabwean company. We deliver fresh greenhouse produce, livestock outputs (poultry, piggery, rabbits), Shashi Maputi snacks, Shashi Ice cubes, and reliable supply & procurement to private and government clients across Harare and Marondera.",
  },
  {
    id: "divisions",
    keywords: ["division", "divisions", "business unit", "subsidiar", "what do you offer", "services", "what do you do", "branches"],
    answer:
      "We operate three core divisions:\n• Shashi Maputi — our roasted-maize snack line.\n• Shashi Ice — 2.5kg ice cubes produced in Marondera.\n• Gorudo Poultry & Piggery — livestock outputs (poultry, piggery, rabbits).",
  },
  {
    id: "shashi-maputi",
    keywords: ["maputi", "shashi maputi", "snack", "snacks", "maize", "popcorn"],
    answer:
      "Shashi Maputi is our signature roasted-maize snack — packaged at scale and distributed to retailers, vendors and institutional buyers across Zimbabwe. Consistent quality, dependable supply.",
  },
  {
    id: "shashi-ice",
    keywords: ["ice", "shashi ice", "cubes", "frozen", "cold chain", "cold-chain", "cooling", "fridge"],
    answer:
      "Shashi Ice produces 2.5kg bagged ice cubes in Marondera, supplying hospitality, events, restaurants and cold-chain partners. Keep frozen below −10°C. Produced at Plot 1 Mudakurwa, Chihota, Marondera.",
  },
  {
    id: "poultry-piggery",
    keywords: ["poultry", "piggery", "pig", "chicken", "rabbit", "rabbits", "livestock", "meat", "broiler"],
    answer:
      "Gorudo Poultry & Piggery delivers livestock outputs — poultry, piggery and rabbits — managed under professional husbandry standards, with consistent volumes for trade and institutional supply.",
  },
  {
    id: "produce",
    keywords: ["produce", "vegetables", "tomato", "tomatoes", "pepper", "peppers", "greenhouse", "fresh", "organic", "crops", "cucumber"],
    answer:
      "We grow climate-managed greenhouse produce — tomatoes, sweet peppers, cucumbers and more — harvested at peak quality for retailers, hotels and institutional clients.",
  },
  {
    id: "procurement",
    keywords: ["procurement", "tender", "tenders", "government", "institution", "rfq", "supply of goods", "compliance", "praz"],
    answer:
      "Yes — Gorudo Investments handles institutional and government procurement. We supply goods and services with compliance, accurate documentation, and reliable delivery. Send your RFQ or tender requirements via the contact form or WhatsApp.",
  },
  {
    id: "location",
    keywords: ["location", "where", "address", "based", "office", "headquarters", "harare", "marondera", "find you"],
    answer:
      "Head office: Plot 1 Mudakurwa, Chihota, Marondera, Zimbabwe.\nOperations across Harare and Marondera.",
  },
  {
    id: "contact",
    keywords: ["contact", "phone", "call", "email", "reach", "talk", "speak", "number"],
    answer:
      "📞 Phone: +263 242 127233\n💬 WhatsApp: +263 71 866 8688\n✉️ Email: info@gorudoinvestments.co.zw\n📍 Plot 1 Mudakurwa, Chihota, Marondera",
  },
  {
    id: "hours",
    keywords: ["hours", "open", "opening", "operating", "time", "when", "schedule"],
    answer:
      "Our offices are typically open Mon–Fri, 8:00–17:00 (CAT). For urgent supply or procurement queries, message us on WhatsApp.",
  },
  {
    id: "partnership",
    keywords: ["partner", "partnership", "invest", "investor", "collaborate", "deal", "joint venture", "jv"],
    answer:
      "We welcome partnerships, supply contracts and investor conversations. Share a brief on the contact form or via WhatsApp — our team will follow up.",
  },
  {
    id: "delivery",
    keywords: ["delivery", "deliver", "shipping", "logistics", "transport", "distribute"],
    answer:
      "We arrange logistics across Harare and Marondera, and to client sites by agreement. Volumes, lead times and pricing are confirmed per order.",
  },
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "quote", "rates", "how much"],
    answer:
      "Pricing is quoted per order based on product, volume and delivery point. Tap “Talk on WhatsApp” below and a team member will share a quote.",
  },
  {
    id: "wholesale",
    keywords: ["wholesale", "bulk", "retail", "distributor", "stockist", "reseller"],
    answer:
      "We supply wholesale and retail volumes for Shashi Maputi, Shashi Ice and our produce lines. Distributors and stockists are welcome — let’s talk.",
  },
  {
    id: "careers",
    keywords: ["job", "jobs", "career", "careers", "vacancy", "vacancies", "hiring", "employ"],
    answer:
      "Open roles are shared as they arise. Send your CV to info@gorudoinvestments.co.zw with the role you’re targeting in the subject line.",
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "thx", "appreciate"],
    answer: "You’re very welcome. Anything else I can help with?",
  },
  {
    id: "bye",
    keywords: ["bye", "goodbye", "see you", "later"],
    answer: "Goodbye 👋 — reach us anytime on WhatsApp: +263 71 866 8688.",
  },
];

// Quick suggestions shown when the chat opens.
export const QUICK_PROMPTS = [
  "What does Gorudo do?",
  "Tell me about Shashi Ice",
  "Where are you based?",
  "I have a procurement request",
];

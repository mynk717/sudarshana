export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  applications: string[];
  colors?: string;
  coating?: string;
  widths?: string;
  range?: string;
  materials?: string;
  features?: string;
  // thickness and warranty intentionally removed per design decision
};

export const businessInfo = {
  name: "Sudarshana Profile Sheets",
  fullName: "Sudarshana Profile Sheets",
  tagline: "Crafting Excellence in Roofing Solutions",
  location: "Raipur, Chhattisgarh",
  dealerTagline: "Authorised dealer and manufacturer of TATA Steel and APL Apollo colour coated profile sheets.",
  phone: "+91 7000892760",
  phoneAlt: "+91 8770541639",
  email: "contact@sudarshanaprofile.com",
  address: "Kesari Bagicha Road, Bhatagaon, Raipur, Chhattisgarh 492013",
  addressAlt: "Shop No 1, Keshri Bagicha Road, Bhatagaon, Raipur - 492001",
  gstNumber: "22AQZPS1465L1Z3",
  establishedYear: "2023",
  entityType: "Proprietorship",
  serviceArea: "Chhattisgarh & PAN India",
};

export const heroContent = {
  question: "What is Sudarshana Profile Sheets?",
  answer: "Leading manufacturer of high-quality colour-coated metal profile sheets in Raipur, Chhattisgarh, setting the standard for durability and excellence in construction materials.",
  headline: "Crafting Excellence in Roofing Solutions",
  subheadline: "Unlocking Possibilities with Precision Craftsmanship in Raipur, Chhattisgarh. We engineer innovative, custom-crafted trapezoidal color-coated metal profile sheets and comprehensive shed accessories.",
  cta: {
    primary: "Get Quote",
    secondary: "View Products"
  }
};

export const services = [
  {
    id: 1,
    title: "Custom Roofing Sheets",
    shortAnswer: "What sizes of Roofing sheets are available?",
    description: "We specialize in crafting roofing sheets in various sizes and shapes, focusing on meeting your unique project needs. Custom dimensions tailored to your specifications.",
    features: [
      "Various sizes and shapes",
      "Custom dimensions available",
      "High-grade galvanised steel",
      "Trapezoidal design for strength"
    ],
    icon: "⚙️",
    stat: "Custom solutions for every project"
  },
  {
    id: 2,
    title: "Colour-Coated Profile Sheets",
    shortAnswer: "How durable are colour-coated sheets?",
    description: "Our colour-coated metal profile sheets are crafted with precision using Aluminum-zinc coating (AZ-70/AZ-150 gsm) and undergo rigorous quality checks for durability, strength, and weather resistance.",
    features: [
      "Aluminum-zinc coating protection",
      "Rust and corrosion resistant",
      "Weather endurance"
    ],
    icon: "🎨",
    stat: "Rust protection with Aluminum-zinc coating"
  },
  {
    id: 3,
    title: "Shed Construction Services",
    shortAnswer: "Do you provide complete shed construction?",
    description: "Beyond manufacturing, we excel in constructing robust sheds using our premium profile sheets. Lightweight installation, low maintenance, and serving clients across Chhattisgarh.",
    features: [
      "Complete turnkey construction",
      "Easy and quick installation",
      "Low maintenance requirements",
      "Serving Chhattisgarh & PAN India"
    ],
    icon: "🏗️",
    stat: "Serving Chhattisgarh & PAN India"
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Trapezoidal Galvanised Profile Sheets",
    category: "Roofing Solutions",
    description: "High-grade galvanised steel sheets with trapezoidal profile for enhanced structural integrity. Coated with Aluminum-zinc (AZ-70/AZ-150 gsm) for superior rust resistance.",
    widths: "Custom sizes available",
    coating: "Aluminum-zinc (AZ-70/AZ-150 gsm)",
    applications: [
      "Industrial roofing",
      "Warehouses and factories", 
      "Commercial buildings",
      "Agricultural structures"
    ],
    image: "/images/products/trapezoidal.png"
  },
  {
    id: 2,
    name: "Colour-Coated Metal Roofing Sheets",
    category: "Premium Roofing",
    description: "Aesthetically designed colour-coated sheets with weather-resistant properties. Perfect for residential and commercial applications with visual appeal.",
    colors: "Custom RAL colors",
    applications: [
      "Houses and cottages",
      "Garages and sheds",
      "Schools and institutions",
      "Public facilities"
    ],
    image: "/images/products/color-coated.png"
  },
  {
    id: 3,
    name: "Roofing Accessories & Components",
    category: "Construction Components",
    description: "Comprehensive range of roofing accessories including ridge caps, flashings, fasteners, and structural components for complete installation.",
    range: "Complete accessory kit",
    materials: "Galvanised steel components",
    features: "Weather-resistant & durable",
    applications: [
      "Shed assembly",
      "Roof completion",
      "Water management systems",
      "Structural support"
    ],
    image: "/images/products/accessories.png"
  },
  {
    id: 4,
    name: "TATA Durashine® Colour Coated Sheets",
    category: "Premium Roofing",
    description:
      "Official TATA Durashine® colour coated profile sheets for residential, commercial and industrial roofing with superior corrosion resistance and long life.",
    applications: [
      "Residential roofing",
      "Showrooms and malls",
      "Industrial sheds",
      "Institutions and public buildings",
    ],
    image: "/images/products/tata-durashine.png",
  },
  {
    id: 5,
    name: "TATA Durashine® SuPreme / Prisma / Colorbond",
    category: "Premium Roofing",
    description:
      "High-performance TATA Durashine® SuPreme, Prisma and Colorbond profiles offering advanced paint systems, colour retention and enhanced durability.",
    colors: "Wide TATA colour range",
    applications: [
      "Architectural roofing",
      "Premium industrial projects",
      "Long-span sheds",
      "High-end residential projects",
    ],
    image: "/images/products/tata-supreme-prisma-colorbond.png",
  },
  {
    id: 6,
    name: "TATA Satin Silver Roofing Sheets",
    category: "Premium Roofing",
    description:
      "DURASHINE® Satin Silver finish roofing sheets designed for cooler interiors and excellent corrosion resistance in demanding climates.",
    applications: [
      "Godowns and warehouses",
      "Poultry and dairy farms",
      "Factory sheds",
      "Cold storage buildings",
    ],
    image: "/images/products/tata-satin-silver.png",
  },

  // New: APL Apollo ranges (Jumbo, RoofTuff, Coral, Navrang)
  {
    id: 7,
    name: "APL Apollo Jumbo Profile Sheets",
    category: "Roofing Solutions",
    description:
      "APL Apollo Jumbo high-strength colour coated profile sheets suitable for large span roofing and heavy-duty industrial applications.",
    applications: [
      "Large industrial sheds",
      "Steel warehouses",
      "Logistics hubs",
      "Heavy engineering units",
    ],
    image: "/images/products/apl-jumbo.jpeg",
  },
  {
    id: 8,
    name: "APL Apollo RoofTuff Sheets",
    category: "Roofing Solutions",
    description:
      "APL Apollo RoofTuff colour coated sheets with robust profile and advanced coating system for long-lasting, leak-proof roofing.",
    applications: [
      "Industrial roofing",
      "Commercial sheds",
      "Service centers",
      "Workshops",
    ],
    image: "/images/products/apl-rooftuff.png",
  },
  {
    id: 9,
    name:"APL Apollo Coral Sheets",
    category: "Premium Roofing",
    description:
      "Decorative APL Apollo Coral colour coated roofing sheets offering vibrant colours and reliable protection for demanding weather.",    
    colors: "Multi-colour decorative range",
    applications: [
      "Commercial complexes",
      "Showrooms and façades",
      "Farm houses",
      "Architectural projects",
    ],
    image: "/images/products/apl-coral-navrang.png",
  },
  {
    id: 10,
    name: "APL Apollo Coil",
    category: "Roofing Solutions",
    description:
      "APL Apollo colour coated coil for roll-forming and custom profile sheet production. High-grade base metal with advanced paint system for excellent forming properties and durability.",
    colors: "Multiple colour options",
    applications: [
      "Profile sheet manufacturing",
      "Custom roll-forming",
      "Industrial roofing",
      "Commercial construction",
    ],
    image: "/images/products/apl-coil.png",
  },
];



export const useCases = [
  {
    category: "Residential Applications",
    examples: ["Houses and Cottages", "Garages and Sheds", "Outdoor Shelters"]
  },
  {
    category: "Industrial Applications",
    examples: ["Warehouses and Factories", "Agricultural Buildings", "Storage Facilities"]
  },
  {
    category: "Commercial Applications",
    examples: ["Schools and Institutions", "Public Facilities", "Healthcare Buildings"]
  },
  {
    category: "Specialized Applications",
    examples: ["Sports Facilities", "Community Centers", "Parks and Recreation"]
  }
];

export const features = [
  {
    title: "Rust Resistance",
    description: "Aluminum-zinc coating guarantees long-lasting protection against rust and corrosion"
  },
  {
    title: "Weather Endurance",
    description: "Excellent performance in extreme weather - intense heat or heavy rainfall"
  },
  {
    title: "Easy Installation",
    description: "Lightweight sheets with straightforward installation, reducing labour time and costs"
  },
  {
    title: "Low Maintenance",
    description: "Minimal upkeep required throughout extensive lifespan"
  },
  {
    title: "Durability",
    description: "Built to last decades without compromise in quality"
  },
  {
    title: "Eco-Friendly",
    description: "Made from recyclable steel with sustainable manufacturing processes"
  }
];

export const faqs = [
  {
    question: "Do you provide installation and shed construction services?",
    answer: "Yes, we provide complete turnkey shed construction services across Chhattisgarh and PAN India. Our lightweight sheets ensure easy and quick installation with reduced labour requirements."
  },
  {
    question: "What areas do you serve?",
    answer: "We are based in Raipur, Chhattisgarh, and serve clients across the entire state of Chhattisgarh as well as PAN India for our manufacturing and construction services."
  },
  {
    question: "What coating technology do you use?",
    answer: "We use Aluminum-zinc coating (AZ-70/AZ-150 gsm) on high-grade galvanised steel, which provides superior rust resistance and weather endurance compared to traditional coatings."
  },
  {
    question: "Can I get custom colors for roofing sheets?",
    answer: "Yes, we offer custom RAL colors for our colour-coated sheets to match your architectural requirements and aesthetic preferences."
  },
  {
    question: "What is your GST number?",
    answer: "Our GST number is 22AQZPS1465L1Z3. We are a registered proprietorship established in April 2023."
  }
];

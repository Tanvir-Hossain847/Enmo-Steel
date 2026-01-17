// Demo data for PlantPedia
export const demoPlants = [
  {
    commonName: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    family: "Asphodelaceae",
    type: "Succulent",
    description: "A succulent plant species known for its medicinal properties and easy care requirements.",
    habitat: ["Desert", "Arid"],
    uses: ["Medicinal", "Ornamental"],
    safety: ["Pet Safe", "Edible"],
    leafShape: "Lance-shaped",
    flowerColor: ["Yellow", "Orange"],
    growthSpeed: "Slow",
    climateZone: "Arid",
    size: "Small",
    careInstructions: {
      watering: "Water deeply but infrequently, allow soil to dry between waterings",
      light: "Bright, indirect sunlight",
      soil: "Well-draining cactus mix",
      temperature: "65-80°F (18-27°C)"
    },
    bloomingSeason: ["Summer"],
    plantingSeason: ["Spring", "Summer"],
    views: 1250,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15")
  },
  {
    commonName: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    family: "Asparagaceae",
    type: "Succulent",
    description: "A hardy indoor plant known for its air-purifying qualities and tolerance to neglect.",
    habitat: ["Indoor", "Tropical"],
    uses: ["Ornamental", "Indoor"],
    safety: ["Toxic to Pets"],
    leafShape: "Lance-shaped",
    flowerColor: ["White"],
    growthSpeed: "Slow",
    climateZone: "Tropical",
    size: "Medium",
    careInstructions: {
      watering: "Water every 2-3 weeks, less in winter",
      light: "Low to bright indirect light",
      soil: "Well-draining potting mix",
      temperature: "60-80°F (15-27°C)"
    },
    bloomingSeason: ["Spring"],
    plantingSeason: ["Spring", "Summer"],
    views: 980,
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10")
  },
  {
    commonName: "Peace Lily",
    scientificName: "Spathiphyllum wallisii",
    family: "Araceae",
    type: "Flower",
    description: "An elegant flowering houseplant known for its white blooms and air-purifying abilities.",
    habitat: ["Indoor", "Tropical"],
    uses: ["Ornamental", "Indoor"],
    safety: ["Toxic to Pets", "Toxic to Humans"],
    leafShape: "Heart-shaped",
    flowerColor: ["White"],
    growthSpeed: "Moderate",
    climateZone: "Tropical",
    size: "Medium",
    careInstructions: {
      watering: "Keep soil consistently moist but not waterlogged",
      light: "Low to medium indirect light",
      soil: "Well-draining potting mix",
      temperature: "65-80°F (18-27°C)"
    },
    bloomingSeason: ["Spring", "Summer"],
    plantingSeason: ["Spring"],
    views: 756,
    createdAt: new Date("2024-01-08"),
    updatedAt: new Date("2024-01-08")
  },
  {
    commonName: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa",
    family: "Araceae",
    type: "Vine",
    description: "A popular houseplant known for its large, split leaves and climbing growth habit.",
    habitat: ["Indoor", "Tropical"],
    uses: ["Ornamental", "Indoor"],
    safety: ["Toxic to Pets", "Toxic to Humans"],
    leafShape: "Lobed",
    flowerColor: ["White"],
    growthSpeed: "Fast",
    climateZone: "Tropical",
    size: "Large",
    careInstructions: {
      watering: "Water when top inch of soil is dry",
      light: "Bright, indirect light",
      soil: "Well-draining potting mix with peat",
      temperature: "65-85°F (18-29°C)"
    },
    bloomingSeason: ["Summer"],
    plantingSeason: ["Spring", "Summer"],
    views: 1420,
    createdAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-12")
  },
  {
    commonName: "Lavender",
    scientificName: "Lavandula angustifolia",
    family: "Lamiaceae",
    type: "Herb",
    description: "An aromatic herb known for its fragrant purple flowers and calming properties.",
    habitat: ["Mediterranean", "Garden"],
    uses: ["Medicinal", "Aromatic", "Ornamental"],
    safety: ["Pet Safe", "Edible"],
    leafShape: "Needle-like",
    flowerColor: ["Purple"],
    growthSpeed: "Moderate",
    climateZone: "Mediterranean",
    size: "Small",
    careInstructions: {
      watering: "Water deeply but infrequently, drought tolerant",
      light: "Full sun",
      soil: "Well-draining, alkaline soil",
      temperature: "60-70°F (15-21°C)"
    },
    bloomingSeason: ["Summer"],
    plantingSeason: ["Spring"],
    views: 892,
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05")
  },
  {
    commonName: "Fiddle Leaf Fig",
    scientificName: "Ficus lyrata",
    family: "Moraceae",
    type: "Tree",
    description: "A popular indoor tree with large, violin-shaped leaves that make a bold statement.",
    habitat: ["Indoor", "Tropical"],
    uses: ["Ornamental", "Indoor"],
    safety: ["Toxic to Pets"],
    leafShape: "Lobed",
    flowerColor: ["Green"],
    growthSpeed: "Moderate",
    climateZone: "Tropical",
    size: "Large",
    careInstructions: {
      watering: "Water when top 2 inches of soil are dry",
      light: "Bright, indirect light",
      soil: "Well-draining potting mix",
      temperature: "65-75°F (18-24°C)"
    },
    bloomingSeason: ["Rarely indoors"],
    plantingSeason: ["Spring", "Summer"],
    views: 1100,
    createdAt: new Date("2024-01-18"),
    updatedAt: new Date("2024-01-18")
  }
];

export const demoCareGuides = [
  {
    title: "Watering Wisdom",
    category: "Watering",
    difficulty: "Beginner",
    description: "Master the art of proper plant hydration with our comprehensive watering guide.",
    content: "Proper watering is crucial for plant health. Check soil moisture before watering, water deeply but less frequently, and always use room temperature water.",
    tips: [
      "Check soil moisture before watering",
      "Water deeply but less frequently", 
      "Use room temperature water",
      "Consider plant-specific needs"
    ],
    estimatedReadTime: "5 min",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01")
  },
  {
    title: "Light Requirements",
    category: "Lighting",
    difficulty: "Beginner", 
    description: "Understand how to provide the perfect lighting conditions for healthy plant growth.",
    content: "Light is essential for photosynthesis. Learn to identify your plant's light needs and provide appropriate conditions.",
    tips: [
      "Identify your plant's light needs",
      "Rotate plants for even growth",
      "Use grow lights when needed",
      "Watch for light stress signs"
    ],
    estimatedReadTime: "4 min",
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02")
  },
  {
    title: "Soil & Nutrition",
    category: "Soil",
    difficulty: "Intermediate",
    description: "Learn about soil types, drainage, and feeding schedules for optimal plant health.",
    content: "The right soil mix and nutrition are fundamental to plant success. Understanding soil composition and feeding schedules will help your plants thrive.",
    tips: [
      "Choose the right soil mix",
      "Ensure proper drainage", 
      "Feed during growing season",
      "Test soil pH regularly"
    ],
    estimatedReadTime: "7 min",
    createdAt: new Date("2024-01-03"),
    updatedAt: new Date("2024-01-03")
  }
];
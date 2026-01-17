# PlantPedia API Documentation

## Base URL
```
http://localhost:3000/api
```

## Database Configuration
- **Database**: MongoDB
- **Demo Connection**: `mongodb+srv://demo:demo123@plantpedia.mongodb.net/plantpedia`
- **Collections**: `plants`, `careGuides`

## API Endpoints

### Health Check
- **GET** `/health` - Check API and database health

### Plants
- **GET** `/plants` - Get all plants with optional filtering
  - Query Parameters:
    - `search` - Search in name, scientific name, family
    - `type` - Filter by plant type
    - `habitat` - Filter by habitat
    - `use` - Filter by use
    - `safety` - Filter by safety
    - `limit` - Number of results (default: 20)
    - `page` - Page number (default: 1)

- **POST** `/plants` - Create a new plant
- **GET** `/plants/[id]` - Get specific plant by ID
- **PUT** `/plants/[id]` - Update specific plant
- **DELETE** `/plants/[id]` - Delete specific plant

### Featured Plants
- **GET** `/plants/featured` - Get featured plants
  - Query Parameters:
    - `type` - `most-viewed`, `weekly`, `seasonal`

### Advanced Search
- **POST** `/plants/search` - Advanced plant search with multiple filters
  - Body Parameters:
    - `leafShape` - Array of leaf shapes
    - `flowerColor` - Array of flower colors
    - `growthSpeed` - Array of growth speeds
    - `climateZone` - Array of climate zones
    - `plantSize` - Array of plant sizes
    - `safety` - Array of safety categories
    - `search` - Text search
    - `limit` - Results per page
    - `page` - Page number

### Care Guides
- **GET** `/care-guides` - Get all care guides
  - Query Parameters:
    - `category` - Filter by category
    - `difficulty` - Filter by difficulty level
    - `limit` - Number of results

- **POST** `/care-guides` - Create a new care guide

### Statistics
- **GET** `/stats` - Get website statistics
  - Returns: total plants, care guides, views, categories, most viewed plants, recent additions

### Database Seeding
- **POST** `/seed` - Seed database with demo data (Development only)

## Plant Schema
```javascript
{
  commonName: String,
  scientificName: String,
  family: String,
  type: String, // Tree, Flower, Herb, Succulent, etc.
  description: String,
  habitat: [String], // Indoor, Outdoor, Tropical, Desert, etc.
  uses: [String], // Medicinal, Ornamental, Edible, etc.
  safety: [String], // Pet Safe, Child Safe, Toxic to Pets, etc.
  leafShape: String, // Heart-shaped, Lance-shaped, Round, etc.
  flowerColor: [String],
  growthSpeed: String, // Slow, Moderate, Fast
  climateZone: String,
  size: String, // Small, Medium, Large
  careInstructions: {
    watering: String,
    light: String,
    soil: String,
    temperature: String
  },
  bloomingSeason: [String],
  plantingSeason: [String],
  views: Number,
  createdAt: Date,
  updatedAt: Date
}
```

## Care Guide Schema
```javascript
{
  title: String,
  category: String, // Watering, Lighting, Soil, etc.
  difficulty: String, // Beginner, Intermediate, Advanced
  description: String,
  content: String,
  tips: [String],
  estimatedReadTime: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Example Requests

### Get Plants with Search
```bash
GET /api/plants?search=aloe&limit=10&page=1
```

### Advanced Plant Search
```bash
POST /api/plants/search
Content-Type: application/json

{
  "leafShape": ["Heart-shaped", "Lance-shaped"],
  "flowerColor": ["White", "Purple"],
  "safety": ["Pet Safe"],
  "limit": 20,
  "page": 1
}
```

### Create New Plant
```bash
POST /api/plants
Content-Type: application/json

{
  "commonName": "Spider Plant",
  "scientificName": "Chlorophytum comosum",
  "family": "Asparagaceae",
  "type": "Houseplant",
  "description": "Easy-care houseplant with long, arching leaves",
  "habitat": ["Indoor"],
  "uses": ["Ornamental", "Indoor"],
  "safety": ["Pet Safe"],
  "leafShape": "Lance-shaped",
  "flowerColor": ["White"],
  "growthSpeed": "Fast",
  "climateZone": "Temperate",
  "size": "Medium"
}
```

## Error Responses
All endpoints return consistent error responses:
```javascript
{
  "error": "Error message description"
}
```

Common HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error

## Getting Started

1. **Seed the database** (Development):
   ```bash
   POST /api/seed
   ```

2. **Check health**:
   ```bash
   GET /api/health
   ```

3. **Get plants**:
   ```bash
   GET /api/plants
   ```

The API is now ready to use with demo MongoDB credentials. You can replace the connection string in `.env.local` with your actual MongoDB credentials when ready.
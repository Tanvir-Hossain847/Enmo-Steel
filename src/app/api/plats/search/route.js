import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// POST /api/plats/search - Advanced plant search
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db('plantpedia');
    const body = await request.json();
    
    const {
      leafShape,
      flowerColor,
      growthSpeed,
      climateZone,
      plantSize,
      safety,
      search,
      limit = 20,
      page = 1
    } = body;
    
    const skip = (page - 1) * limit;
    const query = {};
    
    // Text search
    if (search) {
      query.$or = [
        { commonName: { $regex: search, $options: 'i' } },
        { scientificName: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Characteristic filters
    if (leafShape && leafShape.length > 0) {
      query.leafShape = { $in: leafShape };
    }
    
    if (flowerColor && flowerColor.length > 0) {
      query.flowerColor = { $in: flowerColor };
    }
    
    if (growthSpeed && growthSpeed.length > 0) {
      query.growthSpeed = { $in: growthSpeed };
    }
    
    if (climateZone && climateZone.length > 0) {
      query.climateZone = { $in: climateZone };
    }
    
    if (plantSize && plantSize.length > 0) {
      query.size = { $in: plantSize };
    }
    
    if (safety && safety.length > 0) {
      query.safety = { $in: safety };
    }
    
    const plats = await db
      .collection('plats')
      .find(query)
      .skip(skip)
      .limit(limit)
      .toArray();
    
    const total = await db.collection('plats').countDocuments(query);
    
    return NextResponse.json({
      plats,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      },
      filters: {
        leafShape,
        flowerColor,
        growthSpeed,
        climateZone,
        plantSize,
        safety
      }
    });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to search plats' },
      { status: 500 }
    );
  }
}
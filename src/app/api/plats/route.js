import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// GET /api/plats - Get all plants with optional filtering
export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db('plantpedia');
    const { searchParams } = new URL(request.url);
    
    // Build query based on search parameters
    const query = {};
    const limit = parseInt(searchParams.get('limit')) || 20;
    const page = parseInt(searchParams.get('page')) || 1;
    const skip = (page - 1) * limit;
    
    // Search functionality
    const search = searchParams.get('search');
    if (search) {
      query.$or = [
        { commonName: { $regex: search, $options: 'i' } },
        { scientificName: { $regex: search, $options: 'i' } },
        { family: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Filter by type
    const type = searchParams.get('type');
    if (type) {
      query.type = type;
    }
    
    // Filter by habitat
    const habitat = searchParams.get('habitat');
    if (habitat) {
      query.habitat = { $in: [habitat] };
    }
    
    // Filter by use
    const use = searchParams.get('use');
    if (use) {
      query.uses = { $in: [use] };
    }
    
    // Filter by safety
    const safety = searchParams.get('safety');
    if (safety) {
      query.safety = { $in: [safety] };
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
      }
    });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch plats' },
      { status: 500 }
    );
  }
}

// POST /api/plats - Create a new plant
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db('plantpedia');
    const body = await request.json();
    
    const plat = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
      views: 0
    };
    
    const result = await db.collection('plats').insertOne(plat);
    
    return NextResponse.json({
      message: 'Plant created successfully',
      platId: result.insertedId,
      plat: { ...plat, _id: result.insertedId }
    }, { status: 201 });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to create plant' },
      { status: 500 }
    );
  }
}
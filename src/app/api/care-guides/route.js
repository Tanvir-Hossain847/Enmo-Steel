import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// GET /api/care-guides - Get all care guides
export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db('plantpedia');
    const { searchParams } = new URL(request.url);
    
    const category = searchParams.get('category');
    const difficulty = searchParams.get('difficulty');
    const limit = parseInt(searchParams.get('limit')) || 20;
    
    const query = {};
    
    if (category) {
      query.category = category;
    }
    
    if (difficulty) {
      query.difficulty = difficulty;
    }
    
    const careGuides = await db
      .collection('careGuides')
      .find(query)
      .limit(limit)
      .toArray();
    
    return NextResponse.json({ careGuides });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch care guides' },
      { status: 500 }
    );
  }
}

// POST /api/care-guides - Create a new care guide
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db('plantpedia');
    const body = await request.json();
    
    const careGuide = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await db.collection('careGuides').insertOne(careGuide);
    
    return NextResponse.json({
      message: 'Care guide created successfully',
      guideId: result.insertedId
    }, { status: 201 });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to create care guide' },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

// GET /api/plats/[id] - Get a specific plant by ID
export async function GET(request, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db('plantpedia');
    const { id } = params;
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid plant ID' },
        { status: 400 }
      );
    }
    
    const plat = await db.collection('plats').findOne({
      _id: new ObjectId(id)
    });
    
    if (!plat) {
      return NextResponse.json(
        { error: 'Plant not found' },
        { status: 404 }
      );
    }
    
    // Increment view count
    await db.collection('plats').updateOne(
      { _id: new ObjectId(id) },
      { $inc: { views: 1 } }
    );
    
    return NextResponse.json(plat);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch plant' },
      { status: 500 }
    );
  }
}

// PUT /api/plats/[id] - Update a specific plant
export async function PUT(request, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db('plantpedia');
    const { id } = params;
    const body = await request.json();
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid plant ID' },
        { status: 400 }
      );
    }
    
    const updateData = {
      ...body,
      updatedAt: new Date()
    };
    
    const result = await db.collection('plats').updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Plant not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      message: 'Plant updated successfully'
    });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to update plant' },
      { status: 500 }
    );
  }
}

// DELETE /api/plats/[id] - Delete a specific plant
export async function DELETE(request, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db('plantpedia');
    const { id } = params;
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid plant ID' },
        { status: 400 }
      );
    }
    
    const result = await db.collection('plats').deleteOne({
      _id: new ObjectId(id)
    });
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Plant not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      message: 'Plant deleted successfully'
    });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to delete plant' },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { demoPlants, demoCareGuides } from '@/lib/seedData';

// POST /api/seed - Seed the database with demo data
export async function POST() {
  try {
    const client = await clientPromise;
    const db = client.db('plantpedia');
    
    // Clear existing data
    await db.collection('plats').deleteMany({});
    await db.collection('careGuides').deleteMany({});
    
    // Insert demo plants into plats collection
    const platsResult = await db.collection('plats').insertMany(demoPlants);
    
    // Insert demo care guides
    const guidesResult = await db.collection('careGuides').insertMany(demoCareGuides);
    
    // Create indexes for better performance
    await db.collection('plats').createIndex({ commonName: 'text', scientificName: 'text', description: 'text' });
    await db.collection('plats').createIndex({ type: 1 });
    await db.collection('plats').createIndex({ habitat: 1 });
    await db.collection('plats').createIndex({ uses: 1 });
    await db.collection('plats').createIndex({ views: -1 });
    await db.collection('plats').createIndex({ createdAt: -1 });
    
    await db.collection('careGuides').createIndex({ category: 1 });
    await db.collection('careGuides').createIndex({ difficulty: 1 });
    
    return NextResponse.json({
      message: 'Database seeded successfully',
      platsInserted: platsResult.insertedCount,
      guidesInserted: guidesResult.insertedCount
    });
  } catch (error) {
    console.error('Seeding Error:', error);
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    );
  }
}
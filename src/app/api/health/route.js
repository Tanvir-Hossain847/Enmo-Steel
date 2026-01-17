import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// GET /api/health - Check database connection and API health
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('plantpedia');
    
    // Test database connection
    await db.admin().ping();
    
    // Get basic stats
    const platsCount = await db.collection('plats').countDocuments();
    const guidesCount = await db.collection('careGuides').countDocuments();
    
    return NextResponse.json({
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString(),
      collections: {
        plats: platsCount,
        careGuides: guidesCount
      }
    });
  } catch (error) {
    console.error('Health Check Error:', error);
    return NextResponse.json(
      { 
        status: 'unhealthy',
        database: 'disconnected',
        error: error.message,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
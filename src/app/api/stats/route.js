import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// GET /api/stats - Get website statistics
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('plantpedia');
    
    // Get total counts
    const totalPlats = await db.collection('plats').countDocuments();
    const totalCareGuides = await db.collection('careGuides').countDocuments();
    
    // Get total views
    const viewsResult = await db.collection('plats').aggregate([
      {
        $group: {
          _id: null,
          totalViews: { $sum: '$views' }
        }
      }
    ]).toArray();
    
    const totalViews = viewsResult.length > 0 ? viewsResult[0].totalViews : 0;
    
    // Get plant categories count
    const categoriesResult = await db.collection('plats').aggregate([
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 }
        }
      }
    ]).toArray();
    
    // Get most viewed plants
    const mostViewed = await db
      .collection('plats')
      .find({})
      .sort({ views: -1 })
      .limit(5)
      .project({ commonName: 1, scientificName: 1, views: 1 })
      .toArray();
    
    // Get recent additions
    const recentPlats = await db
      .collection('plats')
      .find({})
      .sort({ createdAt: -1 })
      .limit(5)
      .project({ commonName: 1, scientificName: 1, createdAt: 1 })
      .toArray();
    
    return NextResponse.json({
      overview: {
        totalPlats,
        totalCareGuides,
        totalViews,
        categories: categoriesResult.length
      },
      categories: categoriesResult,
      mostViewed,
      recentPlats
    });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}
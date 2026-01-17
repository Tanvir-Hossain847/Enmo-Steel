import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// GET /api/plants/featured - Get featured plants
export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db('plantpedia');
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'most-viewed';
    
    let plants = [];
    
    switch (type) {
      case 'most-viewed':
        plants = await db
          .collection('plants')
          .find({})
          .sort({ views: -1 })
          .limit(6)
          .toArray();
        break;
        
      case 'weekly':
        // Get plants added or updated in the last week
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        
        plants = await db
          .collection('plants')
          .find({
            $or: [
              { createdAt: { $gte: weekAgo } },
              { updatedAt: { $gte: weekAgo } }
            ]
          })
          .sort({ updatedAt: -1 })
          .limit(6)
          .toArray();
        break;
        
      case 'seasonal':
        // Get plants based on current season (simplified logic)
        const currentMonth = new Date().getMonth() + 1;
        let season = 'spring';
        
        if (currentMonth >= 6 && currentMonth <= 8) season = 'summer';
        else if (currentMonth >= 9 && currentMonth <= 11) season = 'autumn';
        else if (currentMonth === 12 || currentMonth <= 2) season = 'winter';
        
        plants = await db
          .collection('plants')
          .find({
            $or: [
              { bloomingSeason: { $in: [season] } },
              { plantingSeason: { $in: [season] } }
            ]
          })
          .limit(6)
          .toArray();
        break;
        
      default:
        plants = await db
          .collection('plants')
          .find({})
          .sort({ views: -1 })
          .limit(6)
          .toArray();
    }
    
    return NextResponse.json({ plants, type });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch featured plants' },
      { status: 500 }
    );
  }
}
import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { recordClick } from '@/lib/data';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { toolId } = body;

    if (!toolId) {
      return NextResponse.json(
        { error: 'Missing toolId' },
        { status: 400 }
      );
    }

    const headersList = await headers();
    const referrer = headersList.get('referer') || undefined;
    const userAgent = headersList.get('user-agent') || undefined;

    await recordClick(toolId, referrer, userAgent);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Click tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to record click' },
      { status: 500 }
    );
  }
}

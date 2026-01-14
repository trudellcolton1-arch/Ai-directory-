import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { tool_name, website_url, description, contact_email, is_owner } = body;

    if (!tool_name || !website_url || !contact_email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const supabase = await createServerSupabaseClient();

    const { error } = await supabase.from('submissions').insert({
      tool_name,
      website_url,
      description: description || null,
      contact_email,
      is_owner: is_owner || false,
    });

    if (error) {
      console.error('Submission error:', error);
      return NextResponse.json(
        { error: 'Failed to submit tool' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Submit API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

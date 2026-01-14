import { createServerSupabaseClient, createAdminClient } from './supabase';
import type { Tool, Category, SearchParams } from './types';

// Cache revalidation times (in seconds)
const CACHE_SHORT = 60; // 1 minute
const CACHE_MEDIUM = 300; // 5 minutes
const CACHE_LONG = 3600; // 1 hour

export async function getCategories(): Promise<Category[]> {
  const supabase = await createServerSupabaseClient();
  
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data || [];
}

export async function getCategoriesWithCounts(): Promise<Category[]> {
  const supabase = await createServerSupabaseClient();
  
  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('*')
    .order('display_order', { ascending: true });

  if (catError) {
    console.error('Error fetching categories:', catError);
    return [];
  }

  // Get tool counts per category
  const { data: counts, error: countError } = await supabase
    .from('tools')
    .select('category_id')
    .eq('status', 'approved');

  if (countError) {
    console.error('Error fetching tool counts:', countError);
    return categories || [];
  }

  const countMap = (counts || []).reduce((acc, tool) => {
    if (tool.category_id) {
      acc[tool.category_id] = (acc[tool.category_id] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  return (categories || []).map(cat => ({
    ...cat,
    tool_count: countMap[cat.id] || 0,
  }));
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const supabase = await createServerSupabaseClient();
  
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching category:', error);
    return null;
  }

  return data;
}

export async function getFeaturedTools(limit = 6): Promise<Tool[]> {
  const supabase = await createServerSupabaseClient();
  
  const now = new Date().toISOString();
  
  const { data, error } = await supabase
    .from('tools')
    .select('*, category:categories(*)')
    .eq('status', 'approved')
    .eq('is_featured', true)
    .or(`featured_until.is.null,featured_until.gt.${now}`)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching featured tools:', error);
    return [];
  }

  return data || [];
}

export async function getRecentTools(limit = 12): Promise<Tool[]> {
  const supabase = await createServerSupabaseClient();
  
  const { data, error } = await supabase
    .from('tools')
    .select('*, category:categories(*)')
    .eq('status', 'approved')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching recent tools:', error);
    return [];
  }

  return data || [];
}

export async function getTrendingTools(limit = 6): Promise<Tool[]> {
  const supabase = await createServerSupabaseClient();
  
  // Get tools with most clicks in last 7 days
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const { data, error } = await supabase
    .from('tools')
    .select('*, category:categories(*)')
    .eq('status', 'approved')
    .order('click_count', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching trending tools:', error);
    return [];
  }

  return data || [];
}

export async function getToolBySlug(slug: string): Promise<Tool | null> {
  const supabase = await createServerSupabaseClient();
  
  const { data, error } = await supabase
    .from('tools')
    .select('*, category:categories(*)')
    .eq('slug', slug)
    .eq('status', 'approved')
    .single();

  if (error) {
    console.error('Error fetching tool:', error);
    return null;
  }

  return data;
}

export async function getToolsByCategory(
  categorySlug: string,
  page = 1,
  limit = 24
): Promise<{ tools: Tool[]; total: number }> {
  const supabase = await createServerSupabaseClient();
  
  const offset = (page - 1) * limit;

  // First get the category
  const { data: category } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', categorySlug)
    .single();

  if (!category) {
    return { tools: [], total: 0 };
  }

  const { data, error, count } = await supabase
    .from('tools')
    .select('*, category:categories(*)', { count: 'exact' })
    .eq('category_id', category.id)
    .eq('status', 'approved')
    .order('is_featured', { ascending: false })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error('Error fetching tools by category:', error);
    return { tools: [], total: 0 };
  }

  return { tools: data || [], total: count || 0 };
}

export async function searchTools(
  params: SearchParams
): Promise<{ tools: Tool[]; total: number }> {
  const supabase = await createServerSupabaseClient();
  
  const { q, category, pricing, sort = 'newest', page = 1 } = params;
  const limit = 24;
  const offset = (page - 1) * limit;

  let query = supabase
    .from('tools')
    .select('*, category:categories(*)', { count: 'exact' })
    .eq('status', 'approved');

  // Text search
  if (q) {
    query = query.or(`name.ilike.%${q}%,tagline.ilike.%${q}%,description.ilike.%${q}%`);
  }

  // Category filter
  if (category) {
    const { data: cat } = await supabase
      .from('categories')
      .select('id')
      .eq('slug', category)
      .single();
    
    if (cat) {
      query = query.eq('category_id', cat.id);
    }
  }

  // Pricing filter
  if (pricing) {
    query = query.eq('pricing_type', pricing);
  }

  // Sorting
  switch (sort) {
    case 'popular':
      query = query.order('click_count', { ascending: false });
      break;
    case 'trending':
      query = query.order('upvotes', { ascending: false });
      break;
    case 'newest':
    default:
      query = query.order('created_at', { ascending: false });
  }

  const { data, error, count } = await query.range(offset, offset + limit - 1);

  if (error) {
    console.error('Error searching tools:', error);
    return { tools: [], total: 0 };
  }

  return { tools: data || [], total: count || 0 };
}

export async function getRelatedTools(tool: Tool, limit = 4): Promise<Tool[]> {
  const supabase = await createServerSupabaseClient();
  
  const { data, error } = await supabase
    .from('tools')
    .select('*, category:categories(*)')
    .eq('status', 'approved')
    .eq('category_id', tool.category_id)
    .neq('id', tool.id)
    .limit(limit);

  if (error) {
    console.error('Error fetching related tools:', error);
    return [];
  }

  return data || [];
}

export async function recordClick(toolId: string, referrer?: string, userAgent?: string) {
  const supabase = createAdminClient();
  
  // Record click
  await supabase.from('tool_clicks').insert({
    tool_id: toolId,
    referrer: referrer || null,
    user_agent: userAgent || null,
  });

  // Increment click count
  await supabase.rpc('increment_click_count', { tool_id: toolId });
}

export async function submitTool(data: {
  tool_name: string;
  website_url: string;
  description?: string;
  contact_email: string;
  is_owner: boolean;
}) {
  const supabase = await createServerSupabaseClient();
  
  const { error } = await supabase.from('submissions').insert(data);

  if (error) {
    throw new Error('Failed to submit tool');
  }

  return { success: true };
}

export async function getToolStats() {
  const supabase = await createServerSupabaseClient();
  
  const [toolsResult, categoriesResult] = await Promise.all([
    supabase.from('tools').select('id', { count: 'exact' }).eq('status', 'approved'),
    supabase.from('categories').select('id', { count: 'exact' }),
  ]);

  return {
    tools: toolsResult.count || 0,
    categories: categoriesResult.count || 0,
  };
}

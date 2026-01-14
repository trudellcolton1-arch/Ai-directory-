-- AI Directory Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Tools table
CREATE TABLE IF NOT EXISTS tools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  tagline TEXT NOT NULL,
  description TEXT,
  website_url TEXT NOT NULL,
  logo_url TEXT,
  screenshot_url TEXT,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  tags TEXT[] DEFAULT '{}',
  pricing_type TEXT DEFAULT 'free' CHECK (pricing_type IN ('free', 'freemium', 'paid', 'enterprise')),
  starting_price TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_verified BOOLEAN DEFAULT false,
  affiliate_url TEXT,
  upvotes INT DEFAULT 0,
  click_count INT DEFAULT 0,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  submitted_by UUID,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  featured_until TIMESTAMPTZ
);

-- Tool clicks for analytics
CREATE TABLE IF NOT EXISTS tool_clicks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tool_id UUID REFERENCES tools(id) ON DELETE CASCADE,
  clicked_at TIMESTAMPTZ DEFAULT now(),
  referrer TEXT,
  user_agent TEXT,
  ip_hash TEXT
);

-- Submissions from users
CREATE TABLE IF NOT EXISTS submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tool_name TEXT NOT NULL,
  website_url TEXT NOT NULL,
  description TEXT,
  contact_email TEXT NOT NULL,
  is_owner BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Featured purchases
CREATE TABLE IF NOT EXISTS featured_purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tool_id UUID REFERENCES tools(id) ON DELETE SET NULL,
  stripe_payment_id TEXT,
  amount_cents INT,
  duration_days INT,
  starts_at TIMESTAMPTZ DEFAULT now(),
  ends_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_tools_category ON tools(category_id);
CREATE INDEX IF NOT EXISTS idx_tools_status ON tools(status);
CREATE INDEX IF NOT EXISTS idx_tools_featured ON tools(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_tools_slug ON tools(slug);
CREATE INDEX IF NOT EXISTS idx_tools_created ON tools(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_tool_clicks_tool_id ON tool_clicks(tool_id);
CREATE INDEX IF NOT EXISTS idx_tool_clicks_time ON tool_clicks(clicked_at);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);

-- Function to increment click count
CREATE OR REPLACE FUNCTION increment_click_count(tool_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE tools 
  SET click_count = click_count + 1,
      updated_at = now()
  WHERE id = tool_id;
END;
$$ LANGUAGE plpgsql;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
DROP TRIGGER IF EXISTS tools_updated_at ON tools;
CREATE TRIGGER tools_updated_at
  BEFORE UPDATE ON tools
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Row Level Security
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tool_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE featured_purchases ENABLE ROW LEVEL SECURITY;

-- Public read access for approved tools
DROP POLICY IF EXISTS "Public can view approved tools" ON tools;
CREATE POLICY "Public can view approved tools" ON tools
  FOR SELECT USING (status = 'approved');

-- Public read access for categories
DROP POLICY IF EXISTS "Public can view categories" ON categories;
CREATE POLICY "Public can view categories" ON categories
  FOR SELECT USING (true);

-- Service role has full access (for API routes)
DROP POLICY IF EXISTS "Service role full access tools" ON tools;
CREATE POLICY "Service role full access tools" ON tools
  FOR ALL USING (true);

DROP POLICY IF EXISTS "Service role full access submissions" ON submissions;
CREATE POLICY "Service role full access submissions" ON submissions
  FOR ALL USING (true);

DROP POLICY IF EXISTS "Service role full access clicks" ON tool_clicks;
CREATE POLICY "Service role full access clicks" ON tool_clicks
  FOR ALL USING (true);

DROP POLICY IF EXISTS "Service role full access purchases" ON featured_purchases;
CREATE POLICY "Service role full access purchases" ON featured_purchases
  FOR ALL USING (true);

-- Seed initial categories
INSERT INTO categories (name, slug, icon, display_order) VALUES
  ('Writing & Content', 'writing', '✍️', 1),
  ('Image Generation', 'image-generation', '🖼️', 2),
  ('Video & Animation', 'video', '🎬', 3),
  ('Audio & Music', 'audio', '🎵', 4),
  ('Coding & Development', 'coding', '💻', 5),
  ('Productivity', 'productivity', '⚡', 6),
  ('Marketing & SEO', 'marketing', '📈', 7),
  ('Data & Analytics', 'data', '📊', 8),
  ('Chatbots & Assistants', 'chatbots', '🤖', 9),
  ('Design & Creative', 'design', '🎨', 10),
  ('Business & Finance', 'business', '💼', 11),
  ('Education & Research', 'education', '📚', 12)
ON CONFLICT (slug) DO NOTHING;

-- Example tool (remove in production)
INSERT INTO tools (name, slug, tagline, description, website_url, category_id, pricing_type, status, tags)
SELECT 
  'ChatGPT',
  'chatgpt',
  'AI-powered conversational assistant by OpenAI',
  'ChatGPT is an AI language model developed by OpenAI that can understand and generate human-like text. It can help with writing, coding, analysis, and creative tasks.',
  'https://chat.openai.com',
  id,
  'freemium',
  'approved',
  ARRAY['chatbot', 'writing', 'coding', 'popular']
FROM categories WHERE slug = 'chatbots'
ON CONFLICT (slug) DO NOTHING;

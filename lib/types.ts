export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  display_order: number;
  created_at: string;
  tool_count?: number;
}

export interface Tool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string | null;
  website_url: string;
  logo_url: string | null;
  screenshot_url: string | null;
  category_id: string | null;
  category?: Category;
  tags: string[];
  pricing_type: 'free' | 'freemium' | 'paid' | 'enterprise';
  starting_price: string | null;
  is_featured: boolean;
  is_verified: boolean;
  affiliate_url: string | null;
  upvotes: number;
  click_count: number;
  status: 'pending' | 'approved' | 'rejected';
  submitted_by: string | null;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
  featured_until: string | null;
}

export interface Submission {
  id: string;
  tool_name: string;
  website_url: string;
  description: string | null;
  contact_email: string;
  is_owner: boolean;
  status: 'pending' | 'approved' | 'rejected';
  notes: string | null;
  created_at: string;
}

export interface FeaturedPurchase {
  id: string;
  tool_id: string;
  stripe_payment_id: string | null;
  amount_cents: number;
  duration_days: number;
  starts_at: string;
  ends_at: string | null;
  created_at: string;
}

export interface ToolClick {
  id: string;
  tool_id: string;
  clicked_at: string;
  referrer: string | null;
  user_agent: string | null;
  ip_hash: string | null;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
  stripePriceId: string;
}

export interface SearchParams {
  q?: string;
  category?: string;
  pricing?: string;
  sort?: 'newest' | 'popular' | 'trending';
  page?: number;
}

export interface PageProps {
  params: { slug: string };
  searchParams: SearchParams;
}

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: Category;
        Insert: Omit<Category, 'id' | 'created_at'>;
        Update: Partial<Omit<Category, 'id' | 'created_at'>>;
      };
      tools: {
        Row: Tool;
        Insert: Omit<Tool, 'id' | 'created_at' | 'updated_at' | 'upvotes' | 'click_count'>;
        Update: Partial<Omit<Tool, 'id' | 'created_at' | 'updated_at'>>;
      };
      submissions: {
        Row: Submission;
        Insert: Omit<Submission, 'id' | 'created_at' | 'status' | 'notes'>;
        Update: Partial<Omit<Submission, 'id' | 'created_at'>>;
      };
      tool_clicks: {
        Row: ToolClick;
        Insert: Omit<ToolClick, 'id' | 'clicked_at'>;
        Update: Partial<Omit<ToolClick, 'id' | 'clicked_at'>>;
      };
      featured_purchases: {
        Row: FeaturedPurchase;
        Insert: Omit<FeaturedPurchase, 'id' | 'created_at'>;
        Update: Partial<Omit<FeaturedPurchase, 'id' | 'created_at'>>;
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      increment_click_count: {
        Args: { tool_id: string };
        Returns: void;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

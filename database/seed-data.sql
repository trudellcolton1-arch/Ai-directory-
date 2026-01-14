-- Seed Data: Popular AI Tools
-- Run this AFTER the main migration.sql

-- Get category IDs for reference
DO $$
DECLARE
  cat_writing UUID;
  cat_image UUID;
  cat_video UUID;
  cat_audio UUID;
  cat_coding UUID;
  cat_productivity UUID;
  cat_marketing UUID;
  cat_chatbots UUID;
  cat_design UUID;
BEGIN
  SELECT id INTO cat_writing FROM categories WHERE slug = 'writing';
  SELECT id INTO cat_image FROM categories WHERE slug = 'image-generation';
  SELECT id INTO cat_video FROM categories WHERE slug = 'video';
  SELECT id INTO cat_audio FROM categories WHERE slug = 'audio';
  SELECT id INTO cat_coding FROM categories WHERE slug = 'coding';
  SELECT id INTO cat_productivity FROM categories WHERE slug = 'productivity';
  SELECT id INTO cat_marketing FROM categories WHERE slug = 'marketing';
  SELECT id INTO cat_chatbots FROM categories WHERE slug = 'chatbots';
  SELECT id INTO cat_design FROM categories WHERE slug = 'design';

  -- Chatbots & Assistants
  INSERT INTO tools (name, slug, tagline, description, website_url, category_id, pricing_type, status, tags, logo_url) VALUES
  ('ChatGPT', 'chatgpt', 'AI-powered conversational assistant by OpenAI', 'ChatGPT is an AI language model that can understand and generate human-like text. Perfect for writing, coding, analysis, and creative tasks.', 'https://chat.openai.com', cat_chatbots, 'freemium', 'approved', ARRAY['chatbot', 'writing', 'coding', 'popular'], 'https://logo.clearbit.com/openai.com'),
  ('Claude', 'claude', 'Helpful, harmless, and honest AI assistant by Anthropic', 'Claude is an AI assistant trained to be helpful, harmless, and honest. Excellent for analysis, writing, coding, and research tasks.', 'https://claude.ai', cat_chatbots, 'freemium', 'approved', ARRAY['chatbot', 'writing', 'analysis', 'popular'], 'https://logo.clearbit.com/anthropic.com'),
  ('Gemini', 'gemini', 'Google''s most capable AI model', 'Gemini is Google''s largest and most capable AI model, built to be multimodal from the ground up.', 'https://gemini.google.com', cat_chatbots, 'freemium', 'approved', ARRAY['chatbot', 'multimodal', 'google'], 'https://logo.clearbit.com/google.com'),
  ('Perplexity', 'perplexity', 'AI-powered answer engine with real-time search', 'Perplexity combines AI with real-time web search to provide accurate, sourced answers to your questions.', 'https://perplexity.ai', cat_chatbots, 'freemium', 'approved', ARRAY['search', 'research', 'answers'], 'https://logo.clearbit.com/perplexity.ai')
  ON CONFLICT (slug) DO UPDATE SET logo_url = EXCLUDED.logo_url;

  -- Image Generation
  INSERT INTO tools (name, slug, tagline, description, website_url, category_id, pricing_type, status, tags, logo_url) VALUES
  ('Midjourney', 'midjourney', 'AI art generator creating stunning images from text', 'Midjourney is an AI-powered tool that generates images from natural language descriptions, known for artistic and creative outputs.', 'https://midjourney.com', cat_image, 'paid', 'approved', ARRAY['art', 'image', 'creative', 'popular'], 'https://logo.clearbit.com/midjourney.com'),
  ('DALL-E 3', 'dall-e-3', 'OpenAI''s advanced image generation model', 'DALL-E 3 creates realistic images and art from natural language descriptions with improved accuracy and detail.', 'https://openai.com/dall-e-3', cat_image, 'paid', 'approved', ARRAY['image', 'art', 'openai'], 'https://logo.clearbit.com/openai.com'),
  ('Stable Diffusion', 'stable-diffusion', 'Open-source AI image generation model', 'Stable Diffusion is an open-source AI model that generates images from text prompts, available for local use and customization.', 'https://stability.ai', cat_image, 'freemium', 'approved', ARRAY['image', 'open-source', 'art'], 'https://logo.clearbit.com/stability.ai'),
  ('Leonardo AI', 'leonardo-ai', 'AI image generation for game assets and art', 'Leonardo AI specializes in generating game assets, concept art, and creative images with fine-tuned control.', 'https://leonardo.ai', cat_image, 'freemium', 'approved', ARRAY['image', 'gaming', 'art'], 'https://logo.clearbit.com/leonardo.ai'),
  ('Ideogram', 'ideogram', 'AI image generator with excellent text rendering', 'Ideogram excels at generating images with accurate text, logos, and typography embedded naturally.', 'https://ideogram.ai', cat_image, 'freemium', 'approved', ARRAY['image', 'text', 'logos'], 'https://logo.clearbit.com/ideogram.ai')
  ON CONFLICT (slug) DO UPDATE SET logo_url = EXCLUDED.logo_url;

  -- Writing & Content
  INSERT INTO tools (name, slug, tagline, description, website_url, category_id, pricing_type, status, tags, logo_url) VALUES
  ('Jasper', 'jasper', 'AI writing assistant for marketing teams', 'Jasper helps marketing teams create high-quality content faster with AI-powered writing assistance.', 'https://jasper.ai', cat_writing, 'paid', 'approved', ARRAY['writing', 'marketing', 'content'], 'https://logo.clearbit.com/jasper.ai'),
  ('Copy.ai', 'copy-ai', 'AI copywriting tool for marketing content', 'Copy.ai generates marketing copy, blog posts, and social media content using AI.', 'https://copy.ai', cat_writing, 'freemium', 'approved', ARRAY['writing', 'copywriting', 'marketing'], 'https://logo.clearbit.com/copy.ai'),
  ('Writesonic', 'writesonic', 'AI writer for blogs, ads, and more', 'Writesonic creates SEO-optimized content, ads, and product descriptions using AI.', 'https://writesonic.com', cat_writing, 'freemium', 'approved', ARRAY['writing', 'seo', 'content'], 'https://logo.clearbit.com/writesonic.com'),
  ('Grammarly', 'grammarly', 'AI-powered writing assistant', 'Grammarly helps you write mistake-free with AI-powered grammar, spelling, and style suggestions.', 'https://grammarly.com', cat_writing, 'freemium', 'approved', ARRAY['writing', 'grammar', 'editing', 'popular'], 'https://logo.clearbit.com/grammarly.com'),
  ('QuillBot', 'quillbot', 'AI paraphrasing and writing tool', 'QuillBot helps you rewrite and paraphrase text while maintaining meaning and improving clarity.', 'https://quillbot.com', cat_writing, 'freemium', 'approved', ARRAY['writing', 'paraphrase', 'editing'], 'https://logo.clearbit.com/quillbot.com')
  ON CONFLICT (slug) DO UPDATE SET logo_url = EXCLUDED.logo_url;

  -- Coding & Development
  INSERT INTO tools (name, slug, tagline, description, website_url, category_id, pricing_type, status, tags, logo_url) VALUES
  ('GitHub Copilot', 'github-copilot', 'AI pair programmer that helps you write code faster', 'GitHub Copilot suggests code completions and entire functions as you type, trained on billions of lines of code.', 'https://github.com/features/copilot', cat_coding, 'paid', 'approved', ARRAY['coding', 'autocomplete', 'popular'], 'https://logo.clearbit.com/github.com'),
  ('Cursor', 'cursor', 'AI-first code editor built for pair programming', 'Cursor is a code editor designed around AI, helping you write, edit, and understand code faster.', 'https://cursor.sh', cat_coding, 'freemium', 'approved', ARRAY['coding', 'editor', 'ide'], 'https://logo.clearbit.com/cursor.sh'),
  ('Replit', 'replit', 'AI-powered coding platform in your browser', 'Replit is a collaborative coding platform with AI features for building and deploying apps.', 'https://replit.com', cat_coding, 'freemium', 'approved', ARRAY['coding', 'ide', 'collaboration'], 'https://logo.clearbit.com/replit.com'),
  ('Tabnine', 'tabnine', 'AI code completion for all languages', 'Tabnine provides AI-powered code completions that run locally or in the cloud.', 'https://tabnine.com', cat_coding, 'freemium', 'approved', ARRAY['coding', 'autocomplete', 'privacy'], 'https://logo.clearbit.com/tabnine.com'),
  ('Codeium', 'codeium', 'Free AI code completion and chat', 'Codeium offers free AI-powered code completion and chat for developers.', 'https://codeium.com', cat_coding, 'free', 'approved', ARRAY['coding', 'autocomplete', 'free'], 'https://logo.clearbit.com/codeium.com')
  ON CONFLICT (slug) DO UPDATE SET logo_url = EXCLUDED.logo_url;

  -- Video & Animation
  INSERT INTO tools (name, slug, tagline, description, website_url, category_id, pricing_type, status, tags, logo_url) VALUES
  ('Runway', 'runway', 'AI-powered creative tools for video', 'Runway offers AI tools for video editing, generation, and visual effects.', 'https://runway.ml', cat_video, 'freemium', 'approved', ARRAY['video', 'editing', 'vfx'], 'https://logo.clearbit.com/runwayml.com'),
  ('Synthesia', 'synthesia', 'AI video generation with virtual avatars', 'Synthesia creates professional videos with AI avatars from text scripts.', 'https://synthesia.io', cat_video, 'paid', 'approved', ARRAY['video', 'avatars', 'training'], 'https://logo.clearbit.com/synthesia.io'),
  ('HeyGen', 'heygen', 'AI video generator with realistic avatars', 'HeyGen creates spokesperson videos using AI avatars and voice cloning.', 'https://heygen.com', cat_video, 'freemium', 'approved', ARRAY['video', 'avatars', 'marketing'], 'https://logo.clearbit.com/heygen.com'),
  ('Descript', 'descript', 'AI-powered video and podcast editor', 'Descript makes editing video and podcasts as easy as editing a document.', 'https://descript.com', cat_video, 'freemium', 'approved', ARRAY['video', 'podcast', 'editing'], 'https://logo.clearbit.com/descript.com'),
  ('Pika', 'pika', 'AI video generation and editing platform', 'Pika creates and edits videos using AI with text-to-video capabilities.', 'https://pika.art', cat_video, 'freemium', 'approved', ARRAY['video', 'generation', 'creative'], 'https://logo.clearbit.com/pika.art')
  ON CONFLICT (slug) DO UPDATE SET logo_url = EXCLUDED.logo_url;

  -- Audio & Music
  INSERT INTO tools (name, slug, tagline, description, website_url, category_id, pricing_type, status, tags, logo_url) VALUES
  ('ElevenLabs', 'elevenlabs', 'AI voice generation and cloning', 'ElevenLabs creates realistic AI voices and can clone voices from audio samples.', 'https://elevenlabs.io', cat_audio, 'freemium', 'approved', ARRAY['voice', 'tts', 'cloning', 'popular'], 'https://logo.clearbit.com/elevenlabs.io'),
  ('Suno', 'suno', 'AI music generation from text prompts', 'Suno creates full songs with vocals and instruments from text descriptions.', 'https://suno.ai', cat_audio, 'freemium', 'approved', ARRAY['music', 'generation', 'creative'], 'https://logo.clearbit.com/suno.ai'),
  ('Murf', 'murf', 'AI voice generator for voiceovers', 'Murf creates studio-quality voiceovers using AI voices in multiple languages.', 'https://murf.ai', cat_audio, 'freemium', 'approved', ARRAY['voice', 'voiceover', 'tts'], 'https://logo.clearbit.com/murf.ai'),
  ('AIVA', 'aiva', 'AI music composer for content creators', 'AIVA composes emotional soundtrack music using AI for videos and games.', 'https://aiva.ai', cat_audio, 'freemium', 'approved', ARRAY['music', 'composition', 'soundtrack'], 'https://logo.clearbit.com/aiva.ai'),
  ('Speechify', 'speechify', 'AI text-to-speech reader', 'Speechify converts text to natural-sounding speech for listening to documents and articles.', 'https://speechify.com', cat_audio, 'freemium', 'approved', ARRAY['tts', 'reading', 'accessibility'], 'https://logo.clearbit.com/speechify.com')
  ON CONFLICT (slug) DO UPDATE SET logo_url = EXCLUDED.logo_url;

  -- Productivity
  INSERT INTO tools (name, slug, tagline, description, website_url, category_id, pricing_type, status, tags, logo_url) VALUES
  ('Notion AI', 'notion-ai', 'AI writing assistant built into Notion', 'Notion AI helps you write, brainstorm, and organize within your Notion workspace.', 'https://notion.so/product/ai', cat_productivity, 'paid', 'approved', ARRAY['writing', 'notes', 'organization'], 'https://logo.clearbit.com/notion.so'),
  ('Otter.ai', 'otter-ai', 'AI meeting transcription and notes', 'Otter.ai automatically transcribes meetings and generates summaries and action items.', 'https://otter.ai', cat_productivity, 'freemium', 'approved', ARRAY['transcription', 'meetings', 'notes'], 'https://logo.clearbit.com/otter.ai'),
  ('Mem', 'mem', 'AI-powered personal knowledge base', 'Mem organizes your notes and surfaces relevant information using AI.', 'https://mem.ai', cat_productivity, 'freemium', 'approved', ARRAY['notes', 'knowledge', 'organization'], 'https://logo.clearbit.com/mem.ai'),
  ('Reclaim', 'reclaim', 'AI calendar scheduling assistant', 'Reclaim automatically schedules tasks, habits, and meetings on your calendar.', 'https://reclaim.ai', cat_productivity, 'freemium', 'approved', ARRAY['calendar', 'scheduling', 'time'], 'https://logo.clearbit.com/reclaim.ai'),
  ('Taskade', 'taskade', 'AI-powered productivity workspace', 'Taskade combines task management, notes, and AI assistance in one platform.', 'https://taskade.com', cat_productivity, 'freemium', 'approved', ARRAY['tasks', 'collaboration', 'notes'], 'https://logo.clearbit.com/taskade.com')
  ON CONFLICT (slug) DO UPDATE SET logo_url = EXCLUDED.logo_url;

  -- Design & Creative
  INSERT INTO tools (name, slug, tagline, description, website_url, category_id, pricing_type, status, tags, logo_url) VALUES
  ('Canva', 'canva', 'Design platform with AI-powered features', 'Canva makes design easy with templates and AI tools for image generation and editing.', 'https://canva.com', cat_design, 'freemium', 'approved', ARRAY['design', 'graphics', 'templates', 'popular'], 'https://logo.clearbit.com/canva.com'),
  ('Figma AI', 'figma-ai', 'AI features for UI/UX design in Figma', 'Figma AI adds intelligent features to the popular design tool for faster workflows.', 'https://figma.com', cat_design, 'freemium', 'approved', ARRAY['design', 'ui', 'ux'], 'https://logo.clearbit.com/figma.com'),
  ('Khroma', 'khroma', 'AI color palette generator', 'Khroma learns your color preferences and generates unlimited palettes you''ll love.', 'https://khroma.co', cat_design, 'free', 'approved', ARRAY['design', 'colors', 'palette'], 'https://logo.clearbit.com/khroma.co'),
  ('Looka', 'looka', 'AI-powered logo maker', 'Looka creates professional logos and brand identity using AI.', 'https://looka.com', cat_design, 'freemium', 'approved', ARRAY['logo', 'branding', 'design'], 'https://logo.clearbit.com/looka.com'),
  ('Uizard', 'uizard', 'AI-powered UI design tool', 'Uizard transforms sketches and screenshots into editable UI designs using AI.', 'https://uizard.io', cat_design, 'freemium', 'approved', ARRAY['ui', 'prototyping', 'design'], 'https://logo.clearbit.com/uizard.io')
  ON CONFLICT (slug) DO UPDATE SET logo_url = EXCLUDED.logo_url;

  -- Marketing & SEO
  INSERT INTO tools (name, slug, tagline, description, website_url, category_id, pricing_type, status, tags, logo_url) VALUES
  ('Surfer SEO', 'surfer-seo', 'AI-powered SEO content optimization', 'Surfer SEO analyzes top-ranking pages and helps you optimize content for search engines.', 'https://surferseo.com', cat_marketing, 'paid', 'approved', ARRAY['seo', 'content', 'optimization'], 'https://logo.clearbit.com/surferseo.com'),
  ('Clearscope', 'clearscope', 'AI content optimization for SEO', 'Clearscope helps you create content that ranks by analyzing top-performing pages.', 'https://clearscope.io', cat_marketing, 'paid', 'approved', ARRAY['seo', 'content', 'writing'], 'https://logo.clearbit.com/clearscope.io'),
  ('Frase', 'frase', 'AI content research and writing tool', 'Frase helps you research, write, and optimize content for search engines.', 'https://frase.io', cat_marketing, 'freemium', 'approved', ARRAY['seo', 'research', 'writing'], 'https://logo.clearbit.com/frase.io'),
  ('MarketMuse', 'marketmuse', 'AI content strategy platform', 'MarketMuse uses AI to plan content strategy and identify gaps in your coverage.', 'https://marketmuse.com', cat_marketing, 'paid', 'approved', ARRAY['content', 'strategy', 'seo'], 'https://logo.clearbit.com/marketmuse.com'),
  ('Phrasee', 'phrasee', 'AI copywriting for email marketing', 'Phrasee generates and optimizes email subject lines and copy using AI.', 'https://phrasee.co', cat_marketing, 'enterprise', 'approved', ARRAY['email', 'copywriting', 'marketing'], 'https://logo.clearbit.com/phrasee.co')
  ON CONFLICT (slug) DO UPDATE SET logo_url = EXCLUDED.logo_url;

END $$;

-- Update click counts for popular tools (makes homepage look active)
UPDATE tools SET click_count = floor(random() * 500 + 100)::int WHERE status = 'approved';
UPDATE tools SET upvotes = floor(random() * 100 + 10)::int WHERE status = 'approved';

-- Mark some tools as featured for initial display
UPDATE tools SET is_featured = true, is_verified = true
WHERE slug IN ('chatgpt', 'midjourney', 'github-copilot', 'elevenlabs', 'notion-ai', 'canva');

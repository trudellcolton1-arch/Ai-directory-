-- 100 New AI Tools to Add
-- Run this in your Supabase SQL Editor
-- These tools are unique and not duplicates of existing tools

-- ============================================
-- PRODUCTIVITY (10 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Notion AI', 'notion-ai', 'AI-powered workspace', 'AI assistant built into Notion for writing, summarizing, and brainstorming.', 'https://notion.so/ai', 'https://logo.clearbit.com/notion.so', 'freemium', 'approved', id FROM categories WHERE slug = 'productivity';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Mem', 'mem', 'AI-powered note-taking', 'Self-organizing workspace that uses AI to surface relevant information.', 'https://mem.ai', 'https://logo.clearbit.com/mem.ai', 'freemium', 'approved', id FROM categories WHERE slug = 'productivity';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Taskade', 'taskade', 'AI task management', 'AI-powered productivity tool for tasks, notes, and collaboration.', 'https://taskade.com', 'https://logo.clearbit.com/taskade.com', 'freemium', 'approved', id FROM categories WHERE slug = 'productivity';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Reclaim.ai', 'reclaim-ai', 'AI calendar assistant', 'Smart scheduling that defends your time and auto-schedules tasks.', 'https://reclaim.ai', 'https://logo.clearbit.com/reclaim.ai', 'freemium', 'approved', id FROM categories WHERE slug = 'productivity';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Motion', 'motion', 'AI calendar planner', 'Automatically plans your day and prioritizes tasks.', 'https://usemotion.com', 'https://logo.clearbit.com/usemotion.com', 'paid', 'approved', id FROM categories WHERE slug = 'productivity';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Clockwise', 'clockwise', 'AI time management', 'Optimizes calendars for focus time across teams.', 'https://clockwise.com', 'https://logo.clearbit.com/clockwise.com', 'freemium', 'approved', id FROM categories WHERE slug = 'productivity';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Otter.ai', 'otter-ai', 'AI meeting notes', 'Transcribes meetings and generates summaries automatically.', 'https://otter.ai', 'https://logo.clearbit.com/otter.ai', 'freemium', 'approved', id FROM categories WHERE slug = 'productivity';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Fireflies.ai', 'fireflies-ai', 'AI meeting assistant', 'Records, transcribes, and analyzes conversations.', 'https://fireflies.ai', 'https://logo.clearbit.com/fireflies.ai', 'freemium', 'approved', id FROM categories WHERE slug = 'productivity';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Tldv', 'tldv', 'AI meeting recorder', 'Record Google Meet and Zoom with AI summaries.', 'https://tldv.io', 'https://logo.clearbit.com/tldv.io', 'freemium', 'approved', id FROM categories WHERE slug = 'productivity';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Fathom', 'fathom', 'Free AI notetaker', 'Records, transcribes, and summarizes meetings for free.', 'https://fathom.video', 'https://logo.clearbit.com/fathom.video', 'free', 'approved', id FROM categories WHERE slug = 'productivity';

-- ============================================
-- MARKETING & SEO (10 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Surfer SEO', 'surfer-seo', 'AI SEO optimization', 'AI-powered content optimization for better rankings.', 'https://surferseo.com', 'https://logo.clearbit.com/surferseo.com', 'paid', 'approved', id FROM categories WHERE slug = 'marketing';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Clearscope', 'clearscope', 'Content optimization', 'AI-driven content optimization for SEO.', 'https://clearscope.io', 'https://logo.clearbit.com/clearscope.io', 'paid', 'approved', id FROM categories WHERE slug = 'marketing';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Frase', 'frase', 'AI content research', 'Research, write, and optimize SEO content.', 'https://frase.io', 'https://logo.clearbit.com/frase.io', 'paid', 'approved', id FROM categories WHERE slug = 'marketing';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'MarketMuse', 'marketmuse', 'AI content strategy', 'Content planning and optimization platform.', 'https://marketmuse.com', 'https://logo.clearbit.com/marketmuse.com', 'paid', 'approved', id FROM categories WHERE slug = 'marketing';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Semrush AI', 'semrush-ai', 'AI marketing toolkit', 'Comprehensive SEO and marketing with AI features.', 'https://semrush.com', 'https://logo.clearbit.com/semrush.com', 'freemium', 'approved', id FROM categories WHERE slug = 'marketing';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Phrasee', 'phrasee', 'AI marketing language', 'Generate on-brand marketing copy at scale.', 'https://phrasee.co', 'https://logo.clearbit.com/phrasee.co', 'enterprise', 'approved', id FROM categories WHERE slug = 'marketing';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Persado', 'persado', 'AI content generation', 'AI that generates personalized marketing messages.', 'https://persado.com', 'https://logo.clearbit.com/persado.com', 'enterprise', 'approved', id FROM categories WHERE slug = 'marketing';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Seventh Sense', 'seventh-sense', 'AI email timing', 'AI-optimized email send times.', 'https://theseventhsense.com', 'https://logo.clearbit.com/theseventhsense.com', 'paid', 'approved', id FROM categories WHERE slug = 'marketing';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Albert AI', 'albert-ai', 'AI ad optimization', 'Autonomous AI for digital marketing campaigns.', 'https://albert.ai', 'https://logo.clearbit.com/albert.ai', 'enterprise', 'approved', id FROM categories WHERE slug = 'marketing';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Adzooma', 'adzooma', 'AI ad management', 'Manage Google, Facebook, and Microsoft ads with AI.', 'https://adzooma.com', 'https://logo.clearbit.com/adzooma.com', 'freemium', 'approved', id FROM categories WHERE slug = 'marketing';

-- ============================================
-- DATA & ANALYTICS (8 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Obviously AI', 'obviously-ai', 'No-code ML predictions', 'Build ML models without coding.', 'https://obviously.ai', 'https://logo.clearbit.com/obviously.ai', 'paid', 'approved', id FROM categories WHERE slug = 'data';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'DataRobot', 'datarobot', 'Enterprise AI platform', 'Automated machine learning for enterprise.', 'https://datarobot.com', 'https://logo.clearbit.com/datarobot.com', 'enterprise', 'approved', id FROM categories WHERE slug = 'data';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'MonkeyLearn', 'monkeylearn', 'Text analytics AI', 'No-code text analytics and sentiment analysis.', 'https://monkeylearn.com', 'https://logo.clearbit.com/monkeylearn.com', 'freemium', 'approved', id FROM categories WHERE slug = 'data';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Akkio', 'akkio', 'AI for business data', 'No-code predictive AI for business teams.', 'https://akkio.com', 'https://logo.clearbit.com/akkio.com', 'paid', 'approved', id FROM categories WHERE slug = 'data';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'MindsDB', 'mindsdb', 'AI in databases', 'Add machine learning to your database with SQL.', 'https://mindsdb.com', 'https://logo.clearbit.com/mindsdb.com', 'freemium', 'approved', id FROM categories WHERE slug = 'data';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Pecan AI', 'pecan-ai', 'Predictive analytics', 'Low-code predictive analytics platform.', 'https://pecan.ai', 'https://logo.clearbit.com/pecan.ai', 'enterprise', 'approved', id FROM categories WHERE slug = 'data';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Rows', 'rows', 'AI spreadsheets', 'Spreadsheet with built-in AI and integrations.', 'https://rows.com', 'https://logo.clearbit.com/rows.com', 'freemium', 'approved', id FROM categories WHERE slug = 'data';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Julius AI', 'julius-ai', 'AI data analyst', 'Analyze data and create visualizations with AI.', 'https://julius.ai', 'https://logo.clearbit.com/julius.ai', 'freemium', 'approved', id FROM categories WHERE slug = 'data';

-- ============================================
-- DESIGN & CREATIVE (8 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Uizard', 'uizard', 'AI UI design', 'Turn sketches into digital designs with AI.', 'https://uizard.io', 'https://logo.clearbit.com/uizard.io', 'freemium', 'approved', id FROM categories WHERE slug = 'design';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Galileo AI', 'galileo-ai', 'AI interface design', 'Generate editable UI designs from text.', 'https://galileo.ai', 'https://logo.clearbit.com/galileo.ai', 'paid', 'approved', id FROM categories WHERE slug = 'design';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Khroma', 'khroma', 'AI color generator', 'AI-powered color palette generator.', 'https://khroma.co', 'https://logo.clearbit.com/khroma.co', 'free', 'approved', id FROM categories WHERE slug = 'design';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Looka', 'looka', 'AI logo maker', 'Create logos and brand identities with AI.', 'https://looka.com', 'https://logo.clearbit.com/looka.com', 'paid', 'approved', id FROM categories WHERE slug = 'design';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Designs.ai', 'designs-ai', 'AI design suite', 'Create logos, videos, and mockups with AI.', 'https://designs.ai', 'https://logo.clearbit.com/designs.ai', 'paid', 'approved', id FROM categories WHERE slug = 'design';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Brandmark', 'brandmark', 'AI branding tool', 'Generate logos and brand assets instantly.', 'https://brandmark.io', 'https://logo.clearbit.com/brandmark.io', 'paid', 'approved', id FROM categories WHERE slug = 'design';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Magician', 'magician-figma', 'AI for Figma', 'AI-powered design tool for Figma.', 'https://magician.design', 'https://logo.clearbit.com/magician.design', 'paid', 'approved', id FROM categories WHERE slug = 'design';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Photoroom', 'photoroom', 'AI photo editor', 'Remove backgrounds and edit photos with AI.', 'https://photoroom.com', 'https://logo.clearbit.com/photoroom.com', 'freemium', 'approved', id FROM categories WHERE slug = 'design';

-- ============================================
-- BUSINESS & FINANCE (8 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Tome', 'tome', 'AI presentations', 'Create stunning presentations with AI.', 'https://tome.app', 'https://logo.clearbit.com/tome.app', 'freemium', 'approved', id FROM categories WHERE slug = 'business';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Beautiful.ai', 'beautiful-ai', 'Smart presentations', 'AI-powered presentation design.', 'https://beautiful.ai', 'https://logo.clearbit.com/beautiful.ai', 'paid', 'approved', id FROM categories WHERE slug = 'business';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Gamma', 'gamma', 'AI slide creator', 'Create presentations from text prompts.', 'https://gamma.app', 'https://logo.clearbit.com/gamma.app', 'freemium', 'approved', id FROM categories WHERE slug = 'business';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Pitch', 'pitch', 'Collaborative presentations', 'Create and collaborate on presentations.', 'https://pitch.com', 'https://logo.clearbit.com/pitch.com', 'freemium', 'approved', id FROM categories WHERE slug = 'business';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Docusign AI', 'docusign-ai', 'AI contract analysis', 'AI-powered contract management.', 'https://docusign.com', 'https://logo.clearbit.com/docusign.com', 'paid', 'approved', id FROM categories WHERE slug = 'business';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Stampli', 'stampli', 'AI accounts payable', 'AI for invoice processing and AP automation.', 'https://stampli.com', 'https://logo.clearbit.com/stampli.com', 'paid', 'approved', id FROM categories WHERE slug = 'business';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Vic.ai', 'vic-ai', 'AI accounting', 'Autonomous accounting AI.', 'https://vic.ai', 'https://logo.clearbit.com/vic.ai', 'enterprise', 'approved', id FROM categories WHERE slug = 'business';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Truewind', 'truewind', 'AI bookkeeping', 'AI-powered bookkeeping for startups.', 'https://truewind.ai', 'https://logo.clearbit.com/truewind.ai', 'paid', 'approved', id FROM categories WHERE slug = 'business';

-- ============================================
-- EDUCATION (6 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Quizlet AI', 'quizlet-ai', 'AI study tools', 'AI-powered flashcards and study games.', 'https://quizlet.com', 'https://logo.clearbit.com/quizlet.com', 'freemium', 'approved', id FROM categories WHERE slug = 'education';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Duolingo Max', 'duolingo-max', 'AI language tutor', 'GPT-4 powered language learning.', 'https://duolingo.com', 'https://logo.clearbit.com/duolingo.com', 'paid', 'approved', id FROM categories WHERE slug = 'education';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Photomath', 'photomath', 'AI math solver', 'Scan and solve math problems instantly.', 'https://photomath.com', 'https://logo.clearbit.com/photomath.com', 'freemium', 'approved', id FROM categories WHERE slug = 'education';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Socratic', 'socratic', 'AI homework helper', 'Google AI for homework help.', 'https://socratic.org', 'https://logo.clearbit.com/socratic.org', 'free', 'approved', id FROM categories WHERE slug = 'education';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Synthesis Tutor', 'synthesis-tutor', 'AI math tutor', 'Personalized AI math tutoring.', 'https://synthesis.com', 'https://logo.clearbit.com/synthesis.com', 'paid', 'approved', id FROM categories WHERE slug = 'education';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Knowji', 'knowji', 'AI vocabulary learning', 'Learn vocabulary with spaced repetition AI.', 'https://knowji.com', 'https://logo.clearbit.com/knowji.com', 'paid', 'approved', id FROM categories WHERE slug = 'education';

-- ============================================
-- HEALTHCARE (6 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Ada Health', 'ada-health', 'AI symptom checker', 'AI-powered health assessment app.', 'https://ada.com', 'https://logo.clearbit.com/ada.com', 'free', 'approved', id FROM categories WHERE slug = 'healthcare';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'K Health', 'k-health', 'AI primary care', 'AI-powered primary care platform.', 'https://khealth.com', 'https://logo.clearbit.com/khealth.com', 'paid', 'approved', id FROM categories WHERE slug = 'healthcare';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Glass Health', 'glass-health', 'AI for clinicians', 'AI clinical decision support.', 'https://glass.health', 'https://logo.clearbit.com/glass.health', 'freemium', 'approved', id FROM categories WHERE slug = 'healthcare';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Viz.ai', 'viz-ai', 'AI medical imaging', 'AI-powered care coordination.', 'https://viz.ai', 'https://logo.clearbit.com/viz.ai', 'enterprise', 'approved', id FROM categories WHERE slug = 'healthcare';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Nabla', 'nabla', 'AI medical assistant', 'AI copilot for healthcare professionals.', 'https://nabla.com', 'https://logo.clearbit.com/nabla.com', 'paid', 'approved', id FROM categories WHERE slug = 'healthcare';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Abridge', 'abridge', 'AI medical scribe', 'Convert patient conversations to notes.', 'https://abridge.com', 'https://logo.clearbit.com/abridge.com', 'paid', 'approved', id FROM categories WHERE slug = 'healthcare';

-- ============================================
-- LEGAL (6 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Harvey AI', 'harvey-ai', 'AI for lawyers', 'Generative AI for legal professionals.', 'https://harvey.ai', 'https://logo.clearbit.com/harvey.ai', 'enterprise', 'approved', id FROM categories WHERE slug = 'legal';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Spellbook', 'spellbook', 'AI contract drafting', 'Draft contracts with AI in Microsoft Word.', 'https://spellbook.legal', 'https://logo.clearbit.com/spellbook.legal', 'paid', 'approved', id FROM categories WHERE slug = 'legal';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'DoNotPay', 'donotpay', 'AI robot lawyer', 'Fight corporations and bureaucracy with AI.', 'https://donotpay.com', 'https://logo.clearbit.com/donotpay.com', 'paid', 'approved', id FROM categories WHERE slug = 'legal';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'CoCounsel', 'cocounsel', 'AI legal assistant', 'Thomson Reuters AI assistant for legal.', 'https://casetext.com/cocounsel', 'https://logo.clearbit.com/casetext.com', 'enterprise', 'approved', id FROM categories WHERE slug = 'legal';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Ironclad AI', 'ironclad-ai', 'AI contract lifecycle', 'AI-powered contract management.', 'https://ironcladapp.com', 'https://logo.clearbit.com/ironcladapp.com', 'enterprise', 'approved', id FROM categories WHERE slug = 'legal';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Luminance', 'luminance', 'AI legal platform', 'AI for contract negotiation and analysis.', 'https://luminance.com', 'https://logo.clearbit.com/luminance.com', 'enterprise', 'approved', id FROM categories WHERE slug = 'legal';

-- ============================================
-- REAL ESTATE (4 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Reonomy', 'reonomy', 'AI property intelligence', 'Commercial real estate data and analytics.', 'https://reonomy.com', 'https://logo.clearbit.com/reonomy.com', 'paid', 'approved', id FROM categories WHERE slug = 'real-estate';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Skyline AI', 'skyline-ai', 'AI real estate investing', 'AI-powered commercial real estate insights.', 'https://skyline.ai', 'https://logo.clearbit.com/skyline.ai', 'enterprise', 'approved', id FROM categories WHERE slug = 'real-estate';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Ylopo', 'ylopo', 'AI real estate marketing', 'AI marketing for real estate agents.', 'https://ylopo.com', 'https://logo.clearbit.com/ylopo.com', 'paid', 'approved', id FROM categories WHERE slug = 'real-estate';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Restb.ai', 'restb-ai', 'AI image tagging', 'AI property image analysis for real estate.', 'https://restb.ai', 'https://logo.clearbit.com/restb.ai', 'paid', 'approved', id FROM categories WHERE slug = 'real-estate';

-- ============================================
-- HR & RECRUITING (6 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'HireVue', 'hirevue', 'AI video interviews', 'AI-powered video interviewing platform.', 'https://hirevue.com', 'https://logo.clearbit.com/hirevue.com', 'enterprise', 'approved', id FROM categories WHERE slug = 'hr-recruiting';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Paradox Olivia', 'paradox-olivia', 'AI recruiting assistant', 'Conversational AI for recruiting.', 'https://paradox.ai', 'https://logo.clearbit.com/paradox.ai', 'enterprise', 'approved', id FROM categories WHERE slug = 'hr-recruiting';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Eightfold AI', 'eightfold-ai', 'AI talent intelligence', 'AI platform for talent acquisition.', 'https://eightfold.ai', 'https://logo.clearbit.com/eightfold.ai', 'enterprise', 'approved', id FROM categories WHERE slug = 'hr-recruiting';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Fetcher', 'fetcher', 'AI sourcing automation', 'Automate candidate sourcing with AI.', 'https://fetcher.ai', 'https://logo.clearbit.com/fetcher.ai', 'paid', 'approved', id FROM categories WHERE slug = 'hr-recruiting';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Textio', 'textio', 'AI job postings', 'Augmented writing for job descriptions.', 'https://textio.com', 'https://logo.clearbit.com/textio.com', 'paid', 'approved', id FROM categories WHERE slug = 'hr-recruiting';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Beamery', 'beamery', 'AI talent management', 'AI-powered talent lifecycle management.', 'https://beamery.com', 'https://logo.clearbit.com/beamery.com', 'enterprise', 'approved', id FROM categories WHERE slug = 'hr-recruiting';

-- ============================================
-- GAMING (4 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Inworld AI', 'inworld-ai', 'AI game characters', 'Create AI-powered game NPCs.', 'https://inworld.ai', 'https://logo.clearbit.com/inworld.ai', 'freemium', 'approved', id FROM categories WHERE slug = 'gaming';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Scenario', 'scenario', 'AI game assets', 'Generate game art assets with AI.', 'https://scenario.com', 'https://logo.clearbit.com/scenario.com', 'freemium', 'approved', id FROM categories WHERE slug = 'gaming';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Ludo.ai', 'ludo-ai', 'AI game design', 'AI-powered game ideation tool.', 'https://ludo.ai', 'https://logo.clearbit.com/ludo.ai', 'freemium', 'approved', id FROM categories WHERE slug = 'gaming';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Promethean AI', 'promethean-ai', 'AI world building', 'AI assistant for 3D virtual world creation.', 'https://prometheanai.com', 'https://logo.clearbit.com/prometheanai.com', 'paid', 'approved', id FROM categories WHERE slug = 'gaming';

-- ============================================
-- 3D MODELING (4 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Kaedim', 'kaedim', 'Image to 3D', 'Turn images into 3D models with AI.', 'https://kaedim3d.com', 'https://logo.clearbit.com/kaedim3d.com', 'paid', 'approved', id FROM categories WHERE slug = '3d-modeling';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Meshy', 'meshy', 'AI 3D generator', 'Create 3D models from text or images.', 'https://meshy.ai', 'https://logo.clearbit.com/meshy.ai', 'freemium', 'approved', id FROM categories WHERE slug = '3d-modeling';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Spline AI', 'spline-ai', 'AI 3D design', 'Generate 3D objects with text prompts.', 'https://spline.design', 'https://logo.clearbit.com/spline.design', 'freemium', 'approved', id FROM categories WHERE slug = '3d-modeling';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Masterpiece Studio', 'masterpiece-studio', 'AI 3D creation', 'Create 3D assets using AI and VR.', 'https://masterpiecestudio.com', 'https://logo.clearbit.com/masterpiecestudio.com', 'freemium', 'approved', id FROM categories WHERE slug = '3d-modeling';

-- ============================================
-- TRANSLATION (4 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'DeepL', 'deepl', 'AI translation', 'Most accurate AI translator.', 'https://deepl.com', 'https://logo.clearbit.com/deepl.com', 'freemium', 'approved', id FROM categories WHERE slug = 'translation';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Unbabel', 'unbabel', 'AI translation platform', 'AI-powered human translation at scale.', 'https://unbabel.com', 'https://logo.clearbit.com/unbabel.com', 'enterprise', 'approved', id FROM categories WHERE slug = 'translation';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Smartling', 'smartling', 'AI localization', 'AI-powered translation management.', 'https://smartling.com', 'https://logo.clearbit.com/smartling.com', 'paid', 'approved', id FROM categories WHERE slug = 'translation';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Phrase', 'phrase', 'AI translation software', 'Localization and translation platform with AI.', 'https://phrase.com', 'https://logo.clearbit.com/phrase.com', 'paid', 'approved', id FROM categories WHERE slug = 'translation';

-- ============================================
-- E-COMMERCE (4 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Shopify Magic', 'shopify-magic', 'AI for e-commerce', 'AI tools built into Shopify.', 'https://shopify.com/magic', 'https://logo.clearbit.com/shopify.com', 'freemium', 'approved', id FROM categories WHERE slug = 'ecommerce';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Syte', 'syte', 'Visual AI for retail', 'AI-powered product discovery.', 'https://syte.ai', 'https://logo.clearbit.com/syte.ai', 'enterprise', 'approved', id FROM categories WHERE slug = 'ecommerce';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Lily AI', 'lily-ai', 'AI product attributes', 'AI for product tagging and attribution.', 'https://lily.ai', 'https://logo.clearbit.com/lily.ai', 'enterprise', 'approved', id FROM categories WHERE slug = 'ecommerce';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Nosto', 'nosto', 'AI personalization', 'Commerce experience platform with AI.', 'https://nosto.com', 'https://logo.clearbit.com/nosto.com', 'paid', 'approved', id FROM categories WHERE slug = 'ecommerce';

-- ============================================
-- SECURITY (4 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Darktrace', 'darktrace', 'AI cybersecurity', 'AI-powered cyber defense.', 'https://darktrace.com', 'https://logo.clearbit.com/darktrace.com', 'enterprise', 'approved', id FROM categories WHERE slug = 'security';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'SentinelOne', 'sentinelone', 'AI endpoint security', 'AI-powered endpoint protection.', 'https://sentinelone.com', 'https://logo.clearbit.com/sentinelone.com', 'enterprise', 'approved', id FROM categories WHERE slug = 'security';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Abnormal Security', 'abnormal-security', 'AI email security', 'AI-powered email threat prevention.', 'https://abnormalsecurity.com', 'https://logo.clearbit.com/abnormalsecurity.com', 'enterprise', 'approved', id FROM categories WHERE slug = 'security';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Vectra AI', 'vectra-ai', 'AI threat detection', 'AI-driven network threat detection.', 'https://vectra.ai', 'https://logo.clearbit.com/vectra.ai', 'enterprise', 'approved', id FROM categories WHERE slug = 'security';

-- ============================================
-- AUTOMATION (4 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Zapier AI', 'zapier-ai', 'AI automation', 'AI-powered workflow automation.', 'https://zapier.com', 'https://logo.clearbit.com/zapier.com', 'freemium', 'approved', id FROM categories WHERE slug = 'automation';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Make', 'make', 'Visual automation', 'No-code automation platform (formerly Integromat).', 'https://make.com', 'https://logo.clearbit.com/make.com', 'freemium', 'approved', id FROM categories WHERE slug = 'automation';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Bardeen', 'bardeen', 'AI task automation', 'Automate repetitive tasks with AI.', 'https://bardeen.ai', 'https://logo.clearbit.com/bardeen.ai', 'freemium', 'approved', id FROM categories WHERE slug = 'automation';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'n8n', 'n8n', 'Open workflow automation', 'Open-source workflow automation with AI.', 'https://n8n.io', 'https://logo.clearbit.com/n8n.io', 'freemium', 'approved', id FROM categories WHERE slug = 'automation';

-- ============================================
-- LIFESTYLE (4 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Youper', 'youper', 'AI mental health', 'AI-powered emotional health assistant.', 'https://youper.ai', 'https://logo.clearbit.com/youper.ai', 'freemium', 'approved', id FROM categories WHERE slug = 'lifestyle';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Woebot', 'woebot', 'AI therapy chatbot', 'Mental health support through AI.', 'https://woebothealth.com', 'https://logo.clearbit.com/woebothealth.com', 'free', 'approved', id FROM categories WHERE slug = 'lifestyle';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Wysa', 'wysa', 'AI wellness coach', 'AI chatbot for mental wellness.', 'https://wysa.com', 'https://logo.clearbit.com/wysa.com', 'freemium', 'approved', id FROM categories WHERE slug = 'lifestyle';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Lensa', 'lensa', 'AI photo magic', 'AI-powered selfie and photo editing.', 'https://lensa-ai.com', 'https://logo.clearbit.com/lensa-ai.com', 'freemium', 'approved', id FROM categories WHERE slug = 'lifestyle';

-- ============================================
-- RESEARCH (4 tools)
-- ============================================
INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Elicit', 'elicit', 'AI research assistant', 'Automate research workflows with AI.', 'https://elicit.org', 'https://logo.clearbit.com/elicit.org', 'freemium', 'approved', id FROM categories WHERE slug = 'research';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Consensus', 'consensus', 'AI research search', 'Search for scientific papers with AI.', 'https://consensus.app', 'https://logo.clearbit.com/consensus.app', 'freemium', 'approved', id FROM categories WHERE slug = 'research';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Scite', 'scite', 'AI citation analysis', 'Smart citations and research discovery.', 'https://scite.ai', 'https://logo.clearbit.com/scite.ai', 'freemium', 'approved', id FROM categories WHERE slug = 'research';

INSERT INTO tools (name, slug, tagline, description, website_url, logo_url, pricing_type, status, category_id)
SELECT 'Semantic Scholar', 'semantic-scholar', 'AI academic search', 'Free AI-powered research tool.', 'https://semanticscholar.org', 'https://logo.clearbit.com/semanticscholar.org', 'free', 'approved', id FROM categories WHERE slug = 'research';

-- ============================================
-- SUMMARY
-- ============================================
-- Total: 100 new AI tools added
-- Categories covered:
--   Productivity: 10 tools
--   Marketing: 10 tools
--   Data & Analytics: 8 tools
--   Design: 8 tools
--   Business: 8 tools
--   Education: 6 tools
--   Healthcare: 6 tools
--   Legal: 6 tools
--   Real Estate: 4 tools
--   HR & Recruiting: 6 tools
--   Gaming: 4 tools
--   3D Modeling: 4 tools
--   Translation: 4 tools
--   E-commerce: 4 tools
--   Security: 4 tools
--   Automation: 4 tools
--   Lifestyle: 4 tools
--   Research: 4 tools

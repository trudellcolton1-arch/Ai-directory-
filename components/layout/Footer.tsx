import Link from 'next/link';
import { Twitter, Github, Mail } from 'lucide-react';
import { LogoIcon } from '@/components/ui/LogoIcon';

export function Footer() {
  return (
    <footer className="border-t border-surface-200/50 bg-surface-100/50">
      <div className="container-wide py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                <LogoIcon className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-surface-950">
                AI Tool<span className="text-brand-500"> Findr</span>
              </span>
            </Link>
            <p className="text-surface-600 text-sm leading-relaxed mb-4">
              Discover the best AI tools to supercharge your workflow. 
              Updated daily with the latest releases.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-surface-200 rounded-lg transition-colors text-surface-600 hover:text-surface-900"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-surface-200 rounded-lg transition-colors text-surface-600 hover:text-surface-900"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@aitoolfindr.co"
                className="p-2 hover:bg-surface-200 rounded-lg transition-colors text-surface-600 hover:text-surface-900"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold text-surface-950 mb-4">Categories</h4>
            <ul className="space-y-2">
              {[
                { name: 'Writing', slug: 'writing' },
                { name: 'Image Generation', slug: 'image-generation' },
                { name: 'Video', slug: 'video' },
                { name: 'Audio', slug: 'audio' },
                { name: 'Coding', slug: 'coding' },
                { name: 'Productivity', slug: 'productivity' },
                { name: 'Marketing', slug: 'marketing' },
                { name: 'Data & Analytics', slug: 'data' },
                { name: 'Chatbots', slug: 'chatbots' },
                { name: 'Design', slug: 'design' },
                { name: 'Business', slug: 'business' },
                { name: 'Education', slug: 'education' },
              ].map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm text-surface-600 hover:text-brand-500 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-surface-950 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/submit"
                  className="text-sm text-surface-600 hover:text-brand-500 transition-colors"
                >
                  Submit a Tool
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-surface-600 hover:text-brand-500 transition-colors"
                >
                  Get Featured
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className="text-sm text-surface-600 hover:text-brand-500 transition-colors"
                >
                  Browse All
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-surface-950 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-surface-600 hover:text-brand-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-surface-600 hover:text-brand-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-surface-600 hover:text-brand-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-surface-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-surface-500">
            © {new Date().getFullYear()} AI Tool Findr. All rights reserved.
          </p>
          <p className="text-sm text-surface-500">
            Made with 💚 for the AI community
          </p>
        </div>
      </div>
    </footer>
  );
}

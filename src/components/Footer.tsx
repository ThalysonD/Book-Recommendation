import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-6 mt-12">
      <div className="container mx-auto px-4">
        <a
          href="https://www.instagram.com/thalysondornelas/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        >
          <Instagram className="w-6 h-6" />
          <span>@thalysondornelas</span>
        </a>
      </div>
    </footer>
  );
}
import { ExternalLink } from "lucide-react";
import { Book } from "../types/Book";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      <div className="relative pt-[150%]">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {book.author}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
          {book.description}
        </p>
        <a
          href={book.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          Comprar agora
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
import { Book } from "../types/Book";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <a
      href={book.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      title={`Comprar ${book.title}`}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform group-hover:scale-105">
        <div className="aspect-[2/3] relative">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {book.author}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 line-clamp-3">
            {book.description}
          </p>
        </div>
      </div>
    </a>
  );
}

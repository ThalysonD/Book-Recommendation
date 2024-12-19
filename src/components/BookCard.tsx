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
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
            {book.title}
          </h3>
        </div>
      </div>
    </a>
  );
}

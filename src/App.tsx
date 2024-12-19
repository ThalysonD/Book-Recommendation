import { useState } from "react";
import { BookCard } from "./components/BookCard";
import { Footer } from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";
import { books } from "./data/books";

function App() {
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);

  const filteredBooks = selectedSemester
    ? books.filter((book) => book.semester === selectedSemester)
    : books;

  const semesters = Array.from(
    new Set(books.map((book) => book.semester))
  ).sort();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors">
      <ThemeToggle />

      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
         BSSM Português - Livros
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedSemester(null)}
            className={`px-4 py-2 rounded-lg ${
              selectedSemester === null
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
          >
            Todos
          </button>
          {semesters.map((semester) => (
            <button
              key={semester}
              onClick={() => setSelectedSemester(semester)}
              className={`px-4 py-2 rounded-lg ${
                selectedSemester === semester
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              {`${semester}º Semestre`}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
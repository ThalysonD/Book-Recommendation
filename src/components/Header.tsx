import { BookOpen } from "lucide-react";

export function Header() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Biblioteca Recomendada
      </h1>
      <div className="flex items-center justify-center gap-2 mb-6">
        <BookOpen className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl text-gray-700 dark:text-gray-300">
          BSSM Português
        </h2>
      </div>
      <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
        Bem-vindo à biblioteca recomendada da BSSM Português! Aqui estão os
        livros essenciais para cada semestre, escolhidos para seu crescimento
        espiritual e ministerial. Clique no título para acessar a página de
        compra.
      </p>
    </div>
  );
}

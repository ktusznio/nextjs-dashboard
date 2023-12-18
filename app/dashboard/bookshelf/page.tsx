import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import { searchByTitle } from '@/app/lib/google-books';
import { BookSearchResult } from '@/app/ui/bookshelf/BookSearchResult';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  const searchResponse = await searchByTitle(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Bookshelf</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search books..." />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {searchResponse.totalItems === 0 && (
          <div className="w-full text-center">No books found</div>
        )}
        {searchResponse.items.map((book) => (
          <BookSearchResult
            bookId={book.id}
            volumeInfo={book.volumeInfo}
            key={book.id}
          />
        ))}
      </div>
    </div>
  );
}

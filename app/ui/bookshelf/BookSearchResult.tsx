'use client';

import { VolumeInfo } from '@/app/lib/google-books';

interface AddBookToShelf {
  (bookId: string, volumeInfo: VolumeInfo): void;
}

const addBookToShelf: AddBookToShelf = (bookId, volumeInfo) => {
  console.log(`Clicked on ${bookId} ${volumeInfo.title}`);
};

export const BookSearchResult = ({
  onClick = addBookToShelf,
  bookId,
  volumeInfo,
}: {
  onClick?: AddBookToShelf;
  bookId: string;
  volumeInfo: VolumeInfo;
}) => {
  // TODO better placeholder
  const imageUrl =
    volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x206';

  const handleClick = () => {
    console.log(`Clicked on ${bookId} ${volumeInfo.title}`);
    onClick(bookId, volumeInfo);
  };

  return (
    <div onClick={handleClick} className="w-32 cursor-pointer">
      <img src={imageUrl} />
    </div>
  );
};

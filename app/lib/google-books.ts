import fetch from 'node-fetch';

const GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1';

// Fetches the results of a Google Books API search.
export async function searchByTitle(title: string): Promise<ApiResponse> {
  if (!process.env.GOOGLE_BOOKS_API_KEY) {
    throw new Error('Missing environment variable GOOGLE_BOOKS_API_KEY');
  }
  if (!title) {
    return Promise.resolve({ kind: '', totalItems: 0, items: [] });
  }

  const response = await fetch(
    GOOGLE_BOOKS_API_URL + `/volumes?q=intitle:${encodeURIComponent(title)}`,
  );

  console.log(
    `%s %s /volumes?q=intitle:${encodeURIComponent(title)}`,
    response.status,
    response.statusText,
  );

  if (!response.ok) {
    console.error('Error searching Google Books');
    return Promise.resolve({ kind: '', totalItems: 0, items: [] });
  }

  const data = await response.json();
  return data as ApiResponse;
}

export interface ApiResponse {
  kind: string;
  totalItems: number;
  items: Item[];
}

export interface Item {
  id: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  imageLinks?: {
    smallThumbnail: string;
    thumbnail: string;
  };
}

type Category = 'software development' | 'agile' | 'society';

export interface Post {
  title: string;
  author: string;
  date: Date;
  categories: Array<Category>;
}

export interface Data {
  document: {
    content: string;
    data: Post;
    isEmpty?: boolean;
    excerpt?: string;
  };
  slug: string;
}

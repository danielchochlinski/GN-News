export interface ArticleInterface {
  author: string;
  description: null | string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: null | string;
}

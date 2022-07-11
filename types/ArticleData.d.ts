export interface Media {
  webp?: string;
  png?: string;
  jpg?: string;
  alt: string;
}

export interface Link {
  name: string;
  url: string;
}

export interface Sentence {
  text?: string;
  links?: Link[];
}

export interface ArticleData {
  title: string;
  media?: Media;
  sentence: Sentence;
}

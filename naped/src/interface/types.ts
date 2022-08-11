export interface INews {
  id: number;
  title: string;
  category: string;
  img: string;
}

export interface INewsList {
  id: number;
  title: string;
  category: string;
  img: string;
  content: string;
  date: string;
}

export interface INotice {
  id: number;
  title: string;
  subTitle: string;
  category: string;
  frontCover: string;
  content: {
    type: string;
    content: string;
  };
  date: string;
}

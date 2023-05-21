export type CategoryType = {
  id: string;
  name: string;
};

export type CommentType = {
  id: string;
  content: string;
  createdAt: string;
  User: {
    nickname: string;
  };
};

export type LikersType = {
  nickname: string;
};

export type PostType = {
  id: number;
  title: string;
  content: string;
  summary: string;
  views: number;
  createdAt: string;
  Category?: CategoryType[];
  User?: {
    nickname: 'hi';
  };
  Likers?: LikersType[];
  Comments?: CommentType[];
};

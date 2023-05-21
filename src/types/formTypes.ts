export type CategoryFormType = {
  name: string;
};

export type CommentFormype = {
  content: string;
};

export type PostFormType = {
  title?: string;
  content?: string;
  summary?: string;
  categoryId?: string;
};

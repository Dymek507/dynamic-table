export const getAuthorQuery = (author: string | null) => {
  const authorSplit = author?.split(" ");
  const authorQuery = authorSplit?.join("+");
  return authorQuery;
};

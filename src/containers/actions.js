export const searchBlogs = (title) => {
  return {
    type: "SEARCH_BlOG",
    payload: title
  }
};
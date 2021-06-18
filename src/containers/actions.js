export const addBlogs = ({title, body}) => {
  return {
    type: "ADD_BlOG",
    title,
    body
  }
};

export const searchBlogs = (title) => {
  return {
    type: "SEARCH_BlOG",
    payload: title
  }
};

const initialState = {blogs:JSON.parse(localStorage.getItem("blogs"))} || {};

if(initialState === {}){
  localStorage.setItem("blogs",JSON.stringify([{title:'Ashik',body:"Ashik Paul"},{title:'HackerEarth',body:"Xebia Frontend Developer Challenge"}]));
}

const searchBlogs = (state, title) =>{
  let results = [...state.blogs].filter((e) => e.title.toLowerCase().includes(title));
  return results.length || title !== "" || title ? results : JSON.parse(localStorage.getItem("blogs"));
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
      case "SEARCH_BlOG":
        return {
            ...state,
            blogs: searchBlogs(state, action.payload.toLowerCase())
        }
      default:
        return state;
    }
}
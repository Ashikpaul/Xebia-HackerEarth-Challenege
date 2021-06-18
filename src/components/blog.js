import React from "react";
import { useSelector } from "react-redux";

const SelectedBlog = ({match}) => {

  const blogs = useSelector(state => state.blogs);
  const blog = blogs.filter((ele)=> ele.title === match.params.title)[0];
  return (
  <div>
    <h1>{blog.title}</h1>
    <p>{blog.body}</p>
  </div>);
}

export default SelectedBlog;

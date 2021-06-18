import { useState } from "react";

export default function NewBlog(props) {

  const [title,setTitle] = useState(()=>"");
  const [body,setBody] = useState(()=>"");

  const onSubmit = (ev) => {
    ev.preventDefault();
    let currentBlogs = JSON.parse(localStorage.getItem("blogs"));
    localStorage.setItem("blogs", JSON.stringify([{title, body},...currentBlogs]));
  };

  return (
    <div className="newBlog">
      <h1>New Blog</h1>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input type="text" value={title}  onChange={(ev)=>{setTitle(ev.target.value)}} value={props.title}/>
          <br/>
        <label>Body</label>
        <textarea rows={4} value={body} onChange={(ev)=>{setBody(ev.target.value)}} value={props.body}/>
          <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

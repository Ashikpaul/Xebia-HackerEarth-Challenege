import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchBlogs } from "../containers/actions";

export default function Blogs() {

  const blogs = useSelector(state => state.blogs);
  const dispatch = useDispatch();

  return (
    <div className="blogs">
      
      <h1>Blogs</h1>

      <input placeholder="Search by Blog title" id="searchBlogs" type="search" onChange={(ev)=>dispatch(searchBlogs(ev.target.value))}/>

      {blogs.length > 0 && blogs.map((ele,i)=>{
        return (
          <div key={i} className="blogCard">
            <Link to={`/blog/new/${ele.title}`}><h2>{ele.title}</h2></Link>
            <p>{ele.title}</p>
          </div>
        )
      })}
    </div>
  );
}

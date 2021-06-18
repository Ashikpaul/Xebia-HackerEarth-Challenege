import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import SelectedBlog from "./components/blog";
import Blogs from "./components/blogs";
import Home from "./components/home";
import NewBlog from "./components/newBlog";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/blog"><li>Blogs</li></Link>
            <Link to="/blog/new"><li>New Blog</li></Link>
          </ul>
        </nav>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/blog"} component={Blogs}/>
          <Route exact path={"/blog/new"} component={NewBlog}/>
          <Route exact path={`/blog/new/:title`} component={SelectedBlog}/>
        </Switch>
      </Router>
    </div>
  );
}

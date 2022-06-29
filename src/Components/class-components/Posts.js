import { Component, Fragment } from "react";
import axios from "axios";
import Post from "./../../models/Post";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { posts: [] };
  }

  componentDidCatch(error) {
    console.log(error);
    alert("Something went wrong");
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const data = res.data;
        const fposts = data.map((d) => {
          return new Post(d.id, d.title, d.body);
        });
        this.setState({ posts: fposts });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <Fragment>
        <h1>Posts</h1>
        {
          this.state.posts.map((p) => {
            return (<div key={p.id} className="p-5 rounded-lg m-3" style={{backgroundColor:"#ccc"}}>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>);
        })
        }
      </Fragment>
    );
  }
}

export default Posts;

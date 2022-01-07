import "./App.css";

import { Component } from "react/cjs/react.production.min";

import {loadPosts} from './utils/load-posts';
import { Posts } from "./Components/Posts/index";

class App extends Component {
  // construtor com class fields
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({posts: postsAndPhotos});
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
      <Posts posts={posts}/>
      </section>
    );
  }
}

export default App;

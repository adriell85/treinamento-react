import "./styles.css";

import { Component } from "react/cjs/react.production.min";

import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../Components/Posts/index";
import { Button } from "../../Components/Button";
import { TextInput } from "../../Components/TextInput";

class Home extends Component {
  // construtor com class fields
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 5,
    searchValue: "",
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });

    // console.log(page,postsPerPage,nextPage,nextPage + postsPerPage)
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
      ? allPosts.filter(post => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">

        <div className="search-container">
        {!!searchValue && (
  
            <h1>Search Value: {searchValue}</h1> 
          
        )}
        <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
        </div>
        {filteredPosts.length>0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>
            Não existem posts =(
          </p>
        )}
        
        <div className="button-container">
          {!searchValue && (
            <Button
              disabled={false}
              text={"Load More Posts"}
              onclick={this.loadMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}

export default Home;

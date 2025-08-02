import React, { Component } from 'react';
import Post from './Post'; // importing the functional component

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],     // to store list of fetched posts
      hasError: false // for error handling (used in Step 9)
    };
  }

  render() {
    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;

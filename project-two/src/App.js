import P from 'prop-types';
import { useEffect, useState } from 'react';
import { useMemo } from 'react/cjs/react.development';
import './App.css';

const Post = ({ post }) => {
  console.log('filho, renderizou!');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.prototypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function App() {
  console.log('Pai renderizou!');
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  return (
    <div className="App">
      <p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>

      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts!</p>}
    </div>
  );
}

export default App;

import P from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import { useMemo } from 'react/cjs/react.development';
import './App.css';

const Post = ({ post, handleclick }) => {
  console.log('filho, renderizou!');
  return (
    <div key={post.id} className="post">
      <h1 style={{ fontSize: '14px' }} onClick={() => handleclick(post.title)}>
        {post.title}
      </h1>
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
  onClick: P.func,
};

function App() {
  console.log('Pai renderizou!');
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const counter = useRef(0);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  const handleclick = (value) => {
    setValue(value);
  };

  useEffect(() => {
    counter.current++;
  });

  return (
    <div className="App">
      <p>Reenderizou {counter.current}</p>
      <p>
        <input
          ref={input}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>

      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleclick={handleclick} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts!</p>}
    </div>
  );
}

export default App;

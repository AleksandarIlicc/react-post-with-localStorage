import './sass/App.css';
import Header from './components/Header';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import About from './components/About';
import Edit from './components/Edit';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from './api/posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [titlePost, setTitlePost] = useState('');
  const [textPost, setTextPost] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editText, setEditText] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const showNav = () => setShow(!show);

  async function deletePost(id) {
    try {
      await api.delete(`posts/${id}`);
      const newPosts = posts.filter(post => post.id !== id);
      setPosts(newPosts);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function createPost(e) {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const date = format(new Date(), 'MMMM-dd-yy');
    const newPost = { id, date, title: titlePost, text: textPost };

    try {
      const response = await api.post(`/posts/`, newPost);;
      const allPost = [...posts, response.data];
      setPosts(allPost);
      navigate('/');
      setTitlePost('');
      setTextPost('');
    } catch (err) {
      console.log(err.massage);
    }
  }

  async function editPost(id) {
    const date = format(new Date(), 'MMMM-dd-yy');
    const updatedPost = { id, date, title: editTitle, text: editText };

    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      const post = posts.map(post => post.id === id ? { ...response.data } : post);
      setPosts(post);
      navigate('/');
      setEditTitle('');
      setEditText('');

    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    async function fetchDate() {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);

      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
        } else {
          console.log(err.message);
        }
      }
    }

    fetchDate();
  }, [])

  useEffect(() => {
    const filterPosts = posts.filter(post => ((post.title).toLowerCase()).includes((search).toLowerCase()));
    setSearchResults(filterPosts.reverse());
  }, [posts, search])

  return (
    <div className="App">
      <Header
        search={search}
        setSearch={setSearch}
        show={show}
        showNav={showNav}
      />
      <Routes>
        <Route path="/" element={
          <Home
            posts={searchResults}
          />
        } />
        <Route path="/post" element={
          <NewPost
            titlePost={titlePost}
            setTitlePost={setTitlePost}
            textPost={textPost}
            setTextPost={setTextPost}
            createPost={createPost}
          />
        } />
        <Route path="/post/:id" element={
          <PostPage
            posts={posts}
            deletePost={deletePost}
          />} />
        <Route path="/about" element={<About />} />
        <Route path="/edit/:id" element={
          <Edit
            posts={posts}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editText={editText}
            setEditText={setEditText}
            editPost={editPost}
          />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

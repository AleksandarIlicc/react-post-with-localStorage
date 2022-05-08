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

function App() {
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('postList')) || []);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [titlePost, setTitlePost] = useState('');
  const [textPost, setTextPost] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editText, setEditText] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const showNav = () => setShow(!show);

  useEffect(() => {
    localStorage.setItem('postList', JSON.stringify(posts));
  }, [posts])

  const deletePost = (id) => {
      const newPosts = posts.filter(post => post.id !== id);
      setPosts(newPosts);
  }

   const createPost = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const date = format(new Date(), 'MMMM-dd-yy');
    const newPost = { id, date, title: titlePost, text: textPost };
    setPosts([...posts, newPost]);
    navigate('/');
    setTitlePost('');
    setTextPost('');
  }

  async function editPost(id) {
    const date = format(new Date(), 'MMMM-dd-yy');
    const updatedPost = { id, date, title: editTitle, text: editText };
    const post = posts.map(post => post.id === id ? { ...updatedPost } : post);
    setPosts(post);
    navigate('/');
    setEditTitle('');
    setEditText('');
  }

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

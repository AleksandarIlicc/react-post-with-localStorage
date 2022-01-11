import React from 'react';
import ErrorPage from './ErrorPage';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const PostPage = ({ posts, deletePost }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    const navigate = useNavigate();

    const title = 'Post Not Found!'
    const para = `Well, that's disappoing!`

    return (
        <main className='section'>
            {post &&
                <>
                    <Link to='/'>
                        <div className='button__box'>
                            <button className='button__arrow-back'><FaArrowLeft /></button>
                        </div>
                    </Link>
                    <article className='post post__page' key={post.id}>
                        <div>
                            <h2 className='heading__secondary'>{post.title}</h2>
                            <p className='post__date'>{post.date}</p>
                            <p className='post__text'>{post.text}</p>
                        </div>
                        <div className='post__bottom'>
                            <Link to={`/edit/${id}`}>
                                <button className='button button__edit'>Edit</button>
                            </Link>
                            <Link to='/'>
                                <button
                                    className='button button__delete'
                                    onClick={() => { deletePost(post.id); navigate('/') }}
                                >
                                    Delete
                                </button>
                            </Link>
                        </div>
                    </article>
                </>
            }
            {!post &&
                <ErrorPage
                    title={title}
                    para={para}
                />
            }
        </main>
    )
}

export default PostPage

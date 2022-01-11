import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <article className='post post__post' key={post.id}>
            <Link to={`/post/${post.id}`}>
                <div>
                    <h2 className='heading__secondary'>{post.title}</h2>
                    <p className='post__date'>{post.date}</p>
                    <p className='post__text'>
                        {
                            (post.text).length > 60 ? `${(post.text).slice(0, 60)}...` : post.text
                        }
                    </p>
                </div>
                <div className='post__bottom'>
                    <button className='button button__post'>View Post</button>
                </div>
            </Link>
        </article>
    )
}

export default Post

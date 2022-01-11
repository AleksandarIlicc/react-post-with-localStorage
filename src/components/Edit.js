import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Edit = ({
    posts,
    editTitle,
    setEditTitle,
    editText,
    setEditText,
    editPost }) => {

    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditText(post.text);
        }
    }, [post, setEditTitle, setEditText])

    return (
        <main className='section'>
            <h1 className='heading__primary mb--small'>Edit your post</h1>
            <div className='newPost'>
                <form className='newPost__form' onSubmit={(e) => e.preventDefault()}>
                    <input
                        className='newPost__input'
                        type="text"
                        required
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <textarea
                        className='newPost__text'
                        required
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button type="submit" className='button button__submit' onClick={() => editPost(post.id)}>Submit</button>
                </form>
            </div>
        </main>
    )
}

export default Edit

import React from 'react';

const NewPost = ({ titlePost, setTitlePost, textPost, setTextPost, createPost }) => {
    return (
        <main className='section'>
            <h1 className='heading__primary mb--small'>Create a new post</h1>
            <div className='newPost'>
                <form className='newPost__form' onSubmit={(e) => createPost(e)}>
                    <input
                        className='newPost__input'
                        type='text'
                        placeholder='Enter title'
                        value={titlePost}
                        onChange={(e) => setTitlePost(e.target.value)}
                    />
                    <textarea
                        className='newPost__text'
                        type='text'
                        placeholder='Enter some text...'
                        value={textPost}
                        onChange={(e) => setTextPost(e.target.value)}
                    >
                    </textarea>
                    <button type='submit' className='button button__submit'>Submit</button>
                </form>
            </div>
        </main>
    )
}

export default NewPost

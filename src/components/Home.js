import React from 'react';
import PostList from './PostList';
import ErrorPage from './ErrorPage';

const Home = ({ posts }) => {
    const title = 'No posts to display.'
    const para = 'Create your first post!'

    return (
        <main className='home section'>
            <h1 className='heading__primary mb--large'>Your Posts</h1>
            {posts.length ?
                (<PostList
                    posts={posts}
                />) :
                (
                    <ErrorPage
                        title={title}
                        para={para}
                    />
                )
            }
        </main>
    )
}

export default Home

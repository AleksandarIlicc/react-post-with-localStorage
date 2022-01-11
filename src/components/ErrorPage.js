import React from 'react';
import { useParams } from 'react-router-dom';
import ButtonGoBack from './buttons/ButtonGoBack';
import ButtonCreatePage from './buttons/ButtonCreatePage';

const ErrorPage = ({ title, para }) => {
    const { id } = useParams();
    const url = window.location;

    return (
        <main className='section--error'>
            <article className='error error__post'>
                <div className='error__square'>
                    <div className='error__square--inner'>
                        <h2 className='error__title'>{title}</h2>
                        <p className='error__para'>{para}</p>
                        {url.pathname === '/' && < ButtonCreatePage />}
                        {url.pathname === `/post/${id}` && < ButtonGoBack />}
                    </div>
                </div>
            </article>
        </main>
    )
}

export default ErrorPage

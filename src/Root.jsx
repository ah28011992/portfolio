import React from 'react';
import App from './App';
import router from './routes/router.jsx';

export default function Root() {
    return (
        <>
            <App router={router} />
        </>
    );
}

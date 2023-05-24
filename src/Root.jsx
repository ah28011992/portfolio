import React from 'react';
// import { StaticRouterProvider } from 'react-router-dom';
import App from './App';
import router from './routes/router.jsx';

export default function Root() {
    return (
        <>
            <App router={router} />
        </>
    );
}

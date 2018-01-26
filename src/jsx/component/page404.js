import React from 'react';
import { NavLink } from 'react-router-dom';

export const Page404 = () => (
    <div style={{height: '100vh', background: 'peachpuff', color: 'white', position: 'relative'}}>
        <div style={{display: 'inline-block',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center'}}>
            <h1>404!</h1>
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
                <h2 style={{marginBottom: '5px'}}>Sorry you are lost..</h2>
                <p>Let's go back to home</p>
            </div>
            <NavLink to="/"><img src="/assets/images/logo.png" alt="tyobaskara"/></NavLink>
        </div>
    </div>
)
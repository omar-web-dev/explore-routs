import React from 'react';
import { useLoaderData } from 'react-router-dom';

const About = () => {
    const user = useLoaderData()
    return (
        <div>
            <h1>Only About Me{console.log(user)}</h1> 
        </div>
    );
};

export default About;
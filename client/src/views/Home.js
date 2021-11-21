import React, { useState, useEffect } from 'react';
import Form from '../components/form/Form';

const Home = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);

    return (
        <div>
            <h1>Home</h1>
            <Form />

        </div>
    )
}

export default Home

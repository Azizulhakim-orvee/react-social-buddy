import React, { useEffect, useState } from 'react';
import Post from './Post';

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h1>This is home</h1>
            {
                posts.map(post => <Post post={post}></Post> )
            }
        </div>
    );
};

export default Home;
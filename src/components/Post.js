import React from 'react';
import { useHistory } from 'react-router';

const Post = ({post}) => {
    const {id, body, title} = post
    const history = useHistory()
    const showComments = id => {
        const url = `/post/${id}` 
        history.push(url);
    }
    return (
        <div>
            <h2><span>ID: {id}</span> Title: {title}</h2>
            <p>{body}</p>
            <button onClick={() => showComments(id)} >Comments</button>
        </div>
    );
};

export default Post;
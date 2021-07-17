import React from 'react';
import Form from './Form';
import BlogList from './BlogList';

const Main = ({blogs , addBlog , removeBlog, editBlog}) => {
    return (
        <div className="main">
            <Form addBlog={addBlog}/>
            <BlogList blogs={blogs} removeBlog={removeBlog} editBlog={editBlog}/>
        </div>
    );
}

export default Main;

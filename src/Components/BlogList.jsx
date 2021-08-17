import React from 'react';
import Blog from './Blog';
import { connect } from 'react-redux';

const BlogList = ({blogs, removeBlog, editBlog}) => {
    return (
            <ul>
            {
            blogs.blogList.map( blog => {
            return(
                <Blog removeBlog={removeBlog} blog={blog} editBlog={editBlog}/>
                );
            })}
            </ul>
    );
}

const matchStateToProps = (state) =>{
    return {
        blogs : state,
    }
}

export default connect(matchStateToProps)(BlogList);


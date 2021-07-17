import React from 'react';
import Blog from './Blog';

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

export default BlogList;


import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import EditForm from './EditForm';

const Blog = ({blog, removeBlog, editBlog}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
                                
    



    const handleDelete = (e, delId) => {
             e.preventDefault();
            removeBlog(delId);
    }

    return (
         
            <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm blog={blog} editBlog={editBlog} onHide={handleClose}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <li className="blog" key={blog.id}>
                <p>Name: {blog.name}</p>
                <p>Email: {blog.email}</p>
                <p>Gen: {blog.gen}</p>
                <div>
                    <button className="edit" onClick={handleShow}>Edit</button>
                    <button className="delete" onClick={(e) => handleDelete(e, blog.id) }>Delete</button>
                </div>
            </li>
            </>
                  
        
    );
}

export default Blog;

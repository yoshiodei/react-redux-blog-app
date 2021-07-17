import './App.css';
import Main from  './Components/Main';
import {useState} from 'react';


function App() {
 
  const [blogs, setBlogs] = useState({blogList:[] });

  const addBlog = (newblog) => {
    setBlogs({blogList:[...blogs.blogList, newblog]});  
  }
  
  const removeBlog = (id) => {
    let newBlogs = blogs.blogList.filter((blog)=> blog.id !== id)
    setBlogs({blogList: newBlogs});
  }

  const editBlog = (id, editedBlog) => {
    setBlogs({ blogList: blogs.blogList.map(blog =>  blog.id === id ? editedBlog : blog )
    });
  }

  return (
    <div className="App">
      <h3>Yoshi's Blog Page</h3>
      <Main  blogs={blogs} addBlog={addBlog} removeBlog={removeBlog} editBlog={editBlog}/>
    </div>
  );
}

export default App;

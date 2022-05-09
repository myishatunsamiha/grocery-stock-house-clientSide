import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='container'>
            <h1>Blogs</h1>
            {
                blogs.map(blog => <>
                    <h3>{blog.q}</h3>
                    <p>{blog.ans}</p>
                    <br /><br />
                </>)
            }
        </div>
    );
};

export default Blogs;
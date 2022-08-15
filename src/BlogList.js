import { Link } from 'react-router-dom'
function BlogList({ blogs, title, handleclick }) {
    return (
        <div className='home'>
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.auther}</p>
                    </Link>
                    <div className='buttons'>
                        <Link to={`/blog/${blog.id}`}><button>more info</button></Link>
                        <button onClick={() => handleclick(blog.id)}>delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default BlogList;
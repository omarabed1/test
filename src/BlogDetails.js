import {useParams, Link,useNavigate} from 'react-router-dom'
import useFetch from './useFetch';
function BlogDetails(){
    const {id} =useParams();
    const {data :blog,isPending,iserror}=useFetch("http://localhost:3001/blogs/"+id);
    const Navigate=useNavigate();
const handleDelete = ()=>{
    fetch("http://localhost:3001/blogs/"+id,{
        method: 'DELETE'
    }).then(()=>{
        Navigate('/');
    })
}
    return(
        <div className='blog-details'>
            {isPending && <div className='div1'>Loading....</div>}
            {iserror && <div className='div1'>
                <p>{iserror}</p>
                <Link to="/">back to home page</Link>
                        </div>}
            {blog && 
            <div className='div1'>
                <div>
                   <h2>{blog.title}</h2>
                   <p>writing by :{blog.auther}</p>
                   <p>{blog.body}</p>                 
                </div>
                <div className='m-button'>
                  <button onClick={handleDelete}>delete</button>
                  <Link to="/"><button>back</button></Link>
                </div>

            </div>}
        </div>
    );
}
export default BlogDetails
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
function Creat(){
const [title,SetTitle] = useState('');
const [body,SetBody] = useState('');
const [auther,SetAuther] = useState('mario');
const [isPending, setIsPending] = useState(false);
const Navigate= useNavigate();
function handleSubmit(e){
    e.preventDefault();
    const blog ={title,body,auther};
    setIsPending(true);
    fetch('http://localhost:3001/blogs',{
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(()=>{
        console.log("add new blog");
        setIsPending(false);
        Navigate('/');
    })
}
return(
    <div className='create'> 
        <h2>add new blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title :</label>
            <input
            type="text"
            required
            value={title}
            onChange={(e)=>SetTitle(e.target.value)}
            />
            <label>Blog body :</label>
            <textarea
            required
            value={body}
            onChange={(e)=>SetBody(e.target.value)}
            />
            <label>Blog auther :</label>
            <select
            value={auther}
            onChange={(e)=>SetAuther(e.target.value)}
            >
                <option value="mario">mario</option>
                <option value="yushi">yushi</option>
            </select>
            { !isPending &&<button>add blog</button> }
            {  isPending &&<button >adding blog....</button> }
        </form>
    </div>
)
}
export default Creat
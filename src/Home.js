
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
    /*
    const [blogs,setBlogs]=useState([
       {title: 'My New Website' , body: 'lorem ipsum.....' , auther: 'mario' , id:1},
       {title: 'Welcome Party!' , body: 'lorem ipsum.....' , auther: 'yoshi' , id:2},
       {title: 'Web dev top tips' , body: 'lorem ipsum.....' , auther: 'mario' , id:3}
    ]);   
    const handleclick = (id) =>{
        const newBlogs =blogs.filter(blog =>
            blog.id !==id
        )
        setBlogs(newBlogs);
    }
    */
    const handleclick = (id) =>{
        fetch("http://localhost:3001/blogs/"+id,{
            method: 'DELETE'
        }).then(()=>{
            window.location.reload(false);
        })
    }
   const {data : blogs,isPending,iserror}=useFetch("http://localhost:3001/blogs")
    return (
        <div>
            {iserror && <div>{iserror}</div>}
            {isPending && <div>Loading.....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleclick = {handleclick} />}
        </div>
    );
}
export default Home;
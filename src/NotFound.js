import {Link} from 'react-router-dom' 
function NotFound(){
    return(
        <div>
            <h1>sorry</h1>
            <p>that page cannot be found</p>
            <Link to="/"> back to home page</Link>
        </div>
    )
}
export default NotFound
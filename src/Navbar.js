import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className='navbar'>
            <h1>the Dojo Blog</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/creat">new blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;
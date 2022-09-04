import {Link} from 'react-router-dom'

const Navbar = () =>{
    return (
        <nav className="navbar">
            <h1>GFRIEND Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create Blog</Link>
                {/* inline styling */}
                <a href="" style={{
                    color: 'white',
                    backgroundColor: '#f13564',
                    borderRadius: '8px'
                }}>Contoh Button</a>
            </div>
        </nav>
    )
}

export default Navbar
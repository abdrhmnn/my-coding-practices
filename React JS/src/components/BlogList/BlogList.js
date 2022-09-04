import { Link } from "react-router-dom"

const BlogList = ({blogs, title}) =>{ // destructering object props
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(item => (

            // each of list items must be given a key then React can track it
            <div className="blog-preview" key={item.id}>
                <Link to={`/blogs/${item.id}`}>
                    <h2>{item.title}</h2>
                    <p>Author: {item.author}</p>
                </Link>
                {/* <button onClick={() => onDelete(item.id)}>Delete blog</button> */}
            </div>
            ))}
        </div>
    )
}

export default BlogList
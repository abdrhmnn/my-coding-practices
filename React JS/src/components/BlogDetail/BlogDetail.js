import { useParams } from "react-router-dom"
import useFetch from "../Hooks/useFetch";

const BlogDetail = () => {

    const { id } = useParams();
    const {blogs: blog, isPending, isValid} = useFetch('http://localhost:8000/blogs/' + id)

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {isValid && <div>{isValid}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </article>
            )}
        </div>
    )
}

export default BlogDetail
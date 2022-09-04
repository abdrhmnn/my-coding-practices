import { useState } from "react"
import { useLocation } from "react-router-dom";

const CreateList = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('abdu');

    const handleSubmit = (e) => {
        e.preventDefault()

        // const { pathname } = useLocation();

        // we dont give an id because JSON server will automate give an id even we havent created it
        const blog = {
            // data state from title and author state and automate create a properties with
            // value that we give in the form
            title,
            author
        }
        

        console.log(blog);
        // console.log(pathname);
    }
    return(
        <div className="create">
            <h2>Add a New Blog!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title :</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Author :</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="abdu">abdu</option>
                    <option value="eunha">eunha</option>
                </select>
                <button>Add Blog!</button>
                {/* <p>{author}</p> */}
            </form>
        </div>
    )
}

export default CreateList
import BlogList from "../BlogList/BlogList";
import useFetch from "../Hooks/useFetch";

const Home = () => {

    // creating a custom hook, we can create a new file and give name use....
    // and cut the code in to it
    const {blogs, isPending, isValid} = useFetch('http://localhost:8000/blogs')

    // const [initialValue, setValue] = useState(0)
    // const [nama, setNama] = useState('abdu')

    const handleClick = (e) =>{
        alert('hello')
        console.log(e.target.value);
        e.target.innerText = 'Abdu'
    }

    const handleClickArgument = (args, e) => {
        alert(`hello ${args}`)
        console.log(e);
    }

    // const handleClickState = () =>{
    //     setValue(10)
    // }

    // const handleDelete = id => {
    //     const filterBlog = blogs.filter(item => item.id !== id)
    //     setBlog(filterBlog)
    // }

    return (
        <div className="home">
            {isValid && <div>{isValid}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    )
}

export default Home
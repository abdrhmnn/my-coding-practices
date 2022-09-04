import { useState, useEffect } from "react";
import BlogList from "../BlogList/BlogList";

const Home = () => {

    // useState or useHook is a function that provide the data will change or render
    // in browser whenever we want
    const [initialValue, setValue] = useState(0) // can object, array, string, etc
    // initialValue = current value
    // setValue is a callback function that used to modify or change the current value


    const [blogs, setBlog] = useState(null)

    const [nama, setNama] = useState('abdu')

    const [isPending, setIsPending] = useState(true)

    const [isValid, setIsValid] = useState(null)


    // useEffect will run every RENDER for example when refresh browser or when changing the data
    // in useState, useEffect can be used for when fething data API or ask the request to other
    // website or etc
    useEffect(() => {
        // console.log('use effect run');

        // handling error when a response is not valid
        // the catch method will executed any kinds of network errors
        // when we want to check the response then give the conditional in first then method
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(response => {
                // check if a response is not valid
                if(!response.ok){
                    // throw an error and catch the error in catch method
                    throw Error('Blog data is empty')
                }
                return response.json()
            })
            .then((data) => {
                // console.log(data);
                setBlog(data)
                setIsPending(false)
                setIsValid(null)
            })
            .catch(error => {
                setIsPending(false)
                setIsValid(error.message) // catch whatever an error and pass to useState
                // console.log(error.message); // error is an object
            })
        }, 2000)
    }, [])
    // we can manage renders that will run with useEffect, give second parameter in useEffect
    // and pass an array to it, if we pass an empty array then useEffect will render only one time
    // when the first render ran

    // console.log(blogs);

    // events handler in React
    // if we are passing an argument in event with use function or anonymous function then
    // we can see the object event
    const handleClick = (e) =>{
        alert('hello')
        console.log(e.target.value);
        e.target.innerText = 'Abdu'
    }

    // execute event with argument
    const handleClickArgument = (args, e) => {
        alert(`hello ${args}`)
        console.log(e);
    }

    const handleClickState = () =>{
        setValue(10)
    }

    // function delete blog
    const handleDelete = id => {
        const filterBlog = blogs.filter(item => item.id !== id)
        setBlog(filterBlog)
    }
    

    return (
        <div className="home">
            {/* <h2>Homepage</h2> */}
            {/* <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {
                handleClickArgument('abdu', e)
            }}>Click me with argument</button>

            <p>Timer : {initialValue}</p>
            <button onClick={handleClickState}>Click with useState</button> */}

            {/* display an error in JSX with conditional render */}
            {isValid && <div>{isValid}</div>}
            {/* loading output will display until the data blogs are ready */}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            {/* onDelete={handleDelete} */}

            {/* create a reusable components, for example BlogList components */}
            {/* when we want to add some other blogs we just put the BlogList component, example */}
            {/* <BlogList blogs={blogs.filter((item) => item.author === 'abdu')} title="Abdu's Blogs!" /> */}

            {/* <button onClick={() => setNama('eunha')}>Click here!</button> */}
            {/* <p>{nama}</p> */}
        </div>
    )
}

export default Home
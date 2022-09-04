import { useState, useEffect } from "react"

const useFetch = (url) => {
    
    const [blogs, setBlog] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [isValid, setIsValid] = useState(null)

    // variabel for abort fetch data when we move to other component
    const abortCont = new AbortController();

    useEffect(() => {
        setTimeout(() => {
            // give option in fetch data
            fetch(url, { signal: abortCont.signal })
            .then(response => {
                if(!response.ok){
                    throw Error('Blog data is empty')
                }
                return response.json()
            })
            .then((data) => {
                setBlog(data)
                setIsPending(false)
                setIsValid(null)
            })
            .catch(error => {
                // modify this code for checking the error message from abortCont
                if(error.name === 'AbortError'){
                    console.log('fetch aborted');
                }else{
                    setIsPending(false)
                    setIsValid(error.message)
                }
            })
        }, 2000)

        // stopping fetch
        return () => abortCont.abort()
    }, [])

    // every custome hooks must have an return value (array, object, etc)
    return {blogs, isPending, isValid}
}

export default useFetch
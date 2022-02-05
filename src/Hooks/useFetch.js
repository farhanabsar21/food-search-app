import { useEffect, useState } from "react"

const useFetch = (url, method = "GET") => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState(null)

    const postReq = (postData) => {
        setOptions({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })
    }

    useEffect(() => {
        // abort controller
        const controller = new AbortController()

        // data fetch 
        const fetchData = async (fetchOptions) => {
            setIsLoading(true)
            try {
                const res = await fetch(url, {...fetchOptions, signal: controller.signal})
                if(!res.ok){
                    throw new Error(res.statusText)
                }
                const json = await res.json()
                
                setIsLoading(false)
                setData(json)
                setError(null)

            }catch(err){
                // abort message
                if(err.name === "AbortError"){
                    console.log("the fetch aborted!")
                }else{
                    // error handling
                    setIsLoading(false)
                    setError("could not fetch the data")
                }
            }
        }
        if(method === "GET"){
            fetchData()
        }
        if(method === "POST" && options){
            fetchData(options)
        }

        // aborting fetch request
        return () => {
            controller.abort()
        }
    }, [url, method, options])

    return { data, isLoading, error, postReq }
}

export default useFetch
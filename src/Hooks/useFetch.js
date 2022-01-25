import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        // abort controller
        const controller = new AbortController()

        // data fetch 
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(url, {signal: controller.signal})
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
        fetchData()

        // aborting fetch request
        return () => {
            controller.abort()
        }
    }, [url])

    return { data, isLoading, error }
}

export default useFetch
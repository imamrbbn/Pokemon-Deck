import {useState, useEffect} from 'react'

// <<<<<<<<<<<<<<<<OPTION 2 WITH HOOKS>>>>>>>>>>>>>>>>>>>>
const useFetch = (APIUrl) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(APIUrl)
        .then((res) => res.json())
        .then((data) => setData(data.cards))
        .catch((err) => setError(err))
        .finally(() => setLoading(false))
    }, [APIUrl])

    return {data, error, loading}

}

export default useFetch
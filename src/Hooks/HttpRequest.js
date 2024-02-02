import { useEffect, useState } from "react"
import axios from "axios"

export function useAxiosGet(url) {
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false,
    })

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false,
        })
        getRequest()
    }, [])

    const getRequest = () => {
        axios.get(url)
            .then(res => {
                console.log(res.data)
                setRequest({
                    loading: false,
                    data: res.data,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }

    return request
}
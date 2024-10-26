import React, { useState } from 'react'
import { useEffect } from 'react'
function UseFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetching = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    
                    throw new Error("network error")

                }
                const result = await response.json()
                setData(result)
            }
            catch (error) {
                setError(error)
            }

            finally {
                setLoading(false)
            }
        }
        fetching()
    }, [url])
    return ({ data, loading, error }
    )
}

export default UseFetch
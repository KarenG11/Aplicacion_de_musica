import { useState, useEffect } from "react";

function useFetch(url, options) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    const doFetch = async (customUrl, customOptions) => {
        setIsLoading(true);
        setIsError(null);
        try {
            const response = await fetch(customUrl || url, customOptions || options);
            if (!response.ok) {
                throw new Error("Error en la solicitud");
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setIsError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        doFetch();
    }, [url, options]);

    return { data, isLoading, isError, doFetch };
}

export default useFetch;

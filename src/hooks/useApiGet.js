import {useEffect, useState} from "react";

export const useApiGet = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const getAPIData = async () => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then(response => {
                setData(response);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
                setLoading(false);
            });
    }


    useEffect(() => {
        getAPIData()
    }, []);

    return {data, error, loading};
};

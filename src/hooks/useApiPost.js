import {useEffect, useState} from "react";

export const useApiGet = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

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

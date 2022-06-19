import {useEffect, useState} from "react";
import axios from "axios";

export const useApiGet = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const getAPIData = () => {
        setLoading(true);
        axios.get(url).then((response)=>{
            setData(response.data);
            setLoading(false);
        }).catch((error) => {
            // console.log(error);
            setError(true);
            setLoading(false);
        })
    }

    useEffect(() => {
        getAPIData()
    }, []);

    return {data, error, loading};
};

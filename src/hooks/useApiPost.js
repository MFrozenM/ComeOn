import {useState} from "react";
import axios from "axios";

export const useApiPost = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const postData = (dataHeader) => {
        setLoading(true);
        axios.post(url, dataHeader).then(res => {
            setLoading(false);
            // console.log(res);
            setData(res)
        }).catch(err => {
            // console.log(err);
            setLoading(false);
            setError(err)
        })
    }


    // useEffect(() => {
    //     postData()
    // }, [url]);

    return {data, error, loading, postData};
};

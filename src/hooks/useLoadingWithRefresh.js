import React from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';

export function useLoadingWithRefresh() {
    const [loading, setLoading] = React.useState(true);
    const dispatch = useDispatch();
    React.useEffect(() => {
        (async() => {
            try {
                const {data} = await axios.get(`http://localhost:3000/api/refresh`,{
                    withCredentials: true
                });
                console.log(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        })();
    },[]);
    return {loading};
}
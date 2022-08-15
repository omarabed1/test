import { useEffect,useState } from "react";
const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [iserror,setIserror] = useState(null);
    
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok)
                    throw Error('could not fetch the data for that resource')
                    return res.json();
                }).then(data => {
                    setData(data);
                    setIsPending(false);
                    setIserror(null);    
                })
                .catch(err =>{
                    setIserror(err.message);  
                    setIsPending(false);                   
                })
        }, 1000);
    }, [url]);
    return{data,isPending,iserror}
}
export default useFetch
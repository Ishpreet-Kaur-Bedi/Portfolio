import React ,{useState,useEffect}from 'react'

const useScrollProgress = () => {
    const [completion,setCompletion] =useState(0);

    useEffect(()=>{
        const updateScrollCompletion =()=>{
            const currentProgress = window.scrollY;
            const ScrollHeight = document.body.scrollHeight-window.innerHeight;
            if(ScrollHeight)
            {
                setCompletion(Number(currentProgress/
                ScrollHeight).toFixed(2)*100);
            }
        };
      //event

      window.addEventListener('scroll',updateScrollCompletion);
      //clearevent

       return ()=>window.removeEventListener('scroll',updateScrollCompletion);
    },[])

    return completion;


}

export default useScrollProgress;

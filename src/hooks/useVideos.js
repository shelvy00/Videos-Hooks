import { useState, useEffect } from "react";
import YouTube from "../api/YouTube";

// Custom Hook

export const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm)
      }, [defaultSearchTerm]);

      const search = async (term) => {
        const response = await YouTube.get("/search", {    //"/search" is an Endpoint for the URL
           params: {
               q: term // term is the user input
           }
         });
    
         setVideos(response.data.items)
    
       };

       return [videos, search];
};

export default useVideos;
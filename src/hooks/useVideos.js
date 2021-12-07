import { useState, useEffect } from "react";
import youtube from "../apis/youtube";


const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    searchResult(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const searchResult = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items)
  };


  // return {videos, searchResult};
  return [videos, searchResult];
}

export default useVideos;

import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";


const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(null)
  //customHook
  const [videos, searchResult] = useVideos('buildings')
  //setSelectedVideo(response.data.items[0])

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])


  // const onVideoSelect = (video) => {
  //   selectedVideo(video)
  // };
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={searchResult} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              // onVideoSelect={(video) => setSelectedVideo(video)}
              onVideoSelect={setSelectedVideo}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;

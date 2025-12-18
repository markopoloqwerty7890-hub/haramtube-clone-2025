import axios from "axios";
import VideoCard from "../../shared/ui/content/VideoCard";
import Header from "../../widgets/header";
import { useEffect, useState } from "react";
import { getVideoUrl } from "../../faetures/api";
import { formatVideoData } from "../../faetures/converters/format-vidoe";
import Button from "../../shared/ui/button/Button";

const MainPage = () => {
  const [vidoes, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");

  const fetchVideos = async () => {
    const response = await axios.get(getVideoUrl(nextPageToken));

    setNextPageToken(response.data.nextPageToken);

    console.log(response.data);
    setVideos((prevVideos) => [
      ...prevVideos,
      ...response.data.items.map(formatVideoData),
    ]);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchVideos();
  }, []);

  return (
    <>
      <Header/>
      <div>
        <div
          className="
  grid grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  gap-x-4 gap-y-8
  mt-6 ml-4 mr-4
"
        >
          {vidoes.map((video) => (
            <VideoCard key={video.videoWatchUrl} {...video} />
          ))}
        </div>
      </div>
      <Button onClick={fetchVideos}>
        Load more
      </Button>
    </>
  );
};

export default MainPage;

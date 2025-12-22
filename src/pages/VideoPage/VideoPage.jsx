import "./VideoPage.css";
import ChannelInfo from "../../components/ChannelInfo";
import Comments from "../../components/Comments";
import RecommendedVideos from "../../components/RecommendedVideo";
import VideoActions from "../../components/VideoActions";
import VideoPlayer from "../../components/VideoPlayer";


export default function VideoPage() {
  return (
    <div className="video-page">
      <div className="video-main">
        <VideoPlayer />
        <h1 className="video-title">Название видео</h1>
        <VideoActions />
        <ChannelInfo />
        <Comments />
      </div>

      <RecommendedVideos />
    </div>
  );
}




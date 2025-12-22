import { useSearchParams } from "react-router";

export default function VideoPlayer() {
        const [searchParams] = useSearchParams()
  return (
    <div className="video-player text-blue-50">
        <iframe width="420" height="315" src={`https://www.youtube.com/embed/${searchParams.get('v')}`}></iframe>
    </div>
  );
}

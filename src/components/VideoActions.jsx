import { useState } from "react";

export default function VideoActions() {
  const [likes, setLikes] = useState(120);
  const [dislikes, setDislikes] = useState(3);

  return (
    <div className="video-actions text-blue-50">
      <button onClick={() => setLikes(likes + 1)}>
        👍 {likes}
      </button>

      <button onClick={() => setDislikes(dislikes + 1)}>
        👎 {dislikes}
      </button>

      <button>🔗 Поделиться</button>
    </div>
  );
}

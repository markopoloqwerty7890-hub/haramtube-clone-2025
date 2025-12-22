import { useState } from "react";

export default function Comments() {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (!text.trim()) return;
    setComments([{ id: Date.now(), text }, ...comments]);
    setText("");
  };

  return (
    <div className="comments text-blue-50">
      <h3>Комментарии</h3>

      <div className="comment-form text-blue-50">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Оставьте комментарий"
        />
        <button onClick={addComment}>Отправить</button>
      </div>

      {comments.map((c) => (
        <div key={c.id} className="comment text-blue-50">
          {c.text}
        </div>
      ))}
    </div>
  );
}

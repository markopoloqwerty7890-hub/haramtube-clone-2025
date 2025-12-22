import { useState } from "react";

export default function ChannelInfo() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="channel-info text-blue-50">
      <img src="/avatar.jpg" alt="channel" />
      <div>
        <h3>Название канала</h3>
        <p>120 тыс. подписчиков</p>
      </div>

      <button onClick={() => setSubscribed(!subscribed)}>
        {subscribed ? "Вы подписаны" : "Подписаться"}
      </button>
    </div>
  );
}

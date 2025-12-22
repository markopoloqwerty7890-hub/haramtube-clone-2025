export default function RecommendedVideos() {
  return (
    <aside className="recommended text-blue-50">
      <h4>Рекомендованные</h4>

      {[1, 2, 3, 4].map((v) => (
        <div key={v} className="recommended-item text-blue-50">
          <img src="/preview.jpg" alt="preview" />
          <div>
            <p>Название видео</p>
            <span>Название канала</span>
          </div>
        </div>
      ))}
    </aside>
  );
}

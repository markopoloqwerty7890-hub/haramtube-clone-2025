export default function VideoCard() {
  return (
    <div className="w-full cursor-pointer">
      {/* PREVIEW */}
      <div className="relative aspect-video rounded-xl overflow-hidden group bg-black">
        {/* IMAGE */}
        <img
          src="/src/shared/ui/picture/Без названия (1).jpg"
          alt="preview"
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        {/* FAKE VIDEO ANIMATION */}
        <div
          className="
            absolute inset-0
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            bg-gradient-to-t from-black/40 via-transparent to-transparent
          "
        />

        {/* DURATION */}
        <span className="
          absolute bottom-2 right-2
          bg-black/80 text-white text-xs
          px-1.5 py-0.5 rounded
        ">
          12:48
        </span>
      </div>

      {/* INFO */}
      <div className="flex gap-3 mt-3">
        {/* AVATAR */}
        <div className="w-9 h-9 rounded-full bg-neutral-700 shrink-0" />

        {/* TEXT */}
        <div className="flex flex-col gap-1">
          <h3 className="
            text-white text-sm font-medium
            line-clamp-2
          ">
            Название видео как на YouTube, но это твой проект
          </h3>

          <p className="text-neutral-400 text-xs">
            Название канала
          </p>

          <p className="text-neutral-400 text-xs">
            124 тыс. просмотров • 3 дня назад
          </p>
        </div>
      </div>
    </div>
  );
}

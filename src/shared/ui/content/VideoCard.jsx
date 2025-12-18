export default function VideoCard() {
  return (
    <div className="w-full cursor-pointer rounded-xl border-4 shadow-xl/30 hover:not-focus:bg-indigo-700 ">
      {}
      <div className="relative aspect-video rounded-b-lg overflow-hidden group bg-black">
        {}
        <img
          src="/src/shared/ui/picture/hqdefault.avif"
          alt="preview"
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        {}
        <div
          className="
            absolute inset-0
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            bg-gradient-to-t from-black/40 via-transparent to-transparent
          "
        />

        {}
        <span className="
          absolute bottom-2 right-2
          bg-black/80 text-white text-xs
          px-1.5 py-0.5 rounded
        ">
          12:48
        </span>
      </div>

      {}
      <div className="flex gap-3 mt-3">
        {}
        <div/>
        <img src="/src/shared/ui/picture/unnamed.jpg" alt="SlivkiShow" className="shrink-0 w-9 h-9 rounded-full" />
        {}
        <div className="flex flex-col text-white gap-1">
          <h3 className="
            text-white text-sm font-medium
            line-clamp-2
          ">
            
ВОТ ЧТО МЫ КУПИЛИ НА ALIEXPRESS


          </h3>

          <p className="text-neutral-400 text-xs">
            SlivkiShow
          </p>

          <p className="text-neutral-400 text-xs">
            124 тыс. просмотров • 3 дня назад
          </p>
        </div>
      </div>
    </div>
  );
}

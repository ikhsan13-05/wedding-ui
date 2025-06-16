import { useState, useEffect, useRef } from "react";
import { Instagram } from "lucide-react";

export default function CoupleCard({ name, image, quote, instagramUrl }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [shouldAutoFlipBack, setShouldAutoFlipBack] = useState(true);
  const timerRef = useRef(null);

  // Auto balik jika tidak dihover
  useEffect(() => {
    if (isFlipped && shouldAutoFlipBack) {
      timerRef.current = setTimeout(() => {
        setIsFlipped(false);
      }, 2000);
    }

    return () => clearTimeout(timerRef.current);
  }, [isFlipped, shouldAutoFlipBack]);

  return (
    <div
      className="w-64 h-80 perspective cursor-pointer"
      onClick={() => setIsFlipped(true)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-[18rem] h-full text-white border-pink-400 border-b-2 border-l-2 rounded-3xl flex flex-col items-center justify-center px-4 py-3 backface-hidden shadow-lg/50">
          <img
            src={image}
            alt={name}
            className="w-64 h-72 object-cover border-pink-400 rounded-full border-3 mb-4"
            style={{
              borderTopRightRadius: "100px",
              borderBottomRightRadius: "0px",
              borderBottomLeftRadius: "100px",
              borderTopLeftRadius: "0px",
              boxShadow: "8px 8px 20px rgba(85, 120, 60, 0.2)",
            }}
          />
          <h3 className="text-xl font-merienda text-shadow-black text-shadow-lg/30">{name}</h3>
          <p className="text-md text-white mt-3 md:block italic">
            Klik untuk melihat deskripsi
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-black/60 border-pink-500 border-b-2 border-t-2 backdrop-blur-xs text-white rounded-2xl shadow-xl px-6 py-6 text-sm text-center italic transform rotate-y-180 backface-hidden flex flex-col items-center justify-between"
          onMouseEnter={() => {
            // Hentikan auto flip-back saat dihover
            setShouldAutoFlipBack(false);
            clearTimeout(timerRef.current);
          }}
          onMouseLeave={() => {
            // Aktifkan kembali auto flip-back
            setShouldAutoFlipBack(true);
          }}
        >
          <p className="mt-6">{quote}</p>

          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 hover:bg-pink-500 hover:text-white border text-white rounded-full text-sm transition-all"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

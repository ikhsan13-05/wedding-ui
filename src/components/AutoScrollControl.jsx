import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export default function AutoScrollControl() {
  const scrollInterval = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const startScroll = () => {
    if (scrollInterval.current) return;

    scrollInterval.current = setInterval(() => {
      window.scrollBy({ top: 3, behavior: "smooth" });

      // Stop when reached bottom
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        stopScroll();
      }
    }, 30);

    setIsScrolling(true);
  };

  const stopScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
    setIsScrolling(false);
  };

  // Stop auto scroll on user interaction (optional)
  useEffect(() => {
    const stopOnUserScroll = () => {
      stopScroll();
    };

    window.addEventListener("wheel", stopOnUserScroll);
    window.addEventListener("touchstart", stopOnUserScroll);

    return () => {
      window.removeEventListener("wheel", stopOnUserScroll);
      window.removeEventListener("touchstart", stopOnUserScroll);
    };
  }, []);

  return (
    <div className="fixed top-3 left-6 z-50 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition">
      <button onClick={isScrolling ? stopScroll : startScroll}>
        {isScrolling ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  );
}

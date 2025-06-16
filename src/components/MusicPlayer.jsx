import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const MusicPlayer = ({ playOnOpen }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (playOnOpen && audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [playOnOpen]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/weddingsong.mp3" loop />
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 bg-black/30 hover:bg-black/50 backdrop-blur-xs text-white p-3 rounded-full transition"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </>
  );
};

export default MusicPlayer;

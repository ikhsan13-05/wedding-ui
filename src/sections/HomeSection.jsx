import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export default function HomeSection() {
  const weddingDate = new Date("2025-07-06T09:00:00"); // waktu akad
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff <= 0) {
        setEventStarted(true);
        clearInterval(timer);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-end justify-center text-white"
      style={{
        backgroundImage: "url('/images/wrapper/bg-home.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Konten */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-xl p-3 md:p-6 mb-5 bg-gradient-to-b from-white/10 to-black/30 border-pink-400 border-t-2 border-b-2 rounded-xl md:rounded-3xl backdrop-blur-xs shadow-lg text-center text-shadow-lg/50"
      >
        {/* ✅ Inisial dalam bentuk gambar */}
        {/* <img
          src="/images/logo-wedding2.png"
          alt="Inisial"
          className="absolute -top-80 md:-top-90 left-1/2 transform -translate-x-1/2 z-20 w-[200px] md:w-[350px] opacity-80 shadow-pink-500/90"
        /> */}
        <p className="text-md md:text-xl text-white mb-2 font-audiowide text-shadow-black">
          The Wedding Of
        </p>
        <h1 className="text-5xl md:text-6xl font-meaculpa text-white tracking-wide mb-4 text-shadow-black">
          Ulfa & Ihsan
        </h1>
        <p className="text-xl md:3xl text-white mb-2 font-lora text-shadow-black">
          06 - 07 - 2025
        </p>

        {/* Countdown */}
        {/* {!eventStarted && ( */}
        <div className="grid grid-cols-4 gap-4 justify-center items-center text-center text-sm mb-2 text-shadow-black text-shadow-lg/30">
          <div className="border-b-2 rounded-2xl p-1">
            <p className="text-xl md:text-2xl font-semibold">{timeLeft.days}</p>
            <p className="text-white/70">Hari</p>
          </div>
          <div className="border-b-2 rounded-3xl p-1">
            <p className="text-xl md:text-2xl font-semibold">{timeLeft.hours}</p>
            <p className="text-white/70">Jam</p>
          </div>
          <div className="border-b-2 rounded-3xl p-1">
            <p className="text-xl md:text-2xl font-semibold">{timeLeft.minutes}</p>
            <p className="text-white/70">Menit</p>
          </div>
          <div className="border-b-2 rounded-3xl p-1">
            <p className="text-xl md:text-2xl font-semibold">{timeLeft.seconds}</p>
            <p className="text-white/70">Detik</p>
          </div>
        </div>
        {/* )} */}

        {/* Tombol */}
        {eventStarted ? (
          <button className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-pink-500/80 text-white font-lora cursor-default">
            Acara Sedang Berlangsung...
          </button>
        ) : (
          <a
            href="https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ihsan+%26+Ulfa&dates=20250706T020000Z/20250706T050000Z&details=Acara+Pernikahan+Ihsan+dan+Ulfa&location=Jl.+Kenangan+Indah+No.+123,+Jakarta&sf=true&output=xml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-b-2 text-white hover:bg-pink-500 hover:text-white transition-all"
          >
            <CalendarDays className="w-5 h-5" />
            Save The Date
          </a>
        )}
      </motion.div>
    </section>
  );
}

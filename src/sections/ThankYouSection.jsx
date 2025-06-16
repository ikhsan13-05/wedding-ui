// src/sections/ThankYouSection.jsx
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const ThankYouSection = () => {
  return (
    <section
      id="thank-you"
      className="py-20 px-4 text-white text-center rounded-xl max-w mx-auto my-10 relative"
    >
      {/* Foto Mempelai */}
      <motion.img
        src="/images/wrapper/AV2_7550.JPG" // ganti sesuai path gambar kamu
        alt="Dimas & Ayu"
        className="w-48 h-48 rounded-full object-cover mx-auto mb-6 border-2 border-pink-400 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Icon Hati */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center gap-4 mb-6"
      >
        <div className="h-px w-30 bg-white" />
        <Heart className="text-pink-400 animate-pulse" size={32} />
        <div className="h-px w-30 bg-white" />
      </motion.div>

      {/* Judul & Ucapan */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl mb-4"
      >
        <div className="relative inline-block mb-8">
          <h2 className="text-white text-[40px] md:text-[64px] font-playfair z-10 relative text-shadow-white text-shadow-lg/30">
            Terima
          </h2>
          <span className="absolute bottom-[-30px] left-[70px] md:bottom-[-40px] md:left-[110px] text-pink-500 text-[45px] md:text-[66px] font-dancingscript z-20 text-shadow-lg/50">
            Kasih
          </span>
        </div>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg text-white/80 max-w-xl mx-auto"
      >
        Atas kehadiran dan do'a restu dari Bapak/Ibu/Saudara/i sekalian.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg text-white/80 max-w-xl mx-auto my-10"
      >
        <h2 className="italic">Kami yang Berbahagia</h2>
        <h1 className="text-5xl font-meaculpa text-white md:text-7xl tracking-wide mb-6 text-shadow-black mt-3">
          Ulfa & Ihsan
        </h1>
      </motion.p>
    </section>
  );
};

export default ThankYouSection;

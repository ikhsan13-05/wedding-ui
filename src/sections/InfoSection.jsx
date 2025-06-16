import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const InfoCard = ({ title, iconSrc, date, time, place, address, mapLink }) => (
  <motion.div
    className="relative bg-black/60 border-t-3 border-b-3 border-pink-400 backdrop-blur-xs text-white p-8 rounded-t-[200px] rounded-b-xl flex flex-col items-center shadow-lg/50"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <img
      src={iconSrc}
      alt={`${title} icon`}
      className="w-14 h-14 object-contain mb-4"
    />
    <h3 className="text-3xl font-playfair tracking-wide mb-1">{title}</h3>
    <p className="text-2xl font-playfair tracking-wide">
      {new Date(date).toLocaleDateString("id-ID", {
        weekday: "long",
      })}
    </p>
    <div className="my-2 border-t border-white w-10" />
    <p className="text-5xl font-bold">{new Date(date).getDate()}</p>
    <div className="my-2 border-t border-white w-10" />
    <p className="text-2xl font-playfair tracking-wide">
      {new Date(date).toLocaleDateString("id-ID", {
        month: "long",
        year: "numeric",
      })}
    </p>
    <p className="mt-4 text-md">⏰ {time}</p>
    <p className="text-base font-medium mt-1">{place}</p>
    <p className="text-sm text-white/80">{address}</p>

    <a
      href={mapLink}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-2 hover:bg-pink-500 hover:text-white border px-5 py-2 rounded-lg shadow-md transition"
    >
      <MapPin size={18} />
      Lihat Lokasi
    </a>
  </motion.div>
);

const InfoSection = () => {
  return (
    <section
      id="info"
      className="py-20 px-4 bg-gradient-to-b from-black/50 via-pink-700/60 to-black/80 text-white rounded-xl"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative inline-block mb-16">
          <h2 className="text-white text-[40px] md:text-[64px] font-playfair z-10 relative text-shadow-white text-shadow-lg/30">
            Informasi
          </h2>
          <span className="absolute bottom-[-30px] left-[120px] md:bottom-[-45px] md:left-[180px] text-pink-500 text-[45px] md:text-[66px] font-dancingscript z-20 text-shadow-lg/50">
            Acara
          </span>
        </div>
        <p className="text-md md:text-xl text-white/80 max-w-xl mx-auto font-playfair mt-4">
          Dengan memohon rahmat dan ridho Allah SWT, kami mengundang
          Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-4xl mx-auto">
        <InfoCard
          title="Akad Nikah"
          iconSrc="/images/couple-ring1.png"
          date="2025-07-06"
          time="10:00 WITA - Selesai"
          place="MASJID AT-TAQWA"
          address="Desa Kanca, Kec. Parado, Kab. Bima"
          mapLink="https://www.google.com/maps?q=Jl+Mayangkara+Bekasi"
        />
        <InfoCard
          title="Resepsi"
          iconSrc="/images/wedding-arch1.png"
          date="2025-07-06"
          time="13:30 - 20:00 WITA"
          place="LAPANGAN BOLA PUSTAKA"
          address="Desa Kanca, Kec. Parado, Kab. Bima"
          mapLink="https://www.google.com/maps?q=Gedung+Bahagia+Bekasi"
        />
      </div>
    </section>
  );
};

export default InfoSection;

// import { motion, AnimatePresence } from "framer-motion";
// import { Mail } from "lucide-react";
// import { useState, useEffect } from "react";

// export default function HeroSection({ onOpenInvitation }) {
//   const [hide, setHide] = useState(false);

//   const handleClick = () => {
//     setHide(true);
//     setTimeout(() => {
//       onOpenInvitation();
//     }, 1000); // waktu sama dengan animasi keluar
//   };

//   const [guestName, setGuestName] = useState("Nama Tamu");

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const to = urlParams.get("to");
//     if (to) {
//       setGuestName(decodeURIComponent(to));
//     }
//   }, []);

//   return (
//     <AnimatePresence>
//       {!hide && (
//         <motion.section
//           initial={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 1.2 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="relative w-full h-screen flex flex-col items-center justify-center text-white overflow-hidden"
//           style={{
//             backgroundImage: "url('/images/bg.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/40 z-0" />
//           <div className="relative z-10 text-center max-w-2xl mt-15">
//             <motion.p
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-white text-lg md:text-xl font-audiowide mb-5 text-shadow-black/40 text-shadow-lg"
//             >
//               The Wedding Of
//             </motion.p>
//             <motion.h1
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-6xl font-meaculpa md:text-8xl mb-6 text-shadow-black/40 text-shadow-lg"
//             >
//               Ihsan & Ulfa
//             </motion.h1>

//             {/* Gambar pasangan */}
//             <motion.div
//               className="relative w-[280px] h-[180px] mx-auto mb-3 md:mb-20"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.6 }}
//             >
//               <img
//                 src="/images/AV2_7565.JPG"
//                 className="absolute top-0 right-32 w-[140px] h-[160px] md:w-[180px] md:h-[210px] object-cover border-4 border-white rounded-tr-[60%] rounded-bl-[60%] shadow-gray-500 shadow-lg/60"
//                 alt="Pasangan 1"
//               />
//               <img
//                 src="/images/AV2_7569.JPG"
//                 className="absolute top-16 left-32 w-[130px] h-[140px] md:w-[160px] md:h-[190px] object-cover border-4 border-white rounded-tl-[60%] rounded-br-[60%] shadow-gray-500 shadow-lg/60"
//                 alt="Pasangan 2"
//               />
//             </motion.div>

//             {/* Tamu dan tombol */}
//             <motion.div className="py-14">
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1 }}
//                 className="relative z-10 max-y-md mx-4 bg-black/60 backdrop-blur-md rounded-xl px-3 py-5 md:px3 md:py-5 border-t-2 border-b-2 shadow-black/70 shadow-lg/50"
//               >
//                 <p className="text-xs md:text-[15px] text-white mb-1">Kepada Bapak/Ibu/Saudara/i.</p>
//                 <h2 className="text-md md:text-2xl text-white mb-1 font-semibold">
//                   {decodeURIComponent(
//                     (typeof window !== "undefined" &&
//                       new URLSearchParams(window.location.search).get("to")) ||
//                       "Tamu Undangan"
//                   )}
//                 </h2>
//                 <p className="text-xs text-white italic">
//                   Mohon maaf apabila ada kesalahan penulisan nama/gelar
//                 </p>
//               </motion.div>

//               <motion.button
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.4 }}
//                 onClick={handleClick}
//                 className="inline-flex items-center gap-2 px-5 py-2 my-5 rounded-full border-b-2 text-white hover:bg-pink-500 hover:text-white text-shadow-lg/30 transition"
//               >
//                 <Mail className="w-4 h-4" />
//                 Buka Undangan
//               </motion.button>
//             </motion.div>
//           </div>
//         </motion.section>
//       )}
//     </AnimatePresence>
//   );
// }

import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection({ onOpenInvitation }) {
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(true);
    setTimeout(() => {
      onOpenInvitation();
    }, 1000);
  };

  const [guestName, setGuestName] = useState("Nama Tamu");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const to = urlParams.get("to");
    if (to) {
      setGuestName(decodeURIComponent(to));
    }
  }, []);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.section
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-full h-screen flex flex-col items-center justify-center text-white overflow-hidden"
          style={{
            backgroundImage: "url('/images/bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40 z-0" />
          <div className="relative z-10 text-center max-w-2xl mt-15">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white text-lg md:text-xl font-audiowide mb-5 text-shadow-black/40 text-shadow-lg"
            >
              The Wedding Of
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl font-meaculpa md:text-8xl mb-6 text-shadow-black/40 text-shadow-lg"
            >
              Ihsan & Ulfa
            </motion.h1>

            {/* Spacer untuk posisi tetap seimbang */}
            <div className="mb-60 md:mb-20" />

            {/* Tamu dan tombol */}
            <motion.div className="py-14">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="relative z-10 max-y-md mx-4 bg-black/30 backdrop-blur-xs rounded-xl px-3 py-5 md:px3 md:py-5 border-pink-400 border-t-2 border-b-2 shadow-black/70 shadow-lg/50"
              >
                <p className="text-xs md:text-[15px] text-white mb-1">Kepada Bapak/Ibu/Saudara/i.</p>
                <h2 className="text-md md:text-2xl text-white mb-1 font-semibold">
                  {decodeURIComponent(
                    (typeof window !== "undefined" &&
                      new URLSearchParams(window.location.search).get("to")) ||
                      "Tamu Undangan"
                  )}
                </h2>
                <p className="text-xs text-white italic">
                  Mohon maaf apabila ada kesalahan penulisan nama/gelar
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                onClick={handleClick}
                className="inline-flex items-center gap-2 px-5 py-2 my-5 rounded-full border-b-2 text-white hover:bg-pink-500 hover:text-white text-shadow-lg/30 transition"
              >
                <Mail className="w-4 h-4" />
                Buka Undangan
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

import React from "react";
import CoupleCard from "../components/CoupleCard";
import { motion } from "framer-motion";

export default function CoupleSection() {
  return (
    <section
      id="couple-section"
      className="py-16 px-4 text-white rounded-2xl max-w mx-auto my-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <div className="relative inline-block">
          <h2 className="text-white text-[40px] md:text-[64px] font-playfair z-10 text-shadow-white text-shadow-lg/30 relative">
            Pasangan
          </h2>
          <span className="absolute bottom-[-35px] left-[70px] md:bottom-[-50px] md:left-[120px] text-pink-500 text-[45px] md:text-[66px] font-dancingscript z-20 text-shadow-lg/50">
            Mempelai
          </span>
        </div>
        <p className="text-white my-20 max-w-xl mx-auto text-base text-md md:text-xl leading-relaxed font-lora text-shadow-lg/30">
          “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri agar kamu merasa
          tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan
          sayang.” <br />
          <span className="text-sm italic">— QS. Ar-Rum: 21</span>
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <CoupleCard
            name="Fitratul Ulfa, S.Pd"
            image="/images/AV2_7569.JPG"
            quote="Wanita hebat yang penuh kasih, penyayang dan lembut. Memiliki hati yang selalu mendukung dalam suka maupun duka."
            instagramUrl="https://instagram.com/__ulfa21"
          />
        </motion.div>

        {/* Pemisah "&" */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-2 my-5 mx-3"
        >
          <div className="w-18 h-px bg-white animate-grow-x" />
          <span className="text-6xl text-white font-light animate-pulse font-meaculpa">
            &
          </span>
          <div className="w-18 h-px bg-white animate-grow-x" />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <CoupleCard
            name="Muhammad Ihsan, S.Kom"
            image="/images/AV2_7565.JPG"
            quote="Pria penyabar dan bijaksana, penuh dedikasi dan tanggung jawab. Siap menempuh kehidupan baru dengan cinta yang tulus."
            instagramUrl="https://instagram.com/"
          />
        </motion.div>
      </div>
    </section>
  );
}

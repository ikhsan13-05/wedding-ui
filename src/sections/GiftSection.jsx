import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, CreditCard, Gift } from "lucide-react";

// Gambar chip dan logo bank
const chipImg = "/images/atm/chip.png";
const briLogo = "/images/atm/logo-bri-transparan.png";
const bpdLogo = "/images/atm/Logo_Bank_Sulselbar.png";

const GiftCard = ({ bankName, name, number, logo }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="rounded-2xl relative text-white border bg-white/10 backdrop-blur-md p-6 shadow-2xl w-[350px] md:w-[400px] max-w-md overflow-hidden"
      style={
        {
          // backgroundImage: `url('/images/atm/bg1.png')`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }
      }
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 z-0 rounded-2xl" />
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <img src={chipImg} alt="chip" className="w-10 h-8" />
          <img src={logo} alt={bankName} className="h-15 w-20 object-contain" />
        </div>
        <h3 className="text-lg font-lora">
          {bankName} - {name}
        </h3>
        <p className="text-xl font-bold tracking-widest mt-1">{number}</p>
        <button
          onClick={copyToClipboard}
          className="mt-4 hover:bg-pink-500 hover:text-white border-b-2 rounded-full text-sm font-bold px-4 py-2 transition-all"
        >
          {copied ? "✅ Disalin!" : "Salin No.Rekening"}
        </button>
      </div>
    </motion.div>
  );
};

const slideVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

const GiftsSection = () => {
  const [showTransfer, setShowTransfer] = useState(false);
  const [showAlamat, setShowAlamat] = useState(false);

  return (
    <section
      id="gifts"
      className="py-16 px-4 text-white text-center bg-gradient-to-b from-black/50 to-pink-700/60 rounded-xl max-w mx-auto my-10"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative inline-block mb-12">
          <h2 className="text-white text-[40px] md:text-[64px] font-playfair z-10 relative text-shadow-white text-shadow-lg/30">
            Hadiah
          </h2>
          <span className="absolute bottom-[-30px] left-[45px] md:bottom-[-45px] md:left-[110px] text-pink-500 text-[45px] md:text-[66px] font-dancingscript z-20 text-shadow-lg/50">
            Pernikahan
          </span>
        </div>
        <p className="mb-6 text-white font-lora">
          Kehadiran Anda sudah merupakan hadiah terbaik. Namun jika ingin
          memberikan hadiah, berikut beberapa opsi:
        </p>

        {/* Tombol */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => {
              setShowTransfer(!showTransfer);
              setShowAlamat(false);
            }}
            className={`px-6 py-2 max-w-fit self-center rounded-full text-sm flex items-center gap-2 justify-center transition-all duration-300 ${
              showTransfer
                ? "bg-pink-500 text-white font-bold border-b-2"
                : "text-white hover:bg-pink-500 hover:text-white border rounded-full"
            }`}
          >
            <CreditCard className="animate-bounce" size={18} /> Transfer
          </button>

          <button
            onClick={() => {
              setShowAlamat(!showAlamat);
              setShowTransfer(false);
            }}
            className={`px-6 py-2 max-w-fit self-center rounded-full text-sm flex items-center gap-2 justify-center transition-all duration-300 ${
              showAlamat
                ? "bg-pink-500 text-white font-bold border-b-2"
                : "text-white hover:bg-pink-500 hover:text-white border"
            }`}
          >
            <Gift className="animate-bounce" size={18} /> Kirim Hadiah
          </button>
        </div>

        <AnimatePresence mode="wait">
          {showTransfer && (
            <motion.div
              className="flex flex-col items-center justify-center gap-8"
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              key="transfer"
            >
              <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
                <GiftCard
                  bankName="Bank BRI"
                  name="Muhammad Ihsan"
                  number="184501002306532"
                  logo={briLogo}
                />
                {/* <GiftCard
                  // bankName="Bank Sulselbar"
                  // name="Fitratul Ulfa"
                  // number="1402010000093209"
                  // logo={bpdLogo}
                /> */}
              </div>

              {/* ✅ Tombol Konfirmasi WA */}
              <a
                href="https://wa.me/6285255150991?text=Halo%20Ihsan%20%26%20Ulfa%2C%20saya%20telah%20melakukan%20transfer%20hadiah%20pernikahan.%20Semoga%20menjadi%20keluarga%20yang%20sakinah%2C%20mawaddah%2C%20warahmah.%20Aamiin%20Yaa%20Rabbal%20%27alamin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full text-center transition-all duration-300 shadow-lg hover:shadow-green-400/40 animate-pulse mt-4"
              >
                <MessageCircle className="w-5 h-5" />
                Konfirmasi via WhatsApp (Ihsan)
              </a>
              <a
                href="https://wa.me/6285398400079?text=Halo%20Ihsan%20%26%20Ulfa%2C%20saya%20telah%20melakukan%20transfer%20hadiah%20pernikahan.%20Semoga%20menjadi%20keluarga%20yang%20sakinah%2C%20mawaddah%2C%20warahmah.%20Aamiin%20Yaa%20Rabbal%20%27alamin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full text-center transition-all duration-300 shadow-lg hover:shadow-green-400/40 animate-pulse"
              >
                <MessageCircle className="w-5 h-5" />
                Konfirmasi via WhatsApp (Ulfa)
              </a>
            </motion.div>
          )}

          {showAlamat && (
            <motion.div
              className="mt-8 flex justify-center"
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              key="alamat"
            >
              <motion.div
                className="rounded-xl border border-white bg-white/10 backdrop-blur-md p-6 shadow-xl max-w-md w-full text-left flex flex-col justify-between"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    📦 Kirim ke Alamat
                  </h3>
                  <p className="text-white">
                    Nama: Ihsan & Ulfa <br />
                    Alamat: Jl. Sultan Alauddin 2 Lr.1 No.15 (Kost Aspuri), Kel. Mangasa, Kec. Tamalate, Kota Makassar 
                  </p>
                  <p className="mt-3 text-sm text-white/80">
                    Mohon konfirmasi jika ingin mengirim hadiah fisik. Terima
                    kasih 💕
                  </p>
                </div>
                <a
                  href="https://wa.me/6285255150991?text=Halo%20Ihsan%20%26%20Ulfa%2C%20saya%20ingin%20mengonfirmasi%20pengiriman%20hadiah."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex max-w-fit items-center justify-center gap-2 bg-green-500 hover:bg-green-600 hover:font-semibold text-white py-2 px-4 rounded-full text-center transition-all duration-300 shadow-lg hover:shadow-green-400/40 animate-pulse"
                >
                  <MessageCircle size={20} />
                  Konfirmasi via WhatsApp
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default GiftsSection;

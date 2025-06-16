import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { db } from "../firebase"; // pastikan path benar
import { serverTimestamp } from "firebase/firestore";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "yes",
    guests: 1,
    message: "",
  });

  const [comments, setComments] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "rsvp"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const totalGuests = comments
    .filter((c) => c.attendance === "yes")
    .reduce((sum, c) => sum + Number(c.guests || 1), 0);

  const hadir = comments.filter((c) => c.attendance === "yes");
  const tidakHadir = comments.filter((c) => c.attendance === "no");

  const showConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.guests < 1) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "rsvp"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      setSubmitted(true);
      showConfetti();
      setFormData({
        name: "",
        attendance: "yes",
        guests: 1,
        message: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Gagal kirim ke Firestore:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp?.toDate) return ""; // Cek jika bukan Timestamp dari Firestore
    const date = timestamp.toDate();
    return date.toLocaleString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section className="py-16 px-4 max-w mx-auto rounded-xl text-white">
      <div className="relative inline-block mb-12 text-center w-full">
        <h2 className="text-white text-[40px] md:text-[64px] font-serif z-10 relative text-shadow-white text-shadow-lg/30">
          Konfirmasi
        </h2>
        <span className="absolute left-1/2 transform -translate-x-1/20 bottom-[-30px] md:bottom-[-40px] text-pink-500 text-[45px] md:text-[66px] font-dancingscript z-20 text-shadow-lg/50">
          Kehadiran
        </span>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-black/60 p-6 rounded-xl backdrop-blur-md space-y-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Nama"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md bg-white/10 text-white"
        />
        <div className="flex flex-col md:flex-row gap-4">
          <select
            name="attendance"
            value={formData.attendance}
            onChange={handleChange}
            className="flex-1 p-3 rounded-md bg-white/10 text-white"
          >
            <option value="yes" className="text-black">
              Hadir
            </option>
            <option value="no" className="text-black">
              Berhalangan
            </option>
          </select>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            min={1}
            onChange={handleChange}
            className="w-full md:w-1/3 p-3 rounded-md bg-white/10 text-white"
          />
        </div>
        <textarea
          name="message"
          placeholder="Ucapan & Doa"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full p-3 rounded-md bg-white/10 text-white"
        />
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex items-center px-6 py-2 border rounded-xl text-white transition ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "hover:bg-pink-500 hover:text-white"
          }`}
        >
          {loading ? "Mengirim..." : "Kirim RSVP"}
        </button>
        {submitted && (
          <p className="text-green-400 mt-3 text-center">
            Terima kasih atas konfirmasinya! 💌
          </p>
        )}
      </motion.form>

      {/* Tampilkan komentar */}
      {comments.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4 text-center text-shadow-lg/30">
            💬 Ucapan & Doa
          </h3>

          {/* Scrollable Wrapper */}
          <div className="max-h-[400px] overflow-y-auto overflow-x-auto md:overflow-x-hidden px-2 custom-scrollbar">
            <div className="flex flex-col space-y-4 min-w-[300px]">
              {/* Hadir */}
              {hadir.length > 0 && (
                <>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">
                    ✅ Hadir
                  </h4>
                  <div className="flex flex-col space-y-4">
                    {hadir.map((r, index) => (
                      <motion.div
                        key={r.id}
                        className="bg-black/60 p-4 rounded-lg text-left shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="flex justify-between items-start">
                          <p className="font-semibold break-words flex items-center gap-2">
                            {r.name}
                          </p>
                          {r.timestamp && (
                            <p className="text-xs text-white/60 italic whitespace-nowrap ml-2">
                              {formatDate(r.timestamp)}
                            </p>
                          )}
                        </div>
                        {r.message && (
                          <p className="italic text-white/80 mt-1 break-words">
                            "{r.message}"
                          </p>
                        )}
                        <span
                          className={`inline-block text-[10px] tracking-wide px-3 py-1 rounded-full border ${
                            r.attendance === "yes"
                              ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-transparent shadow-md shadow-green-500/30"
                              : "bg-gradient-to-r from-rose-500 to-red-600 text-white border-transparent shadow-md shadow-red-500/30"
                          }`}
                        >
                          {r.attendance === "yes"
                            ? "✔️ Hadir"
                            : "❌ Berhalangan"}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}

              {/* Tidak Hadir */}
              {tidakHadir.length > 0 && (
                <>
                  <h4 className="text-lg font-semibold text-red-400 mt-8 mb-2">
                    ❌ Berhalangan
                  </h4>
                  <div className="flex flex-col space-y-4">
                    {tidakHadir.map((r, index) => (
                      <motion.div
                        key={r.id}
                        className="bg-black/60 p-4 rounded-lg text-left shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="flex justify-between items-start">
                          <p className="font-semibold break-words flex items-center gap-2">
                            {r.name}
                          </p>
                          {r.timestamp && (
                            <p className="text-xs text-white/60 italic whitespace-nowrap ml-2">
                              {formatDate(r.timestamp)}
                            </p>
                          )}
                        </div>
                        {r.message && (
                          <p className="italic text-white/80 mt-1 break-words">
                            "{r.message}"
                          </p>
                        )}
                        <span
                          className={`inline-block text-[10px] tracking-wide px-3 py-1 rounded-full border ${
                            r.attendance === "yes"
                              ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-transparent shadow-md shadow-green-500/30"
                              : "bg-gradient-to-r from-rose-500 to-red-600 text-white border-transparent shadow-md shadow-red-500/30"
                          }`}
                        >
                          {r.attendance === "yes"
                            ? "Hadir"
                            : "Berhalangan"}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <p className="text-center text-white/80 mt-6">
        Total tamu yang konfirmasi hadir:{" "}
        <span className="font-bold text-pink-400">{totalGuests}</span>
      </p>
    </section>
  );
}

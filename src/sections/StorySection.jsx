import { motion } from "framer-motion";

const timeline = [
  {
    year: "2019",
    title: "Pertemuan Pertama",
    desc: "Pertemuan pertama kami terjadi pada bulan April 2019, saat sebuah kegiatan Adiwiyata antar sekolah diadakan. Kala itu, kami sama-sama bertugas sebagai staf tata usaha, mewakili dua sekolah yang berbeda. Tidak ada yang menyangka bahwa pertemuan singkat di ruang administrasi akan menjadi awal dari kisah yang lebih panjang. Sejak saat itu, komunikasi kami terus terjalin. Dari hal-hal sederhana seperti bertukar informasi antar sekolah, hingga akhirnya mulai saling menunggu kabar satu sama lain. Siapa sangka, dari sebuah tugas administratif biasa, tumbuh kisah luar biasa yang membawa kami sampai di titik ini.",
    image: "/images/gallery/memori1.jpg",
  },
  {
    year: "2020",
    title: "Menjalin Hubungan",
    desc: "Setelah pertemuan pertama itu, komunikasi kami semakin intens. Awalnya hanya soal pekerjaan, bertanya tentang format laporan, berbagi jadwal kegiatan sekolah—namun perlahan, obrolan kami mulai menyentuh hal-hal pribadi. Mulai dari makanan favorit, cerita masa sekolah, hingga mimpi-mimpi sederhana tentang masa depan. Waktu berjalan, dan kami mulai menyadari ada rasa nyaman yang tumbuh. Tak ada pengakuan yang muluk, hanya perhatian kecil yang konsisten seperti pesan singkat setiap pagi, tawa di sela kesibukan, dan doa-doa diam-diam yang saling terucap. Akhirnya, kami berdua sama-sama mengakui bahwa ini bukan sekadar kebetulan. Bahwa mungkin, Tuhan mempertemukan kami bukan hanya untuk bekerja sama, tapi untuk saling melengkapi satu sama lain.",
    image: "/images/gallery/memori3.jpg",
  },
  {
    year: "2024",
    title: "Lamaran",
    desc: "Setelah melewati banyak hari bersama—dalam tawa, doa, dan saling menguatkan di sela kesibukan sebagai tenaga tata usaha—kami akhirnya sampai di titik keyakinan. Bahwa hubungan ini bukan sekadar saling mengenal, tapi saling ingin membangun masa depan. Lamaran itu tidak terjadi dalam gemerlap pesta besar. Justru berlangsung hangat dan sederhana, di hadapan keluarga terdekat. Di ruang tamu rumah yang penuh senyum dan haru, ia datang membawa niat baik dan keberanian. Dengan tutur kata yang tulus dan mata yang penuh harap, ia menyampaikan niat untuk melangkah ke jenjang yang lebih serius. Tak perlu banyak kata, cukup doa dan restu dari orang tua yang membuat hari itu terasa sangat istimewa. Lamaran itu menjadi titik awal kami untuk berjalan bersama dalam satu tujuan: membangun rumah tangga yang penuh cinta, kesabaran, dan keberkahan.",
    image: "/images/gallery/lamaran.jpeg",
  },
];

export default function StorySection() {
  return (
    <section className="py-16 px-4 rounded-xl max-w mx-auto my-10">
      <div className="text-center mb-16">
        <div className="relative inline-block mb-16">
          <h2 className="text-white text-[40px] md:text-[64px] font-playfair z-10 relative text-shadow-white text-shadow-lg/30">
            Perjalanan
          </h2>
          <span className="absolute bottom-[-30px] left-[120px] md:bottom-[-45px] md:left-[180px] text-pink-500 text-[45px] md:text-[66px] font-dancingscript z-20 text-shadow-lg/50">
            Cinta
          </span>
        </div>
        <p className="text-white text-md font-lora max-w-xl mx-auto">
          Perjalanan yang membawa kami pada hari yang penuh cinta
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* garis tengah */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-pink-400" />

        <div className="flex flex-col gap-20 relative z-10">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row items-center gap-6 w-full ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Gambar */}
              <div className="w-50 h-36 md:w-42 md:h-42 rounded-xl md:rounded-full overflow-hidden border-pink-400 border-b-3 shadow-lg shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Konten */}
              <div className="bg-black text-white p-6 rounded-xl shadow-md w-full max-w-md border-b-2 border-pink-400">
                <div className="text-pink-400 font-bold text-md font-merienda mb-1">
                  {item.year}
                </div>
                <h3 className="text-lg font-semibold font-lora">{item.title}</h3>
                <p className="text-sm text-justify text-white font-lora mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

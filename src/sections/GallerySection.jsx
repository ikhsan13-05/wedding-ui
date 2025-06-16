import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const galleryImages = [
  "/images/wrapper/gambar1.jpg",
  "/images/wrapper/gambar2.jpg",
  "/images/wrapper/gambar3.jpg",
  "/images/wrapper/gambar4.jpg",
  "/images/wrapper/gambar5.jpg",
  "/images/wrapper/gambar6.jpg",
  "/images/wrapper/gambar7.jpg",
  "/images/wrapper/bg-home.jpg",
];

export default function GallerySection() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gradient-to-b from-black/50 via-pink-700/60 to-black/80 rounded-md text-white py-16 px-4 max-w mx-auto my-10">
      <div className="text-center mb-12">
        <div className="relative inline-block mb-16">
          <h2 className="text-white text-[40px] md:text-[64px] font-playfair z-10 text-shadow-white text-shadow-lg/30 relative">
            Galeri
          </h2>
          <span className="absolute bottom-[-30px] left-[50px] md:bottom-[-40px] md:left-[100px] text-pink-500 text-[45px] md:text-[66px] font-dancingscript text-shadow-lg/50 z-20">
            Prewed
          </span>
        </div>
        <p className="text-white/70 max-w-xl mx-auto mt-2">
          Momen-momen yang mengiringi langkah kami menuju hari bahagia
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-5 border-t-2 border-b-2 border-pink-400 rounded-xl p-5 bg-black/40 backdrop-blur-sm">
        <Swiper
          ref={swiperRef}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 12 },
            640: { slidesPerView: 2.5, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 25 },
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="w-full mb-8"
        >
          {galleryImages.map((img, index) => (
            <SwiperSlide
              key={index}
              className="rounded-xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-lg"
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[300px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <div className="flex flex-wrap justify-center gap-3 px-4">
          {galleryImages.map((img, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.swiper?.slideToLoop(index)}
              className={`w-15 h-15 sm:w-25 sm:h-25 rounded-lg overflow-hidden border-2 ${
                index === activeIndex
                  ? "border-pink-400 brightness-100"
                  : "border-white/20 brightness-50"
              } transition-all duration-300`}
            >
              <img
                src={img}
                alt={`thumb-${index}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const InfoCard = ({
    image,
    title = "Akad Nikah",
    day = "Sabtu",
    date = "22",
    monthYear = "Februari 2025",
    time = "Pukul : 08.00 WIB - Selesai",
    location = "Kediaman Mempelai Wanita",
    address = "Jln. Yos Sudarso No.12 Rt.1 Rw. 1 Kel. Derha, Bandung",
    mapUrl = "#",
    delay = 0,
  }) => (
    <div
      className="max-w-4xl mx-auto flex flex-col md:flex-row bg-white bg-opacity-70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Kiri: Label Vertikal */}
      <div className="bg-[#4C7264] text-white text-center px-3 py-6 flex justify-center items-center rotate-[-90deg] origin-bottom-left md:origin-center md:rotate-0 md:w-24">
        <span className="text-lg font-semibold tracking-widest">{title}</span>
      </div>
  
      {/* Kanan: Isi */}
      <div className="flex-1 bg-[#EAF0EC] text-[#2F3E35]">
        {/* Gambar arch */}
        <div className="w-full h-[420px] relative overflow-hidden rounded-t-[80px]">
          <img
            src={image}
            alt="akad"
            className="w-full h-full object-cover object-top"
          />
        </div>
  
        {/* Konten */}
        <div className="px-6 py-6 space-y-2 text-center">
          <div className="text-xl font-semibold">{day}</div>
          <div className="text-4xl font-bold leading-none">{date}</div>
          <div className="text-lg font-medium">{monthYear}</div>
          <p className="text-sm italic mt-2">{time}</p>
  
          <p className="text-sm mt-1">{location}</p>
          <p className="text-sm">{address}</p>
  
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-[#4C7264] text-white text-sm px-4 py-2 rounded-full shadow-sm hover:bg-[#3d5f53] transition-all"
          >
            📍 Lokasi
          </a>
        </div>
      </div>
    </div>
  );
  
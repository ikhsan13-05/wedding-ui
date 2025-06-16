import React, { useEffect, useState } from "react";
import clsx from "clsx";

const bgImages = [
  "/images/wrapper/gambar1.jpg",
  "/images/wrapper/gambar2.jpg",
  "/images/wrapper/gambar3.jpg",
  "/images/wrapper/gambar4.jpg",
  "/images/wrapper/gambar5.jpg",
];

const BackgroundWrapper = ({ children }) => {
  const [bgIndex, setBgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % bgImages.length);
        setFade(true);
      }, 500); // durasi fade-out sebelum ganti gambar
    }, 6000); // ganti gambar setiap 8 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-0 w-full h-full min-h-screen overflow-hidden">
      {/* Background Gambar */}
      <div className="fixed inset-0 z-[-10] overflow-hidden">
        <div
          className={clsx(
            "w-full h-full bg-center bg-cover transition-opacity duration-1000 ease-in-out animate-zoomSlow",
            fade ? "opacity-80" : "opacity-0"
          )}
          style={{
            backgroundImage: `url(${bgImages[bgIndex]})`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Konten */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;

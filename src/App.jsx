import { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BackgroundWrapper from "./components/BackgroundWrapper";
import HeroSection from "./sections/HeroSection";
import HomeSection from "./sections/HomeSection";
import CoupleSection from "./sections/CoupleSection";
import InfoSection from "./sections/InfoSection";
import StorySection from "./sections/StorySection";
import GallerySection from "./sections/GallerySection";
import RSVPSection from "./sections/RSVPSection";
import GiftsSection from "./sections/GiftSection";
import ThankYouSection from "./sections/ThankYouSection";
import MusicPlayer from "./components/MusicPlayer";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef(null);
  const homeRef = useRef(null);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setTimeout(() => {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
      audioRef.current?.play();
    }, 1000); // delay sesuai durasi animasi keluar
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-poppins">
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />
      <BackgroundWrapper>
        {!isOpened && <HeroSection onOpenInvitation={handleOpenInvitation} />}
        {isOpened && (
          <>
            <HomeSection ref={homeRef} />
            <CoupleSection />
            <InfoSection />
            <StorySection />
            <GallerySection />
            <RSVPSection />
            <GiftsSection />
            <ThankYouSection />
            <BackToTopButton />
            <Footer />
          </>
        )}
        <MusicPlayer playOnOpen={isOpened} />
      </BackgroundWrapper>
    </div>
  );
}

export default App;

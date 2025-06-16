import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const target = document.getElementById("home");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-50 bg-white/20 backdrop-blur-md border border-white/30 text-white p-3 rounded-full shadow-xl hover:bg-white/30 transition-opacity ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Kembali ke atas"
    >
      <ArrowUp size={20} />
    </button>
  );
}

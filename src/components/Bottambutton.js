import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200 && window.innerWidth >= 768) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("resize", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`btn btn-success position-fixed rounded-circle shadow-lg ${
        isVisible ? "d-flex animate__animated animate__bounce" : "d-none"
      }`}
      style={{
        bottom: "25px",
        right: "95px",
        zIndex: 1050,
        width: "45px",
        height: "45px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
        padding: "10px",
      }}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;

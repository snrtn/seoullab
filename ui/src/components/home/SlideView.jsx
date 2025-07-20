import { useState, useEffect, useRef } from "react";
import SlideControl from "./SlideControl";
import slideView from "./slideView.styles";
import useMediaQuery from "@hooks/useMediaQuery";
import slides from "./slideView.data";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SlideView = () => {
  const isMobile = useMediaQuery(480);
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const resetInterval = () => {
    clearInterval(intervalRef.current);
  };

  const nextSlide = () => {
    resetInterval();
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    resetInterval();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const setSlide = (index) => {
    resetInterval();
    setCurrentSlide(index);
  };

  const getSlideImage = (index) => {
    const correctIndex = (index + slides.length) % slides.length;
    return isMobile
      ? slides[correctIndex].desktopImage
      : slides[correctIndex].desktopImage;
  };

  const getSlideContent = (index) => {
    const correctIndex = (index + slides.length) % slides.length;
    return slides[correctIndex];
  };

  return (
    <div className={slideView.container}>
      <div className="flex justify-end overflow-hidden gap-2">
        {/* {!isMobile && (
          <div className={slideView.slideImageWrapperHalf} onClick={prevSlide}>
            <div className={slideView.darkOverlay}>
              <button
                aria-label="Previous Slide"
                className={slideView.arrowLeft}
              >
                <FaChevronLeft color="white" />
              </button>
            </div>

            <img
              src={getSlideImage(currentSlide - 1)}
              alt={getSlideContent(currentSlide - 1).title || "Previous slide"}
              className={slideView.slideImage}
              style={{ width: "100%" }}
            />
          </div>
        )} */}

        {/* <Link
          className={slideView.slideImageWrapper}
          to={"/"} // link removed
          aria-label={`Current slide: ${getSlideContent(currentSlide).title}`}
        > */}
        {/* <div className={slideView.darkCenterOverlay}></div> */}
        <LazyLoadImage
          src={getSlideImage(currentSlide)}
          alt={getSlideContent(currentSlide).title || "Current slide"}
          className={slideView.slidePhotos}
        />
        {/* <div className={slideView.slideOverlay}>
            <h2 className={slideView.slideTitle}>
              <p className={"text-lg text-cWhite"}>
                {getSlideContent(currentSlide).subsubtitle}
              </p>
            </h2>
            <h2 className={slideView.slideTitle}>
              <p className={"text-md text-cWhite"}>
                {getSlideContent(currentSlide).subtitle}
              </p>
            </h2>
          </div> */}
        {/* </Link> */}

        {/* {!isMobile && (
          <div className={slideView.slideImageWrapperHalf} onClick={nextSlide}>
            <div className={slideView.darkOverlay}>
              <button aria-label="Next Slide" className={slideView.arrowRight}>
                <FaChevronRight color="white" />
              </button>
            </div>

            <img
              src={getSlideImage(currentSlide + 1)}
              alt={getSlideContent(currentSlide + 1).title || "Next slide"}
              className={slideView.slideImage}
              style={{ width: "100%" }}
            />
          </div>
        )} */}
      </div>

      <SlideControl
        currentSlide={currentSlide}
        totalSlides={slides.length}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        slides={slides}
        setSlide={setSlide}
      />
    </div>
  );
};

export default SlideView;

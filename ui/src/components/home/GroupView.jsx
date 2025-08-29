import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaSearchPlus } from "react-icons/fa";
import { MdSwipe } from "react-icons/md";
import { Link } from "react-router-dom";
import group from "./groupView.styles";
import slides from "./groupView.data";

const GroupView = () => {
  const containerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const nextSlide = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth / 3,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth / 3,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const currentContainer = containerRef.current;

    const handleScroll = () => {
      if (currentContainer) {
        const { scrollLeft, scrollWidth, clientWidth } = currentContainer;
        setIsAtStart(scrollLeft === 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
      }
    };

    if (currentContainer) {
      currentContainer.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className={group.container}>
      <div className={group.header}>
        <div>
          <h2 className={group.headerTitle}>
            <img
              src={"/assets/seoullab.png"}
              alt={"seoullab image"}
              className={"w-10"}
            />
          </h2>
          <div className="mt-3">
            <p className={group.headerSubtitle}>
              Le nom <strong>SEOUL LAB</strong> a été choisi avec soin pour
              incarner la vision culinaire du chef Juwon Kim : un pont entre
              tradition et innovation.
            </p>
            <p className={group.headerSubtitle}>
              “Seoul”, capitale de la Corée du Sud, symbolise l’héritage, la
              culture et les racines. Mais le mot évoque aussi “soul” – l’âme –,
              en écho à une cuisine sincère, émotionnelle et familière.
            </p>
            <p className={group.headerSubtitle}>
              “Lab”, abréviation de “laboratory”, fait référence à un lieu
              d’expérimentation, de recherche, où textures et saveurs sont
              explorées avec créativité.
            </p>
            <p className={group.headerSubtitle}>
              Chaque plat est une rencontre entre passé et futur.
            </p>
          </div>
        </div>
      </div>
      <div className={group.controlsContainer}>
        <div className={group.fingerScroll}>
          <MdSwipe />
        </div>
        <div className={group.buttonContainer}>
          <button
            onClick={prevSlide}
            className={`${group.button} ${
              isAtStart ? group.buttonDisabled : ""
            }`}
            disabled={isAtStart}
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            onClick={nextSlide}
            className={`${group.button} ${isAtEnd ? group.buttonDisabled : ""}`}
            disabled={isAtEnd}
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
      <div ref={containerRef} className={group.slideContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${group.slide} ${
              index === 0 || index === slides.length - 1
                ? group.invisibleSlide
                : index % 2 === 0
                ? group.evenSlide
                : group.oddSlide
            }`}
          >
            <div className={group.mainImageContainer}>
              <div className="relative h-full w-full">
                {/* <Link to={slide.collectionLink}> */}
                <img
                  src={slide.image}
                  alt={slide.image}
                  className={group.mainImage}
                />
                {/* <div className={group.overlay}>
                  <FaSearchPlus className={group.overlayIcon} />
                </div> */}
                {/* </Link> */}
              </div>
            </div>
            <div className={group.subImageContainer}>
              <div className={group.subImage}>
                <div className="relative h-full w-full">
                  {/* <Link to={slide.productLinks[0]}> */}
                  <img
                    src={slide.images[0]}
                    alt={slide.image}
                    className={group.subImageContent}
                  />
                  {/* <div className={group.overlay}>
                      <FaSearchPlus className={group.overlayIcon} />
                    </div> */}
                  {/* </Link> */}
                </div>
              </div>
              <div className={group.subImage}>
                <div className="relative h-full w-full">
                  {/* <Link to={slide.productLinks[1]}> */}
                  <img
                    src={slide.images[1]}
                    alt={slide.image}
                    className={group.subImageContent}
                  />
                  {/* <div className={group.overlay}>
                      <FaSearchPlus className={group.overlayIcon} />
                    </div> */}
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupView;

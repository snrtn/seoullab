import itemView from "./itemView.styles";
import slides from "./itemView.data";
import SlideShow from "./SlideShow";

const ItemView = () => {
  return (
    <div className={itemView.container}>
      <div className={itemView.header}>
        <h2 className={itemView.title}>
          <img
            src={"/assets/seoullab.png"}
            alt={"seoullab image"}
            className={"w-10"}
          />
        </h2>
        <div className="mt-3">
          <p className={itemView.description}>
            Seoul Lab s’est installé discrètement sur la rue Amelot, une rue
            charnière entre le 3ᵉ arrondissement bourgeois et l’esprit bohème du
            11ᵉ.
          </p>
          <p className={itemView.description}>
            Une position presque symbolique pour ce lieu qui marie tradition et
            modernité. Avec une façade sobre et une présence limitée sur les
            réseaux sociaux,
          </p>
          <p className={itemView.description}>
            Seoul Lab se distingue par une élégance discrète. Ce choix assumé
            découle d’une volonté claire : tout le temps, l’énergie et les
            moyens ont été investis en cuisine.
          </p>
        </div>
      </div>
      <SlideShow slides={slides} />
    </div>
  );
};

export default ItemView;

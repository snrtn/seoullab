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
            Chaque plat est préparé à la commande, et nos chefs s'efforcent
            toujours de vous offrir la meilleure qualité possible.
          </p>
          <p className={itemView.description}>
            Nous mettons tout en oeuvre chaque jour pour vous satisfaire et vous
            remercions sincèrement pour votre compréhension.
          </p>
          <p className={itemView.description}>
            Nous vous prions de bien vouloir nous excuser pour d’éventuels
            délais.
          </p>
        </div>
      </div>
      <SlideShow slides={slides} />
    </div>
  );
};

export default ItemView;

import { useNavigate } from "react-router-dom";

const ScrollSnapFullpage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-white text-black">
      {/* ↩️ Retour 버튼 */}
      <button
        className="fixed top-6 left-6 z-50 text-lg text-black  backdrop-blur px-5 py-2 rounded-md hover:bg-white transition"
        onClick={() => navigate("/")}
      >
        ← Retour
      </button>

      {/* SECTION 1 */}
      {/* <section className="h-screen w-screen snap-start flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold mb-6">SEOUL LAB</h1>
          <p className="text-lg leading-relaxed">
            Seoul Lab s’est installé discrètement sur la rue Amelot, une rue
            charnière entre le 3ᵉ arrondissement bourgeois et l’esprit bohème du
            11ᵉ. Une position presque symbolique pour ce lieu qui marie
            tradition et modernité.
          </p>
        </div>
      </section> */}

      {/* SECTION 2 */}
      {/* <section className="h-screen w-screen snap-start flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed">
            Avec une façade sobre et une présence limitée sur les réseaux
            sociaux, Seoul Lab se distingue par une élégance discrète. Ce choix
            assumé découle d’une volonté claire : tout le temps, l’énergie et
            les moyens ont été investis en cuisine.
          </p>
        </div>
      </section> */}

      {/* SECTION 3-1 : Brand Name Philosophy */}
      {/* <section className="h-screen w-screen snap-start flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed">
            Le nom <strong>SEOUL LAB</strong> a été choisi avec soin pour
            incarner la vision culinaire du chef Juwon Kim : un pont entre
            tradition et innovation.
          </p>
        </div>
      </section> */}

      {/* SECTION 3-2 : Meaning of “Seoul” */}
      {/* <section className="h-screen w-screen snap-start flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed">
            “Seoul”, capitale de la Corée du Sud, symbolise l’héritage, la
            culture et les racines. Mais le mot évoque aussi “soul” – l’âme –,
            en écho à une cuisine sincère, émotionnelle et familière.
          </p>
        </div>
      </section> */}

      {/* SECTION 3-3 : Meaning of “Lab” */}
      {/* <section className="h-screen w-screen snap-start flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed">
            “Lab”, abréviation de “laboratory”, fait référence à un lieu
            d’expérimentation, de recherche, où textures et saveurs sont
            explorées avec créativité. Chaque plat est une rencontre entre passé
            et futur.
          </p>
        </div>
      </section> */}

      {/* SECTION 4 */}
      {/* SECTION 1 — Le Chef: 소개 */}
      <section className="h-screen w-screen snap-start flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">Le Chef</h2>
          <p className="text-lg leading-relaxed">
            Juwon KIM, diplômé du Cordon Bleu à Paris, a construit son parcours
            entre les États-Unis, la France et la Corée du Sud. Il a travaillé
            dans des restaurants étoilés et d’autres établissements explorant
            plusieurs types de cuisines.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Les deux questions */}
      <section className="h-screen w-screen snap-start flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h2 className="text-xl font-medium mb-4">
            Ses questions essentielles
          </h2>
          <p className="text-lg leading-relaxed mb-2">
            Deux questions l’accompagnent constamment :
          </p>
          <p className="text-lg leading-relaxed italic mb-4">
            « Quelle est l’influence de la cuisine coréenne dans le monde ? »
          </p>
          <p className="text-lg leading-relaxed italic">
            « Comment transmettre aux autres la joie que j’ai ressentie en
            dégustant de bons plats ? »
          </p>
        </div>
      </section>

      {/* SECTION 3 — Naissance de Seoul Lab */}
      <section className="h-screen w-screen snap-start flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h2 className="text-xl font-medium mb-4">Naissance de Seoul Lab</h2>
          <p className="text-lg leading-relaxed">
            Seoul Lab est né de ce questionnement, de ses expériences
            internationales, de sa passion pour la cuisine, de sa sincérité — et
            surtout, de son humilité.
          </p>
        </div>
      </section>

      <section className="h-screen w-screen snap-start flex flex-col items-center justify-center text-center px-6 bg-white">
        <p className="text-lg italic mt-4">Merci de votre lecture.</p>
        <p className="text-sm text-gray-400 mt-2">— fin —</p>
      </section>
    </div>
  );
};

export default ScrollSnapFullpage;

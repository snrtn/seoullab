import SlideView from "@home/SlideView";
import ItemView from "@home/ItemView";
import GroupView from "@home/GroupView";
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div>
      <SlideView />
      <div className="flex bg-bgWhite flex-col items-center justify-center text-center space-y-6 pt-60 pb-20">
        <div>
          <p className="font-semibold">
            <Link
              title="Plan d’accès seoul lab"
              target="_blank"
              to="https://maps.app.goo.gl/HQBzF8BhbYVMLhg36"
              className="hover:underline"
            >
              📍 91 Rue Amelot, <span className="font-bold">75011</span> Paris
            </Link>
          </p>

          <p className="text-sm">+33) 6 60 67 67 21</p>
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Horaires d'ouverture</p>
          <div className="grid grid-cols-2 gap-x-8 text-sm">
            <div className="text-left space-y-1">
              <p>Le déjeuner</p>
              <p>Le soir</p>
              <p>Dimanche</p>
            </div>
            <div className="text-left space-y-1">
              <p>12h00 - 14h00</p>
              <p>19h00 - 22h00</p>
              <p>Fermé</p>
            </div>
          </div>
          <p className="text-[12px] text-orange-700 mt-2">
            *Les horaires peuvent varier les jours fériés.*
          </p>
        </div>
      </div>
      <ItemView />
      <GroupView />
    </div>
  );
};

export default HomeView;

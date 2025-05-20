import SlideView from "@home/SlideView";
import ItemView from "@home/ItemView";
import GroupView from "@home/GroupView";

const HomeView = () => {
  return (
    <div>
      <SlideView />
      <div class="flex bg-bgWhite flex-col items-center justify-center text-center space-y-6 pt-60 pb-20">
        <div>
          <p class="font-semibold">
            91 Rue Amelot, <span class="font-bold">75011</span> Paris
          </p>
          <p class="text-sm">+33) 6 60 67 67 21</p>
        </div>

        <div class="space-y-2">
          <p class="font-semibold">Horaires d'ouverture</p>
          <div class="grid grid-cols-2 gap-x-8 text-sm">
            <div class="text-left space-y-1">
              <p>Le déjeuner</p>
              <p>Le soir</p>
              <p>Dimanche</p>
            </div>
            <div class="text-left space-y-1">
              <p>12h00 - 14h00</p>
              <p>19h00 - 22h00</p>
              <p>Fermé</p>
            </div>
          </div>
          <p class="text-[10px] text-orange-500 mt-2">
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

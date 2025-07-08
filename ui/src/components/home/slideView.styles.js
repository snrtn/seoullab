const slideView = {
  container: "relative w-full h-[600px] tablet-lg:h-[800px] overflow-hidden ",
  slideImageWrapper:
    "w-[100%] bg-center bg-cover bg-no-repeat flex-shrink-0 overflow-hidden relative",
  slideImageWrapperHalf:
    "w-auto h-[80vh] flex-shrink-0 overflow-hidden relative",

  slidePhotos:
    "relative w-full h-[600px] tablet-lg:h-[800px] overflow-hidden object-cover",
  slideLink: "absolute inset-0 flex items-center justify-center",
  slideContent:
    "relative flex h-full w-full items-start tablet-lg:items-center justify-center pt-4 tablet-lg:pt-0",
  imageWrapper: "relative h-full w-full items-center justify-end",
  darkOverlay: "absolute inset-0 bg-bgBlack cursor-pointer",
  darkCenterOverlay: "absolute inset-0 bg-bgBlack bg-opacity-0",

  // slideOverlay:
  //   "absolute inset-0 flex w-full flex-col items-center text-center justify-end section-padding translate-y-[-10%] tablet-lg:translate-y-[-18%]",

  slideTitle: "text-md tablet-lg:text-lg font-Calder text-cWhite",
  arrowLeft:
    "absolute right-20 top-1/2 transform -translate-y-1/2 flex tablet-lg:hidden",
  arrowRight:
    "absolute left-20 top-1/2 transform -translate-y-1/2 flex tablet-lg:hidden",
};

export default slideView;

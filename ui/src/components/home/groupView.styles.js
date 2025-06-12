const group = {
  container:
    "relative w-full pb-0 bg-bgWhite pt-10 tablet-lg:pt-0 tablet-lg:pb-48 ",
  header: "flex justify-between section-padding",
  headerTitle: "text-xl font-bold",
  headerSubtitle: "text-sm",
  controlsContainer:
    "mt-4 mb-3 tablet-lg:mt-2 flex items-end justify-end section-padding",
  fingerScroll: "flex pr-5 tablet-lg:hidden",
  buttonContainer: "hidden tablet-lg:flex",
  button: "mx-2 p-2",
  buttonDisabled: "cursor-not-allowed opacity-50",
  slideContainer:
    "no-scrollbar flex overflow-x-auto section-padding scroll-smooth",
  slide: "flex-shrink-0 flex flex-col overflow-hidden tablet-lg:flex-row",
  invisibleSlide: "invisible mx-[-8px] w-0",
  mainImage: "h-full w-full rounded-main object-cover transition",
  // duration-300 group-hover:opacity-70
  evenSlide: "",
  oddSlide: "",
  // overlay:
  //   "absolute inset-0 flex cursor-pointer items-center justify-center bg-white bg-opacity-10 opacity-0 transition duration-300 group-hover:opacity-100",
  overlayIcon: "text-3xl text-black",
  mainImageContainer: "group relative h-[420px] w-[300px] p-1",
  subImageContainer: "flex tablet-lg:flex-col h-[420px] w-[200px]",
  subImage: "group relative h-1/2 w-full overflow-hidden p-1",
  subImageContent: "h-full w-full rounded-main transition  object-cover",
  // duration-300 group-hover:opacity-70
};

export default group;

const horizontalImages = [
  "HOOR6310.webp",
  "HOOR6490.webp",
  "HOOR5859.webp",
  "HOOR6537.webp",
  "HOOR5812.webp",
  "HOOR5868.webp",
];

// const mobileImages = [
//   "HOOR5841.jpg",
//   "HOOR5847.jpg",
//   "HOOR6001.jpg",
//   "HOOR6369.jpg",
//   "HOOR6626.jpg",
//   "DSCF4165.webp",
// ];

const titles = [
  {
    title: "Seoul Lab",
  },
  {
    title: "Cuisine Coréenne",
  },
  {
    title: "Restaurant Coréen",
  },
  {
    title: "Plats à Partager",
  },
  {
    title: "Ambiance Coréenne",
  },
  {
    title: "Cuisine Moderne",
  },
];

// 순차적으로 매핑
const slides = titles.map((entry, i) => ({
  ...entry,
  desktopImage: `/assets/photos/horizontal/${horizontalImages[i]}`,
  // mobileImage: `/assets/photos/${mobileImages[i]}`,
}));

export default slides;

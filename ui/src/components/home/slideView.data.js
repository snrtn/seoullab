const horizontalImages = [
  "HOOR5812.webp",
  "HOOR5859.webp",
  "HOOR5868.webp",
  "HOOR6310.webp",
  "HOOR6490.webp",
  "HOOR6537.webp",
  "HOOR6694.webp",
];

const mobileImages = [
  "HOOR5841.jpg",
  "HOOR5847.jpg",
  "HOOR6001.jpg",
  "HOOR6369.jpg",
  "HOOR6626.jpg",
  "HOOR5812.webp",
  "HOOR5859.webp",
  "HOOR5868.webp",
  "HOOR6310.webp",
  "HOOR6490.webp",
  "HOOR6537.webp",
  "HOOR6694.webp",
];

// 중복 없이 무작위 배열 추출 함수
const shuffleAndPick = (arr, count) =>
  [...arr].sort(() => 0.5 - Math.random()).slice(0, count);

const titles = [
  {
    title: "Seoul Lab",
    // subtitle: "Restaurant coréen contemporain à Paris",
    // subsubtitle: "파리의 현대적인 한식당",
  },
  {
    title: "Cuisine Coréenne",
    // subtitle: "Spécialités traditionnelles et modernes de Corée",
    // subsubtitle: "전통과 현대를 아우르는 한국 요리",
  },
  {
    title: "Restaurant Coréen",
    // subtitle: "Savourez la Corée au cœur de Paris",
    // subsubtitle: "파리 중심에서 즐기는 한식",
  },
  {
    title: "Plats à Partager",
    // subtitle: "Accompagnements et spécialités coréennes à partager",
    // subsubtitle: "함께 나누는 한국식 반찬과 요리",
  },
];

const selectedDesktop = shuffleAndPick(horizontalImages, titles.length);
const selectedMobile = shuffleAndPick(mobileImages, titles.length);

const slides = titles.map((entry, i) => ({
  ...entry,
  desktopImage: `/assets/photos/horizontal/${selectedDesktop[i]}`,
  mobileImage: `/assets/photos/${selectedMobile[i]}`,
}));

export default slides;

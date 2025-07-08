const images = [
  "HOOR5841.jpg",
  "HOOR5847.jpg",
  "HOOR6001.jpg",
  "HOOR6369.jpg",
  "HOOR6626.jpg",
  "DSCF4178.webp",
  "DSCF4181.webp",
  "DSCF4188.webp",
  "DSCF4189.webp",
  "DSCF4190.webp",
  "DSCF4533.webp",
  "DSCF4655.webp",
  "DSCF4663.webp",
];

// 중복 없이 섞어서 필요한 수만큼 추출
const shuffledImages = [...images].sort(() => 0.5 - Math.random());
const neededCount = 10; // 이미지 쓸 개수
const selectedImages = shuffledImages.slice(0, neededCount);

// 텍스트 정보
const titles = [
  "SEOUL LAB",
  "LUNCH MENU",
  "SEOUL MENU",
  "LAB MENU",
  "DESSERTS",
  "SEOUL LAB",
  "LUNCH MENU",
  "SEOUL MENU",
  "LAB MENU",
  "DESSERTS",
];

const slides = [
  {
    image: "",
    title: "",
    link: "",
  },
  ...titles.map((title, i) => ({
    image: `/assets/photos/${selectedImages[i]}`,
    title,
    link: "/",
  })),
  {
    image: "",
    title: "",
    link: "",
  },
];

export default slides;

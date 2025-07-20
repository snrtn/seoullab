const images = [
  "HOOR5841.jpg",
  "HOOR5847.jpg",
  "HOOR6001.jpg",
  "HOOR6369.jpg",
  "HOOR6626.jpg",
  "DSCF4162.webp",
  "DSCF4165.webp",
  "DSCF4169.webp",
  "DSCF4178.webp",
  "DSCF4181.webp",
];

// 필요한 이미지 개수
const neededCount = 10;
const selectedImages = images.slice(0, neededCount); // 앞에서부터 순차적으로 선택

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

// 슬라이드 생성 (양쪽 빈 항목 포함)
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

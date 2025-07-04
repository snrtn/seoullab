const images = [
  "DSCF4154.webp",
  "DSCF4159.webp",
  "DSCF4161.webp",
  "DSCF4162.webp",
  "DSCF4165.webp",
  "DSCF4166.webp",
  "DSCF4169.webp",
  "DSCF4178.webp",
  "DSCF4181.webp",
  "DSCF4188.webp",
  "DSCF4189.webp",
  "DSCF4190.webp",
  "DSCF4533.webp",
  "DSCF4655.webp",
  "DSCF4663.webp",
];

// 슬라이드 개수
const SLIDE_COUNT = 4;
// 슬라이드당 이미지 수 (대표 1 + 서브 2)
const IMAGES_PER_SLIDE = 3;

// 셔플 후 필요한 개수만큼 추출
const allImages = [...images];
const shuffled = [...allImages].sort(() => 0.5 - Math.random());
const selected = shuffled.slice(0, SLIDE_COUNT * IMAGES_PER_SLIDE);

// 슬라이드 생성
const slides = [
  {
    image: "",
    images: [],
    collectionLink: "",
    productLinks: [],
  },
  ...Array.from({ length: SLIDE_COUNT }).map((_, i) => ({
    image: `/assets/photos/${selected[i * IMAGES_PER_SLIDE]}`,
    images: [
      `/assets/photos/${selected[i * IMAGES_PER_SLIDE + 1]}`,
      `/assets/photos/${selected[i * IMAGES_PER_SLIDE + 2]}`,
    ],
    collectionLink: "/",
    productLinks: ["/", "/"],
  })),
  {
    image: "",
    images: [],
    collectionLink: "",
    productLinks: [],
  },
];

export default slides;

const images = [
  "DSCF4267.JPG",
  "DSCF4310.JPG",
  "DSCF4293.JPG",
  "DSCF4250.JPG",
  "DSCF4443.JPG",
  "DSCF4217.JPG",
  "DSCF4530.JPG",
  "DSCF4533.webp",
  "DSCF4657.JPG",
  "HOOR6626.jpg",
  "DSCF4397.JPG",
  "DSCF4188.webp",
];

// 슬라이드 개수
const SLIDE_COUNT = 4;
// 슬라이드당 이미지 수 (대표 1 + 서브 2)
const IMAGES_PER_SLIDE = 3;

// 필요한 이미지 수 계산
const neededImageCount = SLIDE_COUNT * IMAGES_PER_SLIDE;
const selected = images.slice(0, neededImageCount); // 순차 선택

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

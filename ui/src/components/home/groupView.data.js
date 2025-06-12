const images = [
  "DSCF4154.JPG",
  "DSCF4159.JPG",
  "DSCF4161.JPG",
  "DSCF4162.JPG",
  "DSCF4165.JPG",
  "DSCF4166.JPG",
  "DSCF4169.JPG",
  "DSCF4178.JPG",
  "DSCF4181.JPG",
  "DSCF4188.JPG",
  "DSCF4189.JPG",
  "DSCF4190.JPG",
  "DSCF4197.JPG",
  "DSCF4200.JPG",
  "DSCF4226.JPG",
  "DSCF4247.JPG",
  "DSCF4250.JPG",
  "DSCF4267.JPG",
  "DSCF4285.JPG",
  "DSCF4288.JPG",
  "DSCF4295.JPG",
  "DSCF4301.JPG",
  "DSCF4303.JPG",
  "DSCF4305.JPG",
  "DSCF4310.JPG",
  "DSCF4348.JPG",
  "DSCF4352.JPG",
  "DSCF4393.JPG",
  "DSCF4397.JPG",
  "DSCF4398.JPG",
  "DSCF4443.JPG",
  "DSCF4505.JPG",
  "DSCF4508.JPG",
  "DSCF4518.JPG",
  "DSCF4524.JPG",
  "DSCF4530.JPG",
  "DSCF4533.JPG",
  "DSCF4655.JPG",
  "DSCF4663.JPG",
  "DSCF4665.JPG",
  "DSCF4670.JPG",
  "DSCF4736.JPG",
  "DSCF4742.JPG",
];

// 슬라이드 개수
const SLIDE_COUNT = 8;
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

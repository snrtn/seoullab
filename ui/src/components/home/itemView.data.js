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
  "DSCF4301.JPG",
  "DSCF4303.JPG",
  "DSCF4305.JPG",
  "DSCF4310.JPG",
  "DSCF4348.JPG",

  "DSCF4393.JPG",
  "DSCF4397.JPG",
  "DSCF4398.JPG",

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

// 중복 없이 섞어서 필요한 수만큼 추출
const shuffledImages = [...images].sort(() => 0.5 - Math.random());
const neededCount = 15; // 이미지 쓸 개수
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

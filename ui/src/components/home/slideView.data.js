const horizontalImages = [
  "DSCF4207.JPG",
  "DSCF4211.JPG",
  "DSCF4217.JPG",
  "DSCF4224.JPG",
  "DSCF4244.JPG",
  "DSCF4271.JPG",
  "DSCF4272.JPG",
  "DSCF4292.JPG",
  "DSCF4293.JPG",
  "DSCF4484.JPG",
  "DSCF4588.JPG",
  "DSCF4657.JPG",
  "DSCF4740.JPG",
  "DSCF4747.JPG",
];

const mobileImages = [
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

// 중복 없이 무작위 배열 추출 함수
const shuffleAndPick = (arr, count) =>
  [...arr].sort(() => 0.5 - Math.random()).slice(0, count);

const titles = [
  {
    title: "Seoul Lab",
    subtitle: "Restaurant coréen contemporain à Paris",
    subsubtitle: "파리의 현대적인 한식당",
  },
  {
    title: "Cuisine Coréenne",
    subtitle: "Spécialités traditionnelles et modernes de Corée",
    subsubtitle: "전통과 현대를 아우르는 한국 요리",
  },
  {
    title: "Restaurant Coréen",
    subtitle: "Savourez la Corée au cœur de Paris",
    subsubtitle: "파리 중심에서 즐기는 한식",
  },
  {
    title: "Plats à Partager",
    subtitle: "Accompagnements et spécialités coréennes à partager",
    subsubtitle: "함께 나누는 한국식 반찬과 요리",
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

import { menuItems } from "../menuItems";

const menus = {
  home: {
    label: "Accueil",
    href: "/",
    sections: [
      {
        title: "Accueil",
        items: [{ label: "Accueil", href: "/" }],
      },
    ],
  },
  about: {
    label: "À propos",
    href: "/about",
    sections: [
      {
        title: "À propos",
        items: [{ label: "À propos", href: "/about" }],
      },
    ],
  },
  menu: {
    label: "Menus",
    sections: [
      {
        title: "Menus",
        items: menuItems.map((item) => ({
          label: item.label,
          href: `/menu?type=${item.key}`,
        })),
      },
    ],
  },

  // contact: {
  //   label: "contact",
  //   href: "/",
  //   sections: [
  //     {
  //       title: "contact",
  //       items: [{ label: "contact", href: "/" }],
  //     },
  //   ],
  // },
};

export default menus;

// Navbar Layout
export interface Navbar {
  title: string;
  url: string;
}
// Footer
export interface FooterChild {
  name: string;
  url: string;
}
export interface Footer {
  title: string;
  child: FooterChild[];
}
// Social
export interface Social {
  title: string;
  url: string;
  img: string;
}
// Footer Layout
// Navbar
export const navbarData = (language: string): Navbar[] => [
  { title: "about", url: `/${language}` },
  { title: "skills", url: `/${language}/skills` },
  { title: "projects", url: `/${language}/projects` },
  { title: "contact", url: `/${language}/contact` },
];

// Footer
export const footerData: Footer[] = [
  {
    title: "Pages",
    child: [
      { name: "about", url: "/" },
      { name: "skills", url: "/skills" },
      { name: "projects", url: "/projects" },
      { name: "contact", url: "/contact" },
    ],
  },
  {
    title: "Resources",
    child: [
      { name: "NextJS 14", url: "https://nextjs.org/" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
    ],
  },
  {
    title: "Contact",
    child: [
      { name: "Facebook", url: "https://www.facebook.com/huy.lam.0054/" },
      { name: "Github", url: "https://github.com/HuyLam0054" },
      { name: "Instagram", url: "https://www.instagram.com/__huy.lam__/" },
      { name: "Kaggle", url: "https://www.kaggle.com/quanghuylam" },
    ],
  },
  {
    title: "Legal",
    child: [
      { name: "Privacy Policy", url: "/" },
      { name: "Terms & Conditions", url: "/" },
    ],
  },
];
// Social
export const socialData: Social[] = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/huy.lam.0054/",
    img: "/icons/Facebook_icon.svg",
  },
  {
    title: "Github",
    url: "https://github.com/HuyLam0054",
    img: "/icons/Github_icon.svg",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/__huy.lam__/",
    img: "/icons/Insta_icon.svg",
  },
  {
    title: "Kaggle",
    url: "https://www.kaggle.com/quanghuylam",
    img: "/icons/Kaggle_icon.svg",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/quang-huy-lam-3011942bb/",
    img: "/icons/Linkedin_icon.svg",
  },
];

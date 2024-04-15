interface IProjectData {
  id: number;
  name: string;
  desc: string;
  imgSrc: string;
  url: string;
}

export const projectData: IProjectData[] = [
  {
    id: 0,
    name: "Design",
    desc: "Mimic a teachers design based on screenshots and videos using SASS/SCSS",
    imgSrc: "design.png",
    url: "https://github.com/ZoeMesaros/Uppgift-design",
  },
  {
    id: 1,
    name: "Web store",
    desc: "A webstore to simulate a purchase, using Parcel and Typescript",
    imgSrc: "retro-kitchen.png",
    url: "https://github.com/ZoeMesaros/Retro-Kitchen",
  },
  {
    id: 2,
    name: "Restaurant",
    desc: "Restaurant with a booking system using APIs, created with React",
    imgSrc: "react-restaurang.png",
    url: "https://github.com/ZoeMesaros/Uppgift-restaurang",
  },
  {
    id: 3,
    name: "Movie App",
    desc: "Backend application to display and add movies using express",
    imgSrc: "movies.png",
    url: "https://github.com/NatasaIc/fullstack-applikation-express",
  },
  {
    id: 4,
    name: "Second hand admin page",
    desc: "An admin page to manage a second hand store using PHP and Database",
    imgSrc: "store.png",
    url: "https://github.com/ZoeMesaros/php-store",
  },
  {
    id: 5,
    name: "E-commerce store for my final exam",
    desc: "An e-commerce store specilizing in baking supplies. Made using Mongodb, Express, React and Node.js.",
    imgSrc: "bakbutiken.png",
    url: "https://github.com/ZoeMesaros/bakbutiken",
  },
];

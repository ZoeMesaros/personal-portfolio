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
    name: "Zoo",
    desc: "A zoo to feed animals, using API and React",
    imgSrc: "react-zoo.png",
    url: "https://github.com/ZoeMesaros/Uppgift-Zoo",
  },
  {
    id: 3,
    name: "Restaurant",
    desc: "Restaurant with a booking system using APIs, created with React",
    imgSrc: "react-restaurang.png",
    url: "https://github.com/ZoeMesaros/Uppgift-restaurang",
  },
  {
    id: 4,
    name: "Movie App",
    desc: "Backend application to display and add movies using express",
    imgSrc: "movies.png",
    url: "https://github.com/NatasaIc/fullstack-applikation-express",
  },
  {
    id: 5,
    name: "Second hand admin page",
    desc: "An admin page to manage a second hand store using PHP and Database",
    imgSrc: "store.png",
    url: "https://github.com/ZoeMesaros/php-store",
  },
];

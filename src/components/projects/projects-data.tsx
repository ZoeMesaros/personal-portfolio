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
    name: "Todo-list",
    desc: "Todo-list in Javascript",
    imgSrc: "todo-list.png",
    url: "https://github.com/ZoeMesaros/Uppgift-to-do",
  },
  {
    id: 1,
    name: "Design",
    desc: "Mimic a teachers design based on screenshots and videos using SASS/SCSS",
    imgSrc: "design.png",
    url: "https://github.com/ZoeMesaros/Uppgift-design",
  },
  {
    id: 2,
    name: "Web store",
    desc: "A webstore to simulate a purchase, using Parcel and Typescript",
    imgSrc: "retro-kitchen.png",
    url: "https://github.com/ZoeMesaros/Retro-Kitchen",
  },
  {
    id: 3,
    name: "Zoo",
    desc: "A zoo to feed animals, using React",
    imgSrc: "react-zoo.png",
    url: "https://github.com/ZoeMesaros/Uppgift-Zoo",
  },
  {
    id: 4,
    name: "Restaurant",
    desc: "Restaurant with a booking system using APIs, created with React",
    imgSrc: "react-restaurang.png",
    url: "https://github.com/ZoeMesaros/Uppgift-restaurang",
  },
  {
    id: 5,
    name: "Movie App",
    desc: "Backend application to display and add movies using express",
    imgSrc: "movies.png",
    url: "https://github.com/NatasaIc/fullstack-applikation-express",
  },
];

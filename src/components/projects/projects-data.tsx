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
    desc: "School task to mimic a teachers design based on screenshots and videos using SASS/SCSS",
    imgSrc: "design.png",
    url: "https://github.com/ZoeMesaros/Uppgift-design",
  },
  {
    id: 2,
    name: "Web store",
    desc: "School task to create a webstore to simulate a purchase, using Parcel and Typescript",
    imgSrc: "retro-kitchen.png",
    url: "https://github.com/ZoeMesaros/Retro-Kitchen",
  },
  {
    id: 3,
    name: "Zoo",
    desc: "School task to create a zoo to feed animals, using React",
    imgSrc: "react-zoo.png",
    url: "https://github.com/ZoeMesaros/Uppgift-Zoo",
  },
  {
    id: 4,
    name: "Restaurant",
    desc: "School task to create a restaurant with a booking system using APIs, created with React",
    imgSrc: "react-restaurang.png",
    url: "https://github.com/ZoeMesaros/Uppgift-restaurang",
  },
];

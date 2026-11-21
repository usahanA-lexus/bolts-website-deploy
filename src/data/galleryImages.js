import photo20260130_103231 from "../assets/gallery/20260130_103231.jpg";
import photo20260130_103635 from "../assets/gallery/20260130_103635.jpg";
import photo20260130_113150 from "../assets/gallery/20260130_113150.jpg";
import photo20260313_114555 from "../assets/gallery/20260313_114555.jpg";
import photo20260417_110950 from "../assets/gallery/20260417_110950.jpg";
import teambuilding1 from "../assets/gallery/teamBuilding1.jpg";
import teambuilding2 from "../assets/gallery/teamBuilding2.jpg";
import teambuilding3 from "../assets/gallery/teamBuilding3.jpg";
import teambuilding4 from "../assets/gallery/TeamBuilding4.png";
import teambuilding5 from "../assets/gallery/TeamBuilding5.png";
import teambuilding6 from "../assets/gallery/TeamBuilding6.png";
import teambuilding7 from "../assets/gallery/TeamBuilding7.png";
import team1Build from "../assets/gallery/Team 1 9_21_2026/IMG_4754.jpg";
import team1Workbench from "../assets/gallery/Team 1 9_21_2026/IMG_0386.jpg";
import team2Chassis from "../assets/gallery/10_14_2026 team 2/IMG_3043.jpg";
import team2Adjustments from "../assets/gallery/10_21_2026 team 2/20261021_114518.jpg";

const bonfirePhotos = import.meta.glob(
  "../assets/gallery/Bonfire Summer_26/*.jpg",
  { eager: true, as: "url" }
);
const potluckPhotos = import.meta.glob(
  "../assets/gallery/Potluck _26/*.jpg",
  { eager: true, as: "url" }
);
const october21Photos = import.meta.glob(
  "../assets/gallery/10_21_2026 team 2/*.jpg",
  { eager: true, as: "url" }
);
const october14Photos = import.meta.glob(
  "../assets/gallery/10_14_2026 team 2/*.jpg",
  { eager: true, as: "url" }
);
const september25Photos = import.meta.glob(
  "../assets/gallery/9_25_2026 endgame tea bonding exp/*.jpg",
  { eager: true, as: "url" }
);
const september21Photos = import.meta.glob(
  "../assets/gallery/Team 1 9_21_2026/*.jpg",
  { eager: true, as: "url" }
);

function eventImages(photos) {
  return Object.entries(photos)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, img]) => ({
      img,
    }));
}

/**
 * All gallery photos under src/assets/gallery/.
 */
const workshopImages =
[
  { img: photo20260130_103231 },
  { img: photo20260130_103635 },
  { img: photo20260130_113150 },
  { img: photo20260313_114555 },
  { img: photo20260417_110950 },
  { img: teambuilding1 },
  { img: teambuilding2 },
  { img: teambuilding3, alignBottom: true },
  { img: teambuilding4 },
  { img: teambuilding5 },
  { img: teambuilding6 },
  { img: teambuilding7 },
];

export const galleryEvents = [
  {
    id: "team-2-october-21",
    title: "Team 2 · October 21, 2026",
    description: "Team 2 working on the robot.",
    color: "#D3D3D3",
    images: eventImages(october21Photos),
  },
  {
    id: "team-2-october-14",
    title: "Team 2 · October 14, 2026",
    description: "Team 2 building and checking the chassis.",
    color: "#D3D3D3",
    images: eventImages(october14Photos),
  },
  {
    id: "endgame-september-25",
    title: "Endgame & Team Bonding · September 25, 2026",
    description: "An outing with the team.",
    color: "#D3D3D3",
    images: eventImages(september25Photos),
  },
  {
    id: "team-1-september-21",
    title: "Team 1 · September 21, 2026",
    description: "Team 1 building together at the workbench.",
    color: "#D3D3D3",
    images: eventImages(september21Photos),
  },
  {
    id: "potluck",
    title: "Potluck 2026",
    description: "Good food and great company.",
    color: "#D3D3D3",
    images: eventImages(potluckPhotos),
  },
  {
    id: "bonfire",
    title: "Summer Bonfire 2026",
    description: "Summer nights!",
    color: "#D3D3D3",
    images: eventImages(bonfirePhotos),
  },
  {
    id: "workshop-january-30",
    title: "January 30, 2026",
    description: "A day in the workshop with the team.",
    color: "#D3D3D3",
    images: workshopImages.slice(0, 3),
  },
  {
    id: "lab-march-13",
    title: "March 13, 2026",
    description: "Testing programs.",
    color: "#D3D3D3",
    images: workshopImages.slice(3, 4),
  },
  {
    id: "workshop-april-17",
    title: "April 17, 2026",
    description: "Nerd-maxing.",
    color: "#D3D3D3",
    images: workshopImages.slice(4, 5),
  },
  {
    id: "team-building",
    title: "Team building & workshop",
    description: "The team learning how to build a basic robot.",
    color: "#D3D3D3",
    images: workshopImages.slice(5),
  },
];

export const galleryImages = galleryEvents.flatMap((event) => event.images);

export const heroWorkshop = {
  src: team1Build,
  alt: "Team 1 members assembling a robot chassis together",
};

export const landingGalleryPhotos = [
  {
    src: team1Workbench,
    caption: "Sep 21 · Team 1 build",
    alt: "Team 1 members sorting gears and assembling parts at the workbench",
  },
  {
    src: team2Chassis,
    caption: "Oct 14 · Chassis assembly",
    alt: "A Team 2 member working on a wheeled robot chassis",
  },
  {
    src: team2Adjustments,
    caption: "Oct 21 · Robot adjustments",
    alt: "Team 2 members adjusting a robot on the workbench",
  },
  {
    src: photo20260313_114555,
    caption: "Mar 13 · Lab work",
    alt: "Team members working with laptops and robot parts in the lab",
  },
  {
    src: teambuilding3,
    caption: "Workshop · Hands-on build",
    alt: "Three team members working together on a part",
    alignBottom: true,
  },
];

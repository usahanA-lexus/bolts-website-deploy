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

const bonfirePhotos = import.meta.glob(
  "../assets/gallery/Bonfire Summer_26/*.jpg",
  { eager: true, as: "url" }
);
const potluckPhotos = import.meta.glob(
  "../assets/gallery/Potluck _26/*.jpg",
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
    id: "potluck",
    title: "Potluck 2026",
    description: "Good food and great company.",
    color: "#ff9bca",
    images: eventImages(potluckPhotos),
  },
  {
    id: "bonfire",
    title: "Summer Bonfire 2026",
    description: "Summer nights!",
    color: "#ff9bca",
    images: eventImages(bonfirePhotos),
  },
  {
    id: "workshop-january-30",
    title: "January 30, 2026",
    description: "A day in the workshop with the team.",
    color: "#ff9bca",
    images: workshopImages.slice(0, 3),
  },
  {
    id: "lab-march-13",
    title: "March 13, 2026",
    description: "Testing programs.",
    color: "#ff9bca",
    images: workshopImages.slice(3, 4),
  },
  {
    id: "workshop-april-17",
    title: "April 17, 2026",
    description: "Nerd-maxing.",
    color: "#ff9bca",
    images: workshopImages.slice(4, 5),
  },
  {
    id: "team-building",
    title: "Team building & workshop",
    description: "The team learning how to build a basic robot.",
    color: "#ff9bca",
    images: workshopImages.slice(5),
  },
];

export const galleryImages = galleryEvents.flatMap((event) => event.images);

import Image from "next/image";
import { HoverEffect } from "./ui/cardEffect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-[90rem] mx-auto sm:px-8 px-2">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "GOOGLE DRIVE",
    description: "Automate messages and notifications, enhancing collaboration and organization on Google Drive.",
    link: "#"
  },
  {
    title: "NOTION",
    description: "Effortlessly automate messages within Notion docs to streamline communication and productivity.",
    link: "#"
  },
  {
    title: "WORKFLOW",
    description: "Securely automate tasks across platforms for accelerated workflow efficiency and seamless integration.",
    link: "#"
  },
  {
    title: "SLACK",
    description: "Automate messages and notifications on Slack for improved team communication and productivity.",
    link: "#"
  },
  {
    title: "DASHBOARD",
    description: "Visualize comprehensive data sets in a centralized dashboard for informed decision-making and growth strategies.",
    link: "#"
  },
  {
    title: "VIDEO CHATS",
    description: "Engage in live video chat calls, fostering real-time collaboration and connection with your agency partners.",
    link: "#"
  },
];

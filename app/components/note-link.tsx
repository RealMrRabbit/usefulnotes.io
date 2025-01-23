 import Image from "next/image";
import { NoteLinkData } from "../data/note-link-data";

interface Properties {
  technology: NoteLinkData;
}

export default function NoteLink({ technology }: Properties) {
  const textSize = "text-xs";
  const overviewLink = technology.svgLink;
  const gettingStartedLink = technology.gettingStartedLink;
  const officialLink = technology.svgLink;
  return (
    <div className="flex justify-between items-center bg-component text-text-light p-2 rounded-default text-center text-nowrap">
      <a href={officialLink}>
        <Image
          className="hover:cursor-pointer p-2 shadow-default bg-background rounded-default h-20 w-20 self-center"
          src={technology.svg}
          alt="failed"
        />
      </a>
      <div className="flex text-left px-5 flex-col">
        <a href={technology.nameLink} className="hover: text-xl pb-1">
          {technology.name}
        </a>
        <a className={textSize} href={"/overview/" + overviewLink}>
          Overview
        </a>
        <a className={textSize} href={"/getting-started/" + gettingStartedLink}>
          Getting Started
        </a>
      </div>
    </div>
  );
}

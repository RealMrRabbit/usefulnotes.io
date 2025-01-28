import Image from "next/image";
import { NoteLinkData } from "../data/note-link-data";

interface Properties {
  technology: NoteLinkData;
}

export default function NoteLink({ technology }: Properties) {
  const textSize = "text-xs";
  const gettingStartedLink = technology.gettingStartedLink;
  const officialLink = technology.logoLink;

  return (
    <div className="flex justify-between items-center bg-component text-text-light p-2 rounded-default text-center text-nowrap">
      <a href={officialLink}>
        <Image
          className="hover:cursor-pointer p-2 shadow-default bg-background rounded-default h-20 w-20 self-center"
          src={technology.logo.thumbnailURL}
          width={technology.logo.width}
          height={technology.logo.height}
          alt="failed"
        />
      </a>
      <div className="flex text-left px-5 flex-col">
        <a href={technology.nameLink} className="hover: text-xl pb-1">
          {technology.name}
        </a>

        <a className={textSize} href={"/overview/" + technology.slug}>
          Overview
        </a>
        <a className={textSize} href={gettingStartedLink}>
          Getting Started
        </a>
      </div>
    </div>
  );
}

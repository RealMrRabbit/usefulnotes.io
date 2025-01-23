import Arch from "@/public/logos/archlinux.svg";
import Image from "next/image";

interface ButtonProps {
  technology?: string;
  href?: string;
}


export default function NoteLink({ text = "text", href = "/" }: ButtonProps) {
  const textSize ="text-xs";
  const overviewLink = "test"
  const gettingStartedLink = "test"
  const officialLink = "https://archlinux.org/"
  return (
    <div className="flex justify-between items-center bg-component text-text-light p-2 rounded-default text-center text-nowrap">
      <a href={officialLink}>

        <Image className="hover:cursor-pointer p-2 shadow-default bg-background rounded-default h-20 w-20 self-center" src={Arch} alt="failed" />
      </a>
      <div className="flex text-left px-5 flex-col">
        <a href="" className="hover: text-xl pb-1">Arch Linux</a>
        <a className={textSize} href={"/overview/" + overviewLink}>Overview</a>
        <a className={textSize} href={"/getting-started/" + gettingStartedLink}>Getting Started</a>
      </div>
    </div>
  );
}

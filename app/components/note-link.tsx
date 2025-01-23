import Arch from "@/public/logos/archlinux.svg";
import Image from "next/image";
import YAML from "yaml";
import { getStaticProps } from "next/dist/build/templates/pages";

interface ButtonProps {
  technology?: string;
  href?: string;
}


export default function NoteLink({ text = "text", href = "/" }: ButtonProps) {
  const file = getStaticProps('./test.yml', 'utf-8');
  const test = YAML.parse(file);
  const textSize ="text-xs";
  const overviewLink = test.archLinux.svgLink;
  const gettingStartedLink = test.archLinux.gettingStartedLink;
  const officialLink = test.archLinux.svgLink;
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

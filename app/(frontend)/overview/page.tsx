import Image from "next/image";
import Arch from "@/public/logos/archlinux.svg";
import CodeBlock from "../components/code-block";

export default function Home() {
  const codeSnippets = [
    {
      label: "JavaScript",
      language: "javascript",
      code: `
const roles = [
  "Full-Stack",
  "Back-End",
  "Front-End",
  "Designer"
];

const reversedArray = roles.reverse();

console.log(reversedArray);
      `,
    },
    {
      label: "Python",
      language: "python",
      code: `
roles = ["Full-Stack", "Back-End", "Front-End", "Designer"]
reversed_array = list(reversed(roles))
print(reversed_array)
      `,
    },
  ];

  return (
    <div className="bg-background font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-10 px-20">
        <div className="flex flex-row justify-start gap-10">
          <Image
            className="p-2 shadow-default bg-component max-h-60 max-w-60 rounded-default"
            src={Arch}
            alt="failed"
          />
          <div className="flex flex-col gap-5 text-text-light">
            <h1 className="text-4xl font-bold">Arch Linux</h1>
            <h2 className="text-2xl">Overview</h2>
            <p className="text-lg h-fit">
              Arch Linux is a lightweight, flexible, and minimalist Linux
              distribution designed for users who value simplicity and control.
              Built on a rolling-release model, it delivers the latest software
              updates and packages without requiring major upgrades. Arch is
              highly customizable, starting with a bare-bones system that users
              can build upon to suit their specific needs. It adheres to the
              KISS (Keep It Simple, Stupid) philosophy, emphasizing user control
              over automation, making it a favorite among experienced Linux
              enthusiasts. The Arch Wiki is renowned for its detailed
              documentation, serving as an invaluable resource for
              troubleshooting and learning. However, Arch's do-it-yourself
              approach demands a solid understanding of Linux fundamentals,
              making it best suited for advanced users or those eager to learn.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-top gap-5 justify-around">
          <div className="text-text-light">
            <ul>
              <li>Official Website</li>
              <li>Official Website</li>
              <ul>
                Tutorials
                <li>Getting Started</li>
                <li>Video</li>
              </ul>
            </ul>
          </div>
          <div>
            <CodeBlock tabs={codeSnippets} />
          </div>
        </div>
      </main>
    </div>
  );
}

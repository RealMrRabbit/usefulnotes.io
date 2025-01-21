import Image from "next/image";
import Button from "@/app/components/button";
import Search from "./components/search";
import NavBar from "./components/nav-bar";
import CodeBlock from "./components/code-block";

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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <CodeBlock tabs={codeSnippets} collapsible={true} />
      </main>
    </div>
  );
}

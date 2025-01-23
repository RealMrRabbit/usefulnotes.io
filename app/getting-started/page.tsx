import NoteLink from "../components/note-link";
import Search from "../components/search";
import { languages } from "../data/languages";
import { technologies } from "../data/technologies";

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
      <main>
        <div className="flex flex-col items-center pt-[100px] px-5 gap-10 content-center justify-center">
          {/* Content Section */}
          <div className="content-center gap-5 text-text-light">
            <h1 className="text-2xl font-bold">What We Do</h1>
            <p className="text-lg leading-relaxed max-w-md">
              Welcome to your launchpad for exploration! This page is packed
              with a curated collection of resources to help you dive into the
              world of cutting-edge technologies. Whether you're a seasoned pro
              or just starting out, there's something here to spark your
              curiosity. Go ahead—click a link and start your journey today!
            </p>
          </div>
          <Search />
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
            {technologies.map((technology) => (
              <NoteLink technology={technology} />
            ))}

            {languages.map((technology) => (
              <NoteLink technology={technology} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

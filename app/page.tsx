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
    <div className="relative min-h-screen bg-background text-white font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-2 gap-10 p-20">
        {/* Left Code Block */}
        <div className="flex items-center justify-center">
          <CodeBlock tabs={codeSnippets} />
        </div>

        {/* Content Section */}
        <div className="flex flex-row gap-5 text-text-light justify-self-top">
          <h1 className="text-2xl font-bold">What We Do</h1>
          <p className="text-lg leading-relaxed max-w-md">
            Welcome to your launchpad for exploration! This page is packed with
            a curated collection of resources to help you dive into the world of
            cutting-edge technologies. Whether you’re a seasoned pro or just
            starting out, there’s something here to spark your curiosity. Go
            ahead—click a link and start your journey today!
          </p>
        </div>

        {/* Tip Section */}
        <div className="m-10 w-[50%] text-text-light justify-self-right">
          <h1 className="text-2xl font-semibold mb-2">Tip of the Day</h1>
          <p className="text-lg">
            Good comments are essential for maintaining clear, understandable
            code, but too many comments can clutter your code. Focus on
            explaining why something is done, rather than what is done. The code
            itself should be self-explanatory where possible. Use comments to
            clarify complex logic or assumptions.
          </p>
        </div>

        {/* Right Code Block */}
        <div className="flex items-center justify-center">
          <CodeBlock tabs={codeSnippets} />
        </div>
      </main>
    </div>
  );
}

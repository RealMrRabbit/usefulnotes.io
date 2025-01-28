import Image from "next/image";
// import Arch from "@/public/logos/archlinux.svg";
import CodeBlock from "../../components/code-block";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";

export default async function Home({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const payload = await getPayload({ config: configPromise });
  const results = await payload.find({
    collection: "basic-info",
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  console.log(results);
  const doc = results.docs[0];
  console.log(doc);

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
            src={doc.logo.thumbnailURL}
            height={doc.logo.height}
            width={doc.logo.width}
            alt="failed"
          />
          <div className="flex flex-col gap-5 text-text-light">
            <h1 className="text-4xl font-bold">{doc.name}</h1>
            <h2 className="text-2xl">Overview</h2>
            <RichText data={doc.longDescription} className="text-lg h-fit overflow-auto" />
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

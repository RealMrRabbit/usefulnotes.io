import { getPayload } from "payload";
import NoteLink from "../components/note-link";
import Search from "../components/search";
import configPromise from "@payload-config";

export default async function Home() {
  const payload = await getPayload({ config: configPromise });

  const results = await payload.find({
    collection: "basic-info",
  });

  // Check if results.docs exist
  const noteLinkDataArray =
    results.docs?.map((item) => ({
      logo: item.logo,
      logoLink: item.officialSite,
      name: item.name,
      gettingStartedLink: "",
      slug: item.slug
    })) || [];

  return (
    <div className="bg-background font-[family-name:var(--font-geist-sans)]">
      <main>
        <div className="flex flex-col items-center px-5 gap-10 content-center justify-center">
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
            {noteLinkDataArray.map((noteLinkData, index) => (
              <NoteLink key={index} technology={noteLinkData} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

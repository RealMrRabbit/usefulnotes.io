import { getPayload } from "payload";
import configPromise from "@payload-config";
import { RenderHero } from "@/app/page-components/RenderHero";
import { cache } from "react";

type Args = {
  params: Promise<{ slug?: string }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise;
  const payload = await getPayload({ config: configPromise });

  const page = await queryPageBySlug({ slug });
  const { hero } = page;

  return (
    <div>
      <RenderHero {...hero} />
    </div>
  );
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  // const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: "pages",
    //   draft,
    limit: 1,
    pagination: false,
    //   overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});

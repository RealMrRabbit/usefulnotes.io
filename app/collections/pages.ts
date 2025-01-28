import type { CollectionConfig } from "payload";
import { generatePreviewPath } from "../utils/generatePreviewPath";
import { hero } from "../page-components/config";
import { formatSlug } from "./basic-info";

export const Pages: CollectionConfig<"pages"> = {
  slug: "pages",
  admin: {
    defaultColumns: ["title", "slug", "updatedAt"],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === "string" ? data.slug : "",
          collection: "pages",
          req,
        });

        return path;
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === "string" ? data.slug : "",
        collection: "pages",
        req,
      }),
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("name")],
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          fields: [hero],
          label: "Hero",
        },
      ],
    },
  ],
};

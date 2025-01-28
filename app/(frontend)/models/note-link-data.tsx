import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface NoteLinkData {
    logo: string | StaticImport;
    logoLink: string;
    name: string;
    nameLink: string;
    cheatSheetLink: string;
    gettingStartedLink: string;
    slug: string;
  }
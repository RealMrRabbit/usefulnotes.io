import { Media } from "@/payload-types";

export interface NoteLinkData {
    logo: Media;
    logoLink: string | null | undefined;
    name: string;
    nameLink: string;
    cheatSheetLink: string;
    gettingStartedLink: string;
  }
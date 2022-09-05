import { ApiConnector, Language, Region } from "@atlasacademy/api-connector";

export const apiConnector = new ApiConnector({
  host: "https://api.atlasacademy.io",
  region: Region.JP,
  language: Language.ENGLISH,
});

export const cacheDuration = 20 * 1000;

import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "ComicCollab",
  EMAIL: "mal@noonthirty.one",
  NUM_POSTS_ON_HOMEPAGE: 0,//3,
  NUM_WORKS_ON_HOMEPAGE: 0,//2,
  NUM_PROJECTS_ON_HOMEPAGE: 0,//3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Join ComicCollab to navigate the comic creation journey with fellow artists and writers. Discover collaboration opportunities, streamline project management, and produce stunning comics.",
};

// export const BLOG: Metadata = {
//   TITLE: "Blog",
//   DESCRIPTION: "A collection of articles on topics I am passionate about.",
// };

// export const WORK: Metadata = {
//   TITLE: "Work",
//   DESCRIPTION: "Where I have worked and what I have done.",
// };

// export const PROJECTS: Metadata = {
//   TITLE: "Projects",
//   DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
// };

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/malcreatesstuff",
  },
  {
    NAME: "github",
    HREF: "https://github.com/malachaifrazier"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/malachaifrazier",
  }
];

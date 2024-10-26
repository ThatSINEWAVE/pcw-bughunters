// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Introduction",
    href: "/introduction",
    noLink: true,
    items: [
      { title: "About us", href: "/about-us" }
  },
  {
    title: "In-Game Research",
    href: "/in-game-research",
    noLink: true,
    items: [
      { title: "animation-testing-while-lagging", href: "/animation-testing-while-lagging" },
      { title: "camera-movement-unlocked", href: "/camera-movement-unlocked" },
      { title: "collision-bugs", href: "/collision-bugs" },
      { title: "damage-calculation", href: "/damage-calculation" },
      { title: "gameplay-mechanics", href: "/gameplay-mechanics" },
      { title: "main-menu-box-entry", href: "/main-menu-box-entry" },
      { title: "shooting-range-dummy-glitch", href: "/shooting-range-dummy-glitch" },
      { title: "tank-modules-locations-and-effects", href: "/tank-modules-locations-and-effects" },
      { title: "weaponry", href: "/weaponry" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    noLink: true,
    items: [
      { title: "Dev Info", href: "/dev-info" },
      { title: "Stats Sheet", href: "/stats-sheet" },
      { title: "Stats Website", href: "/stats-website" }
    ],
  },
  {
    title: "Speculations",
    href: "/speculations",
    noLink: true,
    items: [
      { title: "Real Engine Name", href: "/real-engine-name" },
      { title: "Story Mode Campaign", href: "/story-mode-campaign" }
    ],
  },
  {
    title: "Datamining",
    href: "/datamining",
    noLink: true,
    items: [
      { title: "coldwar.project Config", href: "/coldwar-project-config" },
      { title: "Development Info Images", href: "/development-info-images" },
      { title: "Dev Servers", href: "/dev-servers" },
      { title: "Extra Map Imagery", href: "/extra-map-imagery" },
      { title: "Full Crew Hints", href: "/full-crew-hints" },
      { title: "Graffiti Art and Posters", href: "/graffiti-art-and-posters" },
      { title: "High Res Backgrounds", href: "/high-res-backgrounds" },
      { title: "Icon Concept Packs", href: "/icon-concept-packs" },
      { title: "Loading Videos", href: "/loading-videos" },
      { title: "Maps and Radars", href: "/maps-and-radars" },
      { title: "Potential Hidden Servers", href: "/potential-hidden-servers" },
      { title: "QoL Improvements", href: "/qol-improvements" },
      { title: "Shell Types and Upgrades", href: "/shell-types-and-upgrades" },
      { title: "Tank Decals", href: "/tank-decals" },
      { title: "The Three Badges", href: "/the-three-badges" },
      { title: "Trailer Campaign Videos", href: "/trailer-campaign-videos" },
      { title: "Unused Background Images", href: "/unused-background-images" },
      { title: "Wierd Pattern Images", href: "/wierd-pattern-images" }
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();

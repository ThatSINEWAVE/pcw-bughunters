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
      { title: "About Us", href: "/about-us" },
      { title: "Our Plans", href: "/plans" },
    ],
  },
  {
    title: "In-Game Research",
    href: "/in-game-research",
    noLink: true,
    items: [
      { title: "Animation Testing While Lagging", href: "/animation-testing-while-lagging" },
      { title: "Camera Movement Unlocked", href: "/camera-movement-unlocked" },
      // { title: "Collision Bugs", href: "/collision-bugs" },
      { title: "Damage Calculation", href: "/damage-calculation" },
      // { title: "Gameplay Mechanics", href: "/gameplay-mechanics" },
      { title: "Main Menu Box Entry", href: "/main-menu-box-entry" },
      { title: "Shooting Range Dummy Glitch", href: "/shooting-range-dummy-glitch" },
      { title: "Tank Modules Locations and Effects", href: "/tank-modules-locations-and-effects" },
      // { title: "Weaponry", href: "/weaponry" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    noLink: true,
    items: [
      // { title: "Dev Info", href: "/dev-info" },
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
      // { title: "Story Mode Campaign", href: "/story-mode-campaign" }
    ],
  },
  {
    title: "Datamining",
    href: "/datamining",
    noLink: true,
    items: [
      { title: "coldwar.project Config", href: "/coldwar-project-config" },
      // { title: "Development Info Images", href: "/development-info-images" },
      // { title: "Dev Servers", href: "/dev-servers" },
      // { title: "Extra Map Imagery", href: "/extra-map-imagery" },
      // { title: "Full Crew Hints", href: "/full-crew-hints" },
      // { title: "Graffiti Art and Posters", href: "/graffiti-art-and-posters" },
      { title: "High Res Backgrounds", href: "/high-res-backgrounds" },
      // { title: "Icon Concept Packs", href: "/icon-concept-packs" },
      // { title: "Loading Videos", href: "/loading-videos" },
      { title: "Maps and Radars", href: "/maps-and-radars" },
      { title: "Potential Hidden Servers", href: "/potential-hidden-servers" },
      // { title: "QoL Improvements", href: "/qol-improvements" },
      { title: "Shell Types and Upgrades", href: "/shell-types-and-upgrades" },
      // { title: "Tank Decals", href: "/tank-decals" },
      { title: "The Three Badges", href: "/the-three-badges" },
      // { title: "Trailer Campaign Videos", href: "/trailer-campaign-videos" },
      // { title: "Unused Background Images", href: "/unused-background-images" },
      { title: "Wierd Pattern Images", href: "/wierd-pattern-images" },
      {
        title: "SPECS Files",
        href: "/specs-files",
        noLink: true,
        items: [
          { title: "All Vehicles", href: "/vehicles" },
          { title: "Akira", href: "/akira" },
          { title: "AR-AAV", href: "/ar-aav" },
          { title: "Arblast", href: "/arblast" },
          { title: "Atom", href: "/atom" },
          { title: "Blitz", href: "/blitz" },
          { title: "Brimstone", href: "/brimstone" },
          { title: "Chopper", href: "/chopper" },
          { title: "Fantome 1", href: "/fantome-1" },
          { title: "Fantome 2", href: "/fantome-2" },
          { title: "HSTV-L", href: "/hstv-l" },
          { title: "Jager", href: "/jager" },
          { title: "Kent", href: "/kent" },
          { title: "Punch", href: "/punch" },
          { title: "Raketa", href: "/raketa" },
          { title: "Ray", href: "/ray" },
          { title: "Reaper", href: "/reaper" },
          { title: "Titan", href: "/titan" },
          { title: "Titan AI", href: "/titan-ai" },
          { title: "Udarnik", href: "/udarnik" },
          { title: "Walkure 1", href: "/walkure-1" },
          { title: "Walkure 2", href: "/walkure-2" },
          { title: "XM808 Twister", href: "/xm808-twister" },
        ]
      },
    ],
  }
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

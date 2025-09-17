import type { SvgIcon } from "@/components/ui/icons/schema";

export const svgIcons = {
  arrowRight: {
    paths: [
      {
        d: "m9 18 6-6-6-6",
      },
    ],
    class: "transition duration-300 group-hover:translate-x-1",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  instagram: {
    paths: [
      {
        d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3",
      },
    ],
    height: 24,
    width: 24,
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    title: "Instagram",
  },
  openInNew: {
    paths: [
      {
        d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25",
      },
    ],
    class: "ml-0.5 w-3 h-3 md:w-4 md:h-4 inline pb-0.5",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  accordionNotActive: {
    paths: [
      {
        d: "m6 9 6 6 6-6",
      },
    ],
    class:
      "block h-5 w-5  text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:hidden dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  accordionActive: {
    paths: [
      {
        d: "m18 15-6-6-6 6",
      },
    ],
    class:
      "hidden h-5 w-5  text-neutral-600 group-hover:text-neutral-500 hs-accordion-active:block dark:text-neutral-400",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
  },
  facebook: {
    paths: [
      {
        d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
      },
    ],
    height: 24,
    width: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    title: "Facebook",
  },
  manRunning: {
    paths: [
      {
        d: "M13 22v-5l-2.1-2l-.775 3.45q-.1.4-.437.613t-.738.137L4 18.2q-.425-.075-.65-.425T3.2 17t.425-.662t.775-.138l3.8.8l1.6-8.1l-1.8.7V12q0 .425-.288.713T7 13t-.712-.288T6 12V8.95q0-.3.163-.537T6.6 8.05L9.95 6.6q.875-.375 1.288-.487T12 6q.525 0 .975.275T13.7 7l1 1.6q.525.85 1.363 1.475T18 10.9q.425.075.713.375T19 12t-.288.7t-.687.225q-1.35-.2-2.525-.838t-2-1.587l-.6 3l1.8 1.7q.15.15.225.338t.075.387V22q0 .425-.288.713T14 23t-.712-.288T13 22m.5-16.5q-.825 0-1.412-.587T11.5 3.5t.588-1.412T13.5 1.5t1.413.588T15.5 3.5t-.587 1.413T13.5 5.5",
      },
    ],
    height: 24,
    width: 24,
    viewBox: "0 0 24 24",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "none",
  },
  manBiking: {
    paths: [
      {
        d: "m8.5 10.5l-.6-.8a1 1 0 0 0 .153 1.694zm4 2l.99.141a1 1 0 0 0-.543-1.035zm-1.49 3.359a1 1 0 1 0 1.98.282zM12.5 7.5l.707-.707A1 1 0 0 0 11.9 6.7zM15 10l-.707.707A1 1 0 0 0 15 11zm2 1a1 1 0 1 0 0-2zm-9 5a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zm-2 2a2 2 0 0 1-2-2H2a4 4 0 0 0 4 4zm-2-2a2 2 0 0 1 2-2v-2a4 4 0 0 0-4 4zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zm2.053-2.606l4 2l.894-1.788l-4-2zm3.457.965l-.5 3.5l1.98.282l.5-3.5zM9.1 11.3l4-3l-1.2-1.6l-4 3zm2.693-3.093l2.5 2.5l1.414-1.414l-2.5-2.5zM15 11h2V9h-2zm5 5a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zm-2 2a2 2 0 0 1-2-2h-2a4 4 0 0 0 4 4zm-2-2a2 2 0 0 1 2-2v-2a4 4 0 0 0-4 4zm2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zm-3-9v2a2 2 0 0 0 2-2zm0 0h-2a2 2 0 0 0 2 2zm0 0V3a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2z",
      },
    ],
    height: 24,
    width: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    strokeWidth: "0.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "none",
  },
  play: {
    paths: [
      {
        d: "M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z",
      },
    ],
    height: 24,
    width: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
  },
  circledArrowRight: {
    paths: [
      {
        d: "m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
      },
    ],
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    stroke: "currentColor",
    fill: "none",
    viewBox: "0 0 24 24",
    height: 20,
    width: 20,
  },
  burgerMenu: {
    lines: [
      { x1: 3, x2: 21, y1: 6, y2: 6 },
      { x1: 3, x2: 21, y1: 12, y2: 12 },
      { x1: 3, x2: 21, y1: 18, y2: 18 },
    ],
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
} satisfies Record<string, SvgIcon>;

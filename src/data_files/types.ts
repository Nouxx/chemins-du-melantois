export type Link = {
  name: string;
  href: string;
  openInNewTab?: boolean;
};

export type SvgLogoLink = {
  /** svg must be imported with ?raw */
  svg: string;
  link: Link;
};

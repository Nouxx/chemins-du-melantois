export type Link = {
  name: string;
  href: string;
  openInNewTab?: boolean;
};

export type SvgLogoLink = {
  /** must be imported with ?raw */
  svg: string;
  link: Link;
};

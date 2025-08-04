/**
 * remove the trailing slash from a string (usually an URL/URI) if any
 */
export function removeTrailingSlash(url: string): string {
  if (url.length === 1 && url.startsWith("/")) return url;
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

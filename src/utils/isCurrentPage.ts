import { removeTrailingSlash } from "./utils";

// must be called with path/URI only
// return `true` if the target URI is or is a parent of current URI
// usage: current URI comes from the browser `Astro.url` and target URI from a internal link const list
// build + whole app crashes so it's ok to throw
export function isCurrentPage(currentUri: string, targetUri: string): boolean {
  if (!currentUri.startsWith("/") || !targetUri.startsWith("/")) {
    throw Error(
      `isCurrentPage was invoked with an invalid path: current=${currentUri} path=${targetUri}`,
    );
  }
  if (currentUri === "/") {
    return targetUri === "/";
  }
  if (targetUri === "/") {
    return currentUri === "/";
  }
  return removeTrailingSlash(currentUri).startsWith(targetUri);
}

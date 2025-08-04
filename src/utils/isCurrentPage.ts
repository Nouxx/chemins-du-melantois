import { removeTrailingSlash } from "./removeTrailingSlash";

/**
 * return `true` if `targetPath` is `currentPath` or its parent
 *
 * Usage: current should be `Astro.url.pathname` to compare with existing routes (e.g. `/myroute`)
 *
 */
export function isCurrentPath(
  currentPath: string,
  targetPath: string,
): boolean {
  if (!currentPath.startsWith("/") || !targetPath.startsWith("/")) {
    // error will fail the build, so it's safe to throw
    throw Error(
      `isCurrentPage was invoked with an invalid path: current=${currentPath} path=${targetPath}`,
    );
  }
  if (currentPath === "/") {
    return targetPath === "/";
  }
  if (targetPath === "/") {
    return currentPath === "/";
  }
  return removeTrailingSlash(currentPath).startsWith(targetPath);
}

// Format the date to a string
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(undefined, options);
}
// Capitalize the first letter
function capitalize(str: string): string {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function removeTrailingSlash(url: string): string {
  if (url.length === 1 && url.startsWith("/")) return url;
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export { formatDate, capitalize, removeTrailingSlash };

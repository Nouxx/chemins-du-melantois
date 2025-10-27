export function hasDuplicate(array: number[]): boolean {
  return new Set(array).size !== array.length;
}

export function hasDuplicate(array: number[]): boolean {
  return new Set(array).size !== array.length;
}

type PrimitiveArray = Array<string | number | boolean>;

export function haveSameElements(
  arrayA: PrimitiveArray,
  arrayB: PrimitiveArray,
): boolean {
  const sortedOpen = [...arrayA].sort();
  const sortedClose = [...arrayB].sort();
  return sortedOpen.every((n, i) => n === sortedClose[i]);
}

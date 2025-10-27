type PrimitiveArray = Array<string | number | boolean>;

export function haveSameElements(
  arrayA: PrimitiveArray,
  arrayB: PrimitiveArray,
): boolean {
  if (arrayA.length !== arrayB.length) return false;
  const sortedOpen = [...arrayA].sort();
  const sortedClose = [...arrayB].sort();
  return sortedOpen.every((n, i) => n === sortedClose[i]);
}

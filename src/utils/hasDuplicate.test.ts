import { it, expect } from "vitest";
import { hasDuplicate } from "./hasDuplicate";

it("returns false for an empty array", () => {
  expect(hasDuplicate([])).toBe(false);
});

it("returns false for an array with unique elements", () => {
  expect(hasDuplicate([1, 2, 3, 4, 5])).toBe(false);
});

it("returns true for an array with duplicate elements", () => {
  expect(hasDuplicate([1, 2, 3, 2])).toBe(true);
});

it("returns true when more than one element is duplicated", () => {
  expect(hasDuplicate([7, 7, 7, 8, 8])).toBe(true);
});

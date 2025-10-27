import { it, expect } from "vitest";
import { haveSameElements } from "./haveSameElements";

it("returns true for two empty arrays", () => {
  expect(haveSameElements([], [])).toBe(true);
});

it("returns true for arrays with same elements in same order", () => {
  expect(haveSameElements([1, 2, 3], [1, 2, 3])).toBe(true);
});

it("returns true for arrays with same elements in different order", () => {
  expect(haveSameElements([3, 2, 1], [1, 3, 2])).toBe(true);
});

it("returns false for arrays with different lengths", () => {
  expect(haveSameElements([1, 2], [1, 2, 3])).toBe(false);
});

it("returns false for arrays with same values but different types", () => {
  expect(haveSameElements([1, 2, "3"], [1, 2, 3])).toBe(false);
});

it("returns true for arrays with duplicate elements in same amounts", () => {
  expect(haveSameElements([1, 2, 2], [2, 1, 2])).toBe(true);
});

it("returns false for arrays with different counts of same element", () => {
  expect(haveSameElements([1, 2, 2], [1, 2, 2, 2])).toBe(false);
});

it("handles string comparison correctly", () => {
  expect(haveSameElements(["a", "b", "c"], ["c", "a", "b"])).toBe(true);
});

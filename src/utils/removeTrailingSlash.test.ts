import { removeTrailingSlash } from "./removeTrailingSlash";
import { expect, it } from "vitest";

it(`should remove trailing slash when there is one`, () => {
  expect(removeTrailingSlash("/courses/")).toBe("/courses");
});

it(`should not remove trailing slash when there is none`, () => {
  expect(removeTrailingSlash("/courses")).toBe("/courses");
});

it(`should not remove trailing slash when input is "/"`, () => {
  expect(removeTrailingSlash("/")).toBe("/");
});

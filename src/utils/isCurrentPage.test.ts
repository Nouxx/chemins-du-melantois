import { isCurrentPage } from "./isCurrentPage";
import { expect, it } from "vitest";

const testCases = [
  { currentUri: "/", targetUri: "/courses", expected: false },
  { currentUri: "/", targetUri: "/", expected: true },
  { currentUri: "/courses", targetUri: "/", expected: false },
  { currentUri: "/courses", targetUri: "/courses", expected: true },
  { currentUri: "/courses/", targetUri: "/courses", expected: true },
  { currentUri: "/resultats", targetUri: "/courses", expected: false },
  { currentUri: "/courses/10-km", targetUri: "/courses", expected: true },
  { currentUri: "/courses/10-km/", targetUri: "/courses", expected: true },
];

it.each(testCases)(
  "should return $expected for current $currentUri and target $targetUri",
  ({ currentUri, targetUri, expected }) => {
    expect(isCurrentPage(currentUri, targetUri)).toBe(expected);
  },
);

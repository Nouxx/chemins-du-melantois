import { t } from "src/i18n/translate";
import { expect, test } from "vitest";

const mockedObject = {
  firstLevelKey: "value1",
  nestedKey: {
    secondLevelKey: "value2",
    anotherSecondLevelKey: "value3",
    deeplyNestedKey: {
      thirdLevelKey: "value4",
    },
  },
};

const testCases = [
  { path: "firstLevelKey", expected: "value1" },
  { path: "nestedKey.secondLevelKey", expected: "value2" },
  { path: "nestedKey.deeplyNestedKey.thirdLevelKey", expected: "value4" },
];

test.each(testCases)(
  "should return $expected for path $path",
  ({ path, expected }) => {
    expect(t(path, mockedObject)).toBe(expected);
  },
);

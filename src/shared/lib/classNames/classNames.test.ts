import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass", {}, [])).toBe("someClass");
  });

  test("with additional class", () => {
    const expected = "someClass class1 class2 class3";

    expect(classNames("someClass", {}, ["class1", "class2", "class3"]))
      .toBe(expected);
  });

  test("with mods", () => {
    const expected = "someClass class1 class2 class3 hovered srcollable";

    expect(classNames("someClass", {
      hovered: true,
      srcollable: true,
    }, ["class1", "class2", "class3"])).toBe(expected);
  });

  test("with mods false", () => {
    const expected = "someClass class1 class2 class3 hovered";

    expect(classNames("someClass", {
      hovered: true,
      srcollable: false,
    }, ["class1", "class2", "class3"])).toBe(expected);
  });

  test("with mods undefined", () => {
    const expected = "someClass class1 class2 class3 hovered";

    expect(classNames("someClass", {
      hovered: true,
      srcollable: undefined,
    }, ["class1", "class2", "class3"])).toBe(expected);
  });
});

const add = (first: number, second: number): number => {
  return first + second;
};

export { add };

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("add", () => {
    expect(add(1, 5)).toBe(6);
  });
}

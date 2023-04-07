import { describe, expect, it } from "vitest";

import { add } from "./add";

describe("add()", () => {
  it("should sum numbers", () => {
    // Arrange
    const firstNumber = 5601;
    const secondNumber = 89900;

    // Act
    const total = add(firstNumber, secondNumber);

    //Assert
    expect(total).toBe(95501);
  });
});

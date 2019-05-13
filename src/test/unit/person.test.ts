import Person from "../../js/util/Person"

describe("Personクラスを見る", () => {
  test("nanashiが返ってくる", () => {
    const person = new Person("nanashi")
    expect(person.getName()).toBe("nanashi")
  })
})

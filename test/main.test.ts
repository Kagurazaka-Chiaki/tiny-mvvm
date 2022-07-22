
import { Sum } from "../src/sum";

test('adds 1 + 2 to equal 3', () => {
    let s = new Sum()
    expect(s.run(1, 2)).toBe(3);
});
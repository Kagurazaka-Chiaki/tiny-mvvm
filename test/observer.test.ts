
import { Observer } from "../src/observer";

test('set this to that', () => {

    let test_obj = {
        key: "this"
    }

    let obs = new Observer()

    obs.observe(test_obj, "key")

    test_obj.key = "that"

    expect(test_obj.key).toBe("that");
});

import { MVVM } from "../src/mvvm";


test('simpe test', () => {

    document.body.innerHTML =
        '<div id="demo">' +
        '  <input id="input" type="text" 怪哉="text" title="#">' +
        '  <div> {{ text }} </div>' +
        '</div>';

    const mvvm = new MVVM({
        el: "#demo",
        data: {
            text: "Hello MVVM"
        },
        methods: {

        }
    });

    let input = document.querySelector("input")

    if (input) {
        expect(input.value).toBe("Hello MVVM");
        mvvm.data.text = "abc"
        expect(input.value).toBe("abc");
    }

    expect(mvvm.data.text).toBe("abc");
});
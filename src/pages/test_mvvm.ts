
import { MVVM } from "../services/mvvm/mvvm";



let TestMvvm = {
    render: async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> Test MVVM </h1>

                <div id="demo">
                    <input type="text" 怪哉="text" title="#">
                    <div> {{ text }} </div>
                </div>
            </section>
        `
        return view
    }
    , after_render: async () => {
        const mvvm = new MVVM({
            el: "#demo",
            data: {
                text: "test text"
            },
            methods: {

            }
        });
        let input = document.querySelector("input")! as HTMLInputElement;
        input.addEventListener("input", (e) => {
            if (e.target) {
                console.log((e.target as HTMLInputElement).value);
            }
        });
        mvvm.data.text = "new text";
    }

}

export default TestMvvm;


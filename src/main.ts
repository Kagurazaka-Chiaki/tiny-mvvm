/**
 * index.html 入口
**/

import { MVVM } from "./mvvm";

window.onload = () => {
    const mvvm = new MVVM({
        el: "#demo",
        data: {
            text: "test text"
        },
        methods: {

        }
    });
};

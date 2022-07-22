import { User } from "./user";

import { MVVM } from "./mvvm";

window.onload = () => {
    let title = document.querySelector("#title");
    const tsUser = new User("Dany Paredes", 36);
    if (title) title.innerHTML = tsUser.hello();


    let obj = {
        name: "me"
    }

    const mvvm = new MVVM({
        el: "#demo",
        data: {
            input: "Hello MVVM"
        },
        methods: {}
    });


    mvvm.observe(obj, "name")

    obj.name = "ke"

};
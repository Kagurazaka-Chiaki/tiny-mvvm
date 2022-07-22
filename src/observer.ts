import { Manager } from "./manager";

export class Observer {

    data_: object;

    constructor(data: object) {
        if (data && typeof data === "object") {
            this.define_reactive(data);
        }
        this.data_ = data;
    };

    define_reactive(data: object): void {

        Object.keys(data).forEach(key => {
            const manager = new Manager();
            let val = data
        })

    };


}
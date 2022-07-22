
import { Watcher } from "./watcher";

export class Manager {

    events: Array<Watcher>;

    constructor() {
        this.events = [];
    };

    add_listener(event: Watcher): void {
        this.events.push(event);
    };

    notify(): void {
        this.events.forEach(event => event.update());
    };

}
/**
 * 发布订阅 Manager
**/

import { Watcher } from "./watcher";


export class Manager {

    events: Array<Watcher>;

    constructor() {
        this.events = []
    }

    // 添加监听
    add_listener(event: Watcher): void {
        this.events.push(event);
    };

    // 通知更新
    notify(value: any): void {
        this.events.forEach(event => event.update(value));
    };

}

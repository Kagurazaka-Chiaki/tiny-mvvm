/**
 *
 */

import { MVVM } from "./mvvm";


export class Watcher {

    el: { [x: string]: any; };
    mvvm: MVVM;
    attribute: string;
    value: any;

    // 构造 Watcher
    constructor(el: { [x: string]: any }, mvvm: MVVM, attribute: string, value: any) {
        this.el = el;
        this.mvvm = mvvm;
        this.attribute = attribute;
        this.el[this.attribute] = this.value = value;
    }

    // 更新数据
    update(value: any) {
        this.el[this.attribute] = this.value = value;
    }

}

/**
 * MVVM 类
 *
 *
**/


import { Compiler } from "./compiler";
import { Manager } from "./manager";


export class MVVM {

    [x: string]: any;

    manager: Manager

    constructor(configs: MVVMObject) {
        this.el = configs.el
        this.root = document.querySelector(configs.el);
        this.data_ = configs.data;

        // 自定义方法, 未实现
        this.methods = configs.methods;

        // 发布订阅管理
        this.manager = new Manager()

        // 创建 Proxy 对象
        this.data = new Proxy(this.data_, {
            // 触发 Get
            get: (target, key, receiver) => {
                console.log(`get property ${target} ${key.toString()}`)
                return Reflect.get(target, key, receiver)
            },
            // 触发 Set
            set: (target, key, value, receiver): boolean => {
                let success = Reflect.set(target, key, value, receiver)
                if (success) {
                    console.log(`property ${key.toString()} on ${value}`)
                    this.manager.notify(value)
                    console.log(target)
                }
                return success;
            }
        });

        // 解析编译到 DOM
        this.compiler = new Compiler(this, this.root)
    }
}
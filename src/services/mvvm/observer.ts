/**
 * 观察者类
 *
 * 原来用的 Object.defineProperty
 *
 * 后来发现 Proxy 说更好的实现
 *
**/

export class Observer {
    observe(obj: any, key: any) {
        let prev = obj[key]
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: () => {
                return prev
            },
            set: (curr: any) => {
                if (curr !== prev) {
                    console.log(`observe change ${prev} to ${curr}`)
                    prev = curr
                }
            }
        })
    };
}

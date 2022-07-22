import { Compiler } from "./compiler"



interface MVVMObject {
    el: string
    data: object
    methods: object
}

export class MVVM {

    el_: Element | null
    data_: object
    methods_: object

    proxy_: object
    compile_: Compiler

    constructor(obj: MVVMObject) {
        this.el_ = document.querySelector(obj.el)
        this.data_ = obj.data
        this.methods_ = obj.methods

        this.proxy_ = new Proxy(this.data_, {
            get: (target, key, receiver) => {
                console.log(
                    `get property ${target} ${key.toString()}`
                )
                return Reflect.get(target, key, receiver)
            },
            set: (target, key, value, receiver): boolean => {
                let success = Reflect.set(target, key, value, receiver)
                if (success) {
                    console.log(
                        `property ${key.toString()} on - set to ${value}`
                    )
                    console.log(
                        target
                    )
                }
                return success;
            }
        })

        // this._compile(this.el_)

        this.compile_ = new Compiler(this.el_!, this.proxy_)
    }

    observe(obj: any, key: any) {
        let old = obj[key]
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function () {
                return old
            },
            set: function (now) {
                if (now !== old) {
                    console.log(`${old} ---> ${now}`)
                    old = now
                }
            }
        })
    };


    // Directive(el,polar,attr,elementValue){
    //     this.el=el;//元素本身dom节点
    //     this.polar = polar;//对应的polar实例
    //     this.attr = attr;//元素的被绑定的属性值，比如如果是文本节点就可以是nodeValue
    //     this.el[this.attr] = this.elementValue = elementValue;//初始化
    // }

    // _compile(el: Element | null) {
    //     if (!el) { return }

    //     var _this = this;

    //     var nodes = el.children;

    //     for (let i = 0; i < nodes.length; i++) {
    //         var node = nodes[i];

    //         console.log(node)

    //         if (node.children.length) {
    //             this._compile(node);
    //         }

    //         var matches = node.innerHTML.match(this.regex);

    //         if (matches) {

    //             var newMatches = matches.map((item: string) => {
    //                 return item.replace(/{{(.*?)}}/, "$1")
    //             });

    //             var splitTextNodes = node.innerHTML.split(/{{.*?}}/);

    //             console.log(node.innerHTML)
    //             let obj = Object.create(this.proxy_);

    //             node.innerHTML = "";

    //             if (splitTextNodes[0]) {
    //                 node.append(document.createTextNode(splitTextNodes[0]));
    //             }

    //             console.log(node.innerHTML)


    //             let o = Object.create(this.proxy_);

    //             console.log(o.input)

    //             node.innerHTML = o.input
    //         }

    //         if (node.hasAttribute("c-model")) {
    //             var attributeValue = node.getAttribute("c-model");
    //             const val = _this.proxy_[attributeValue]
    //             node.addEventListener("input", e => {
    //                 const value = e.target.value;
    //                 _this.proxy_[attributeValue] = value
    //             });

    //         }
    //     }
    // }
}
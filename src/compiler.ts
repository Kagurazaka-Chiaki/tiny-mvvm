

export class Compiler {

    el_: Element
    proxy_: object

    regex = new RegExp("{{(.*?)}}", "ig");

    constructor(el: Element, proxy: object) {
        this.el_ = el
        this.proxy_ = proxy

        console.log(el)

        this.compile(this.el_)
    }


    compile(el : Element) {
        for (let i = 0; i < el.children.length; i++) {
            let node = el.children.item(i)
            if (!node) { continue }
            console.log(node)
            let matches = node.innerHTML.match(this.regex)

            console.log(matches)
        }
    }

}
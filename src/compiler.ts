/**
 * 编译
**/

import { MVVM } from "./mvvm";
import { Watcher } from "./watcher";


export class Compiler {

    root_: { children: any; }
    mvvm_: MVVM

    bind_regex: RegExp

    constructor(mvvm: MVVM, root: { children: any; }) {
        this.mvvm_ = mvvm
        this.root_ = root

        this.bind_regex = new RegExp("{{ (.*?) }}", "gi");

        this._compile(this.mvvm_, this.root_);
    }

    _compile(mvvm: MVVM, root: { children: any; }) {
        let node_list = root.children

        for (let i = 0; i < node_list.length; i++) {

            let node = root.children[i];

            if (node.children.length) {
                this._compile(mvvm, node);
            }

            let matches = node.innerHTML.match(this.bind_regex);

            if (matches) {
                let new_matches = matches.map((item: string) => {
                    return item.replace(/{{ (.*?) }}/, "$1")
                });
                let split_innerHTML_nodes = node.innerHTML.split(/{{.*?}}/);
                node.innerHTML = "";

                if (split_innerHTML_nodes[0]) {
                    node.append(document.createTextNode(split_innerHTML_nodes[0]));
                }
                for (let j = 0; j < new_matches.length; j++) {
                    let el = document.createTextNode('');

                    node.appendChild(el);

                    if (split_innerHTML_nodes[j + 1]) {
                        node.append(document.createTextNode(split_innerHTML_nodes[j + 1]));
                    }

                    let new_watcher = new Watcher(el, mvvm, "nodeValue", mvvm.data[new_matches[j]])

                    mvvm.manager.add_listener(new_watcher)
                }
            }

            // 设置自定义属性
            if (node.hasAttribute(("怪哉")) && node.tagName == "INPUT" || node.tagName == "TEXTAREA" ) {
                node.addEventListener("input", (() => {

                    let attribute = node.getAttribute("怪哉");

                    let new_watcher = new Watcher(node, mvvm, "value", mvvm.data[attribute])
                    mvvm.manager.add_listener(new_watcher)

                    return (event: { target: { value: any; }; }) => {
                        mvvm.data[attribute] = event.target.value
                    }
                })());
            }
        }
    }
}


import { invoke } from '@tauri-apps/api'

import tauriLogo from '/tauri.svg'


let AboutTauri = {


    render: async () => {

        let view =  /*html*/`

        <h1>Welcome to Tauri!</h1>

        <div class="row">
            <a href="https://tauri.app" target="_blank" rel="noopener">
                <img src="${tauriLogo}" class="logo tauri" alt="Tauri logo" />
            </a>
        </div>

        <p>Click on the Tauri logo to learn more about the framework</p>

        <form class="row" id="greet-form">
            <input id="greet-input" placeholder="Enter a name..." />
            <button type="submit">Greet</button>
        </form>

        <p id="greet-msg"></p>

        `
        return view
    }
    , after_render: async () => {
        let greetInputEl: HTMLInputElement
        let greetMsgEl: HTMLParagraphElement

        async function greet() {
            greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value })
        }

        greetInputEl = document.querySelector("#greet-input")!
        greetMsgEl = document.querySelector("#greet-msg")!
        document.querySelector("#greet-form")!.addEventListener("submit", (e) => {
            e.preventDefault()
            greet()
        })

    }
}

export default AboutTauri;
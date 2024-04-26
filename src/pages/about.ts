
import typescriptLogo from '../typescript.svg'
// import viteLogo from 'vite.svg'
import { setupCounter } from '../services/counter.ts'


let About = {

    render: async () => {

        let view =  /*html*/`

        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
        </a>
        <h1>Vite + TypeScript</h1>
        <div class="card">
          <button id="counter" type="button">
          </button>
        </div>
        <p class="read-the-docs">
          Click on the Vite and TypeScript logos to learn more
        </p>

        `
        return view
    }
    , after_render: async () => {
        setupCounter(document.getElementById('counter')! as HTMLButtonElement)
    }
}




export default About;


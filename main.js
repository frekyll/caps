/* eslint-disable no-var */

var capitalizeTitle = require('capitalize-title')
var css = require('sheetify')
var html = require('nanohtml')
var pjson = require('./package.json')

var pageTitle = `caps • ${pjson.description}`

document.title = pageTitle

var containerStyle = css`
  * {
    box-sizing: border-box;
  }

  :root {
    --bg-color: rgb(255, 230, 230);
    --text-color-accent: rgb(150, 150, 150);
    --text-color-link: rgb(215, 45, 45);
    --text-color: rgb(75, 75, 75);
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: palatino, georgia, serif;
    margin: 0;
  }

  :host {
    margin-left: auto;
    margin-right: auto;
    max-width: 40em;
    padding: 2rem;
  }
`

var formStyle = css`
  :host label {
    display: block;
    margin-bottom: .5rem;
  }

  :host input,
  :host textarea {
    border: 2px solid var(--text-color-accent);
    display: block;
    font-family: palatino, georgia, serif;
    font-size: 1.5rem;
    height: 3rem;
    width: 100%;
  }

  :host input {
    margin-bottom: 1rem;
    border-radius: .25rem;
  }

  :host textarea {
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: 0;
    border-right: hidden;
    border-top-left-radius: .25rem;
    border-top-right-radius: 0;
    line-height: 1.5;
    resize: none;
    z-index: 1;
  }

  :host div {
    display: flex;
  }

  :host div button {
    background-color: #fff;
    border-bottom-right-radius: .25rem;
    border-top-right-radius: .25rem;
    border: 2px solid var(--text-color-accent);
    color: var(--text-color-accent);
    cursor: pointer;
    font-size: .875rem;
    line-height: 1;
    margin: 0;
    padding: .5rem 1rem;
  }

  :host div button:hover {
    border-color: var(--text-color);
    color: var(--text-color);
  }
`

var headerStyle = css`
  :host {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
  }

  :host h1 {
    font-size: 1.5rem;
    margin: 0;
  }

  :host h1 span {
    color: var(--text-color-accent);
    font-family: system-ui, sans-serif;
    font-size: .875rem;
    font-weight: normal;
  }

  :host a {
    color: var(--text-color-link);
  }
`

var output = html`<textarea readonly></textarea>`

var copyButton = html`<button onclick=${copyOutput}>Copy</button>`

var header = html`
  <header class=${headerStyle}>
    <h1>caps <span>v${pjson.version}</span></h1>
    <nav>
      <a href="https://github.com/frekyll/caps">GitHub</a>
    </nav>
  </header>
`

var form = html`
  <div class=${formStyle}>
    <label>Input:</label>
    <input onkeyup=${capitalize} type="text">
    <label>Output:</label>
    <div>
      ${output}
      ${copyButton}
    </div>
  </div>
`

var container = html`
  <div class="${containerStyle}">
    ${header}
    ${form}
  </div>
`

document.body.appendChild(container)

function capitalize (e) {
  output.innerText = capitalizeTitle(e.target.value)
}

function copyOutput (e) {
  output.select()
  output.select(0, 99999)
  document.execCommand('copy')
}

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
    --background: #fee;
    --border-state: #444;
    --border: #999;
    --link: #d33;
    --text: #333;
  }

  .theme {
    --background: #222;
    --border-state: #faa;
    --border: #fff;
    --link: #faa;
    --text: #fff;
  }

  body {
    font-family: palatino, georgia, serif;
    margin: 0;
  }

  :host {
    background-color: var(--background);
    color: var(--text);
    height: 100vh;
    padding: 2rem;
  }

  :host div {
    margin-left: auto;
    margin-right: auto;
    max-width: 40em;
  }
`

var formStyle = css`
  :host label {
    display: block;
    margin-bottom: .5rem;
  }

  :host input,
  :host textarea {
    background-color: var(--background);
    border: 2px solid var(--border);
    color: var(--text);
    display: block;
    font-family: palatino, georgia, serif;
    font-size: 1.5rem;
    height: 3rem;
    width: 100%;
  }

  :host input {
    border-radius: .25rem;
    margin-bottom: 1rem;
  }

  :host textarea {
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: 0;
    border-right: hidden;
    border-top-left-radius: .25rem;
    border-top-right-radius: 0;
    line-height: 1.75;
    overflow-y: hidden;
    resize: none;
    z-index: 1;
  }

  :host div {
    display: flex;
  }

  :host div button {
    background-color: var(--background);
    border-bottom-right-radius: .25rem;
    border-top-right-radius: .25rem;
    border: 2px solid var(--border);
    color: var(--border);
    cursor: pointer;
    font-size: .875rem;
    line-height: 1;
    margin: 0;
    padding: .5rem 1rem;
  }

  :host div button:hover {
    border-color: var(--border-state);
    color: var(--border-state);
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
    color: var(--border-state);
    font-family: system-ui, sans-serif;
    font-size: .875rem;
    font-weight: normal;
  }

  :host a {
    color: var(--link);
    margin-left: .75rem;
    text-decoration: none;
  }
`

var output = html`<textarea readonly></textarea>`

var copyButton = html`<button onclick=${copyOutput}>Copy</button>`

var header = html`
  <header class=${headerStyle}>
    <h1>caps <span>v${pjson.version}</span></h1>
    <nav>
      <a href="https://github.com/frekyll/caps">GitHub</a>
      <a href="#" onclick=${changeTheme}>🌗</a>
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
    <div>
      ${header}
      ${form}
    </div>
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

function changeTheme (e) {
  e.preventDefault()
  container.classList.toggle('theme')
}

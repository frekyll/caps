/* eslint-disable no-var */

var css = require('sheetify')
var html = require('nanohtml')
var capitalizeTitle = require('capitalize-title')

var pageTitle = 'Caps - Capitalize headings'

document.title = pageTitle

var containerStyle = css`
  * {
    box-sizing: border-box;
  }

  :root {
    --bg-color: rgb(255, 230, 230);
    --text-color: rgb(75, 75, 75);
    --text-color-accent: rgb(125, 125, 125);
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

  :host h1 {
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 2rem;
    margin-top: 0;
  }
`

var formStyle = css`
  :host label {
    display: block;
    margin-bottom: .5rem;
  }

  :host input,
  :host textarea {
    border: 1px solid var(--text-color-accent);
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
    border-right: 0;
    border-top-left-radius: .25rem;
    line-height: 1.5;
    resize: none;
  }

  :host div {
    display: flex;
  }

  :host div button {
    background-color: #fff;
    border-bottom-right-radius: .25rem;
    border-top-right-radius: .25rem;
    border: 1px solid var(--text-color-accent);
    color: var(--text-color-accent);
    cursor: pointer;
    font-family: 'helvetica neue', arial, sans-serif;
    font-size: .875rem;
    line-height: 1.5;
    margin: 0;
    padding: .5rem 1rem;
  }

  :host div button:hover {
    border-color: var(--text-color);
    color: var(--text-color);
  }
`

var output = html`<textarea readonly></textarea>`

var copyButton = html`<button onclick=${copyOutput}>Copy</button>`

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
    <h1>${pageTitle}</h1>
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

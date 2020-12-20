/* eslint-disable no-var */

var css = require('sheetify')
var html = require('nanohtml')
var titleCase = require('capitalize-title')

document.title = 'Capitalize titles in the browser'

var meta = html`
  <meta content='width=device-width, initial-scale=1' name='viewport'>
`

document.head.appendChild(meta)

var globalStyle = css`
  :root {
    --color-background: #ecdb83;
    --color-border: #fff;
    --color-text: #333;
    --font-monospace: menlo, monaco, monospace;
    --font-serif: 'hoefler text', 'bitstream charter', georgia, serif;
  }
  * {
    box-sizing: border-box;
  }
  :host {
    background-color: var(--color-background);
    color: var(--color-text);
    font-family: var(--font-serif);
    margin: 0;
    padding: 1rem;
  }
`

document.body.classList.add(`${globalStyle}`)

var formStyle = css`
  :host {
    margin-left: auto;
    margin-right: auto;
    max-width: 40em;
  }
  :host label {
    display: block;
    margin-bottom: .5rem;
  }
  :host input,
  :host textarea {
    -webkit-appearance: none;
    border: transparent;
    display: block;
    font-family: var(--font-monospace);
    font-size: 1.25rem;
    height: 3rem;
    padding-left: .5rem;
    padding-right: .5rem;
    width: 100%;
  }
  :host input {
    border-radius: .75rem;
    margin-bottom: 1rem;
  }
  :host textarea {
    border-bottom-left-radius: .75rem;
    border-bottom-right-radius: 0;
    border-right: hidden;
    border-top-left-radius: .75rem;
    border-top-right-radius: 0;
    line-height: 2.25;
    overflow-y: hidden;
    resize: none;
    z-index: 1;
  }
  :host div {
    display: flex;
    margin-bottom: 2rem;
  }
  :host button {
    background-color: var(--color-background);
    border-bottom-right-radius: .75rem;
    border-top-right-radius: .75rem;
    border: .25rem solid var(--color-border);
    color: var(--color-text);
    cursor: pointer;
    font-family: var(--font-monospace);
    font-size: 1rem;
    line-height: 1;
    margin: 0;
    padding: .5rem 1rem;
  }
  :host summary {
    border-radius: .75rem;
  }
  :host summary:hover {
    cursor: pointer;
  }
  :host ul {
    line-height: 1.5;
    padding-left: 1rem;
  }
  :host code {
    background-color: #fff;
    border-radius: .25rem;
    color: var(--color-text);
    font-family: var(--font-monospace);
    font-size: .875rem;
    padding-left: .25rem;
    padding-right: .25rem;
    white-space: nowrap;
  }
`

var headerStyle = css`
  :host {
    margin-bottom: 4rem;
    text-align: center;
  }
  :host h1 {
    font-size: 3rem;
    margin-bottom: .5rem;
    margin-top: 0;
  }
  :host h2 {
    font-size: 1.75rem;
    margin-bottom: 0;
    margin-top: 0;
  }
`

var footerStyle = css`
  :host {
    bottom: 1rem;
    position: absolute;
  }
  :host a {
    color: var(--color-text);
  }
`

var header = html`
  <header class=${headerStyle}>
    <h1>caps</h1>
    <h2><i>Capitalize titles in the browser</i></h2>
  </header>
`

var input = html`<input autofocus oninput=${format} onkeyup=${capitalize} type='text'>`

var output = html`<textarea readonly></textarea>`

var copyButton = html`<button onclick=${copyOutput}>Copy</button>`

var form = html`
  <div class=${formStyle}>
    <label>Input:</label>
      ${input}
    <label>Output:</label>
    <div>
      ${output}
      ${copyButton}
    </div>
    <details>
      <summary>Instructions:</summary>
      <ul>
        <li>You can use the key binding <code>Ctrl + v</code> to copy the output.</li>
        <li>Deselect the current field with <code>Esc</code>.</li>
      </ul>
    </details>
  </div>
`

var footer = html`
  <footer class=${footerStyle}>
    <nav>
      <a href="https://github.com/frekyll/caps">View on GitHub</a>
    </nav>
  </footer>
`

var container = html`
  <div>
    ${header}
    ${form}
    ${footer}
  </div>
`

document.body.appendChild(container)

function format (e) {
  e.target.value = e.target.value
    .replace(/[\u2013]/g, '-') // En dash
    .replace(/[\u2014]/g, '--') // Em dash
    .replace(/[\u2018\u2019]/g, "'") // Single quotes
    .replace(/[\u201C\u201D]/g, '"') // Double quotes
    .replace(/[\u2022]/g, '*') // Bullet
}

function capitalize (e) {
  output.innerText = titleCase(e.target.value)
}

function copyOutput (e) {
  output.focus()
  output.select()
  output.select(0, 99999)
  document.execCommand('copy')
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    this.activeElement.blur()
  }

  if (e.ctrlKey && e.key === 'v') {
    copyOutput()
  }
})

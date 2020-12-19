/* eslint-disable no-var */

var css = require('sheetify')
var html = require('nanohtml')
var titleCase = require('capitalize-title')

document.title = 'caps - Capitalize titles in the browser'

var meta = html`
  <meta content='width=device-width, initial-scale=1' name='viewport'>
`

document.head.appendChild(meta)

var globalStyle = css`
  :root {
    --background: #eee;
    --border: #fff;
    --link-state: #c33;
    --text: #333;
  }
  * {
    box-sizing: border-box;
  }
  :host {
    background-color: var(--background);
    color: var(--text);
    font-family: system-ui, helvetica, sans-serif;
    margin: 0;
    padding: 1rem;
  }
  .theme {
    --background: #111;
    --link-state: #ddd;
    --text: #fff;
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
    border: 2px solid var(--border);
    display: block;
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
    color: var(--text);
    cursor: pointer;
    font-size: .875rem;
    line-height: 1;
    margin: 0;
    padding: .5rem 1rem;
  }
`

var headerStyle = css`
  :host {
    margin-bottom: 8rem;
  }
  :host h1 {
    font-weight: 600;
    margin-bottom: .5rem;
    margin-top: 0;
  }
  :host nav {
    display: block;
  }
  :host a {
    color: var(--text);
    margin-right: .75rem;
  }
  :host a:hover {
    color: var(--link-state);
  }
`

var header = html`
  <header class=${headerStyle}>
    <h1>caps</h1>
    <nav>
      <a href="https://github.com/frekyll/caps">View on GitHub</a>
      <a href onclick=${changeTheme}>Toggle Theme</a>
    </nav>
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
  </div>
`

var container = html`
  <div>
    ${header}
    ${form}
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

function changeTheme (e) {
  e.preventDefault()
  document.body.classList.toggle('theme')
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    this.activeElement.blur()
  }

  if (e.ctrlKey && e.key === 'v') {
    copyOutput()
  }
})

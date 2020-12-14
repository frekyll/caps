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

  body {
    background-color: rgb(255, 230, 230);
    color: rgb(75, 75, 75);
    font-family: palatino, georgia, serif;
    margin: 0;
  }

  :host {
    margin-left: auto;
    margin-right: auto;
    max-width: 60em;
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
    display: block;
    font-family: palatino, georgia, serif;
    font-size: 1.5rem;
    height: 3rem;
    width: 100%;
  }

  :host input {
    margin-bottom: 1rem;
  }

  :host textarea {
    line-height: 1.5;
  }
`

var output = html`<textarea readonly></textarea>`

var form = html`
  <div class=${formStyle}>
    <label>Input:</label>
    <input onkeyup=${capitalize} type="text">
    <label>Output:</label>
    ${output}
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

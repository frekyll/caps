const capitalizeTitle = require('capitalize-title')
const input = document.getElementById('input')
const output = document.getElementById('output')

input.addEventListener('keyup', function () {
  output.innerText = capitalizeTitle(input.value)
})

const buttonSubmite = document.getElementById('button')
const clearButton = document.getElementById('clear-button')
buttonSubmite.addEventListener('click', function (event) {
  event.preventDefault()
})
clearButton.addEventListener('click', function () {
  const formElements = document.querySelectorAll('input')
  const textArea = document.querySelector('textarea')
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index]
    userInput.value = ''
    userInput.checked = false
  }
  textArea.value = ''
})

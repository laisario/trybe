function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
  ]
  const weekDaysList = document.querySelector('.week-days')

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index]
    const dayListItem = document.createElement('li')
    dayListItem.innerHTML = days

    weekDaysList.appendChild(dayListItem)
  }
}

createDaysOfTheWeek()

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
]
function createDaysOfTheMonth() {
  let daysList = document.getElementById('days')
  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let dayListItem = document.createElement('li')
    dayListItem.innerHTML = decemberDaysList[i]

    let day = decemberDaysList[i]

    if (day === 24 || day === 31) {
      dayListItem.className = 'day holiday'
    } else if (day === 4 || day === 11 || day === 18) {
      dayListItem.className = 'day friday'
    } else if (day === 25) {
      dayListItem.className = 'day holiday friday'
    } else {
      dayListItem.className = 'day'
    }

    daysList.appendChild(dayListItem)
  }
}
createDaysOfTheMonth()

function createButtonHoliday(nomeButton) {
  let buttonContainer = document.getElementsByClassName('buttons-container')[0]
  let buttonHoliday = document.createElement('button')
  buttonHoliday.setAttribute('id', 'bth-holiday')
  buttonHoliday.innerHTML = nomeButton
  buttonContainer.appendChild(buttonHoliday)
}
createButtonHoliday('Feriado')

let buttonHoliday = document.getElementById('bth-holiday')

function changeBackground() {
  let elementosHoliday = document.getElementsByClassName('holiday')
  for (let i = 0; i < elementosHoliday.length; i += 1) {
    if (elementosHoliday[i].style.backgroundColor !== 'white') {
      elementosHoliday[i].style.backgroundColor = 'white'
    } else {
      elementosHoliday[i].style.backgroundColor = 'rgb(238,238,238)'
    }
  }
}

buttonHoliday.addEventListener('click', changeBackground)

function createButtonFriday(nomeButton) {
  let buttonContainer = document.getElementsByClassName('buttons-container')[0]
  let buttonFriday = document.createElement('button')
  buttonFriday.setAttribute('id', 'bth-friday')
  buttonFriday.innerHTML = nomeButton
  buttonContainer.appendChild(buttonFriday)
}
createButtonFriday('Sexta-Feira')

let buttonFriday = document.getElementById('bth-friday')

function changeText() {
  let fridayDay = document.getElementsByClassName('friday')

  for (let i = 0; i < fridayDay.length; i += 1) {
    if (fridayDay[i].innerHTML !== 'SEXTOU') {
      fridayDay[i].innerHTML = 'SEXTOU'
    } else {
      let fridayNumbers = [4, 11, 18, 25]
      fridayDay[i].innerHTML = fridayNumbers[i]
    }
  }
}
buttonFriday.addEventListener('click', changeText)

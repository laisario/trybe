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

function diasDoCalendario() {
  let decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ]
  const daysList = document.querySelector('#days')
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const day = decemberDaysList[index]
    const numberDayList = document.createElement('li')
    numberDayList.innerHTML = day
    numberDayList.className = 'day'
    if (day === 24 || day === 31) {
      numberDayList.className = 'day holiday'
      daysList.appendChild(numberDayList)
    } else if (day === 4 || day === 11 || day === 18) {
      numberDayList.className = 'day friday'
      daysList.appendChild(numberDayList)
    } else if (day === 25) {
      numberDayList.className = 'day holiday friday'
      daysList.appendChild(numberDayList)
    } else {
      numberDayList.className = 'day'
      daysList.appendChild(numberDayList)
    }
  }
}
diasDoCalendario()

function feriados() {}

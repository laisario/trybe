document.getElementById('header-container').style.backgroundColor = 'green'

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0]
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)'

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3')
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)'
}
const noEmergencyTasks =
  document.getElementsByClassName('no-emergency-tasks')[0]
noEmergencyTasks.style.backgroundColor = 'yellow'

const noEmergencyTasksHeaders = document.querySelectorAll(
  '.no-emergency-tasks h3'
)
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = 'black'
}
const footer = document.getElementById('footer-container')
footer.style.backgroundColor = 'green'

document.getElementById('button').addEventListener('click', func)

let xx = ''
let x2 = ''
let x3 = ''

let agexx = 0
let agex2 = 0
let agex3 = 0

let personxI = ''
let personxII = ''
let personxIII = ''

let yy = ''
let y2 = ''
let y3 = ''

let ageyy = 0
let agey2 = 0
let agey3 = 0

let personyI = ''
let personyII = ''
let personyIII = ''

const numx = 3
const numy = 3

let totalxAge = 0
let totalyAge = 0

let averagex = 0
let averagey = 0

function func () {
  // male table section
  xx = document.getElementById('tablex').value
  x2 = document.getElementById('tablex-two').value
  x3 = document.getElementById('tablex-three').value

  agexx = document.getElementById('agex').value
  agexx = parseInt(agexx)
  agex2 = document.getElementById('agex-two').value
  agex2 = parseInt(agex2)
  agex3 = document.getElementById('agex-three').value
  agex3 = parseInt(agex3)

  personxI = document.getElementById('personx').value
  personxII = document.getElementById('personx-two').value
  personxIII = document.getElementById('personx-three').value

  // female table section
  yy = document.getElementById('tabley').value
  y2 = document.getElementById('tabley-two').value
  y3 = document.getElementById('tabley-three').value

  ageyy = document.getElementById('agey').value
  ageyy = parseInt(ageyy)
  agey2 = document.getElementById('agey-two').value
  agey2 = parseInt(agey2)
  agey3 = document.getElementById('agey-three').value
  agey3 = parseInt(agey3)

  personyI = document.getElementById('persony').value
  personyII = document.getElementById('persony-two').value
  personyIII = document.getElementById('persony-three').value

  // male "if" statement
  // xx
  // If personxI and personyI is false & agexx and ageyy is more than 2, move to (line 75). If line 75 is false, move to line 77. If all is false display line 79
  if (personxI === personyI && Math.abs(agexx - ageyy) <= 2) {
    document.getElementById('paragraph').innerHTML = xx + ' = ' + yy
  } else if (personxI === personyII && Math.abs(agexx - agey2) <= 2) {
    document.getElementById('paragraph').innerHTML = xx + ' = ' + y2
  } else if (personxI === personyIII && Math.abs(agexx - agey3) <= 2) {
    document.getElementById('paragraph').innerHTML = xx + ' = ' + y3
  } else {
    document.getElementById('paragraph').innerHTML = 'No match for ' + xx + '. NOTE: please check age gap or use a similar personality'
  }

  // x2
  if (personxII === personyI && Math.abs(agex2 - ageyy) <= 2) {
    document.getElementById('paragraph-two').innerHTML = x2 + ' = ' + yy
  } else if (personxII === personyII && Math.abs(agex2 - agey2) <= 2) {
    document.getElementById('paragraph-two').innerHTML = x2 + ' = ' + y2
  } else if (personxII === personyIII && Math.abs(agex2 - agey3) <= 2) {
    document.getElementById('paragraph-two').innerHTML = x2 + ' = ' + y3
  } else {
    document.getElementById('paragraph-two').innerHTML = 'No match for ' + x2 + '. NOTE: please check age gap or use a similar personality'
  }

  // x3
  if (personxIII === personyI && Math.abs(agex3 - ageyy) <= 2) {
    document.getElementById('paragraph-three').innerHTML = x3 + ' = ' + yy
  } else if (personxIII === personyII && Math.abs(agex3 - agey2) <= 2) {
    document.getElementById('paragraph-three').innerHTML = x3 + ' = ' + y2
  } else if (personxIII === personyIII && Math.abs(agex3 - agey3) <= 2) {
    document.getElementById('paragraph-three').innerHTML = x3 + ' = ' + y3
  } else {
    document.getElementById('paragraph-three').innerHTML = 'No match for ' + x3 + '. NOTE: please check age gap or use a similar personality'
  }

  // female "if" statement
  // yy
  // if personality xx and yy is false, move to xx and y2, if false, move to xx and y3, if all is false, display "female-paragraph".
  if ((personyI !== personxI || Math.abs(ageyy - agexx) > 2) && (personyI !== personxII || Math.abs(ageyy - agex2) > 2) && (personyI !== personxIII || Math.abs(ageyy - agex3) > 2)) {
    document.getElementById('female-paragraph').innerHTML = 'No match for ' + yy + '. NOTE: please check age gap or use a similar personality'
  } else {
    document.getElementById('female-paragraph').innerHTML = ''
  }

  // y2
  if ((personyII !== personxI || Math.abs(agey2 - agexx) > 2) && (personyII !== personxII || Math.abs(agey2 - agex2) > 2) && (personyII !== personxIII || Math.abs(agey2 - agex3) > 2)) {
    document.getElementById('female-paragraph-two').innerHTML = 'No match for ' + y2 + '. NOTE: please check age gap or use a similar personality'
  } else {
   document.getElementById('female-paragraph-two').innerHTML = ''
  }

  // y3
  if ((personyIII !== personxI || Math.abs(agey3 - agexx) > 2) && (personyIII !== personxII || Math.abs(agey3 - agex2) > 2) && (personyIII !== personxIII || Math.abs(agey3 - agex3) > 2)) {
    document.getElementById('female-paragraph-three').innerHTML = 'No match for ' + y3 + '. NOTE: please check age gap or use a similar personality'
  } else {
    document.getElementById('female-paragraph-three').innerHTML = ''
  }

  // Calculate total age for male
  totalxAge = agexx + agex2 + agex3
  for (let i = 0; i < numx; i++) {
    // Calculate avarage of the age of the three males
    averagex = totalxAge / numx
  }
  document.getElementById('average').innerHTML = 'The average age for male based on the entered ages is ' + Math.round(averagex)

  // Calculate total age for female
  totalyAge = ageyy + agey2 + agey3
  for (let i = 0; i < numy; i++) {
    // Calculate avarage of the age of the three females
    averagey = totalyAge / numy
  }
  document.getElementById('average-two').innerHTML = 'The average age for female based on the entered ages is ' + Math.round(averagey)
}

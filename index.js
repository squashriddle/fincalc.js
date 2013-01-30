;(function() {
var finCalc = {}


// Checks if value is a number
function isNum(value) {
  if (typeof value === 'undefined') return false
  return !isNaN(value)
}

// Round to two decimal places
function round(number) {
  return Math.round(number * 100) / 100
}

// Calculates simple interest I = PRT
function simpleInt(val) {
  var solution
  var interest = val.interest
  var principle = val.principle
  var rate = val.rate
  var time = val.time

  // I = PRT
  if (isNum(principle) && isNum(rate) && isNum(time)) {
    solution = {
      interest : round(principle * rate * time),
      principle : principle,
      rate : rate,
      time : time
    }

    return solution
  }

  // P = I / (RT)
  if (isNum(interest) && isNum(rate) && isNum(time)) {
    solution = {
      principle : round(interest / (rate * time)),
      interest : interest,
      rate : rate,
      time : time
    }

    return solution
  }
  
  // R = I / (PT)
  if (isNum(interest) && isNum(principle) && isNum(time)) {
    solution = {
      rate : round(interest / (principle * time)),
      interest : interest,
      principle : principle,
      time : time
    }

    return solution
  }

  // T = I / (PR)
  if (isNum(interest) && isNum(principle) && isNum(rate)) {
    solution = {
      time : round(interest / (principle * rate)),
      interest : interest,
      principle : principle,
      rate : rate
    }

    return solution
  }
}

finCalc.simpleInt = simpleInt

if (typeof exports === 'object') {
  module.exports = finCalc
} else {
  window.finCalc = finCalc
}
})()

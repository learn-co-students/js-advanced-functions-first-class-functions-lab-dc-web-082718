// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayDrivers){
  return arrayDrivers.slice(0, 2)
}

const returnLastTwoDrivers = function(arrayDrivers){
  return arrayDrivers.slice(-2, arrayDrivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier){
  return function(fare){
    return fare * multiplier
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function(arrayDrivers, somefunction){
  return somefunction(arrayDrivers)
}

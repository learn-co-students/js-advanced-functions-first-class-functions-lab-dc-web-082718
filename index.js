// Code your solution in this file!

const returnFirstTwoDrivers = function (array){
  const newArray = [array[0], array[1]];
  return newArray;
}

const returnLastTwoDrivers = function(array){
  const newArray = [array[array.length-2], array[array.length-1]]
  return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
  return function(fare){
    return fare * multiplier
  }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(array, func){
  return func(array)
}

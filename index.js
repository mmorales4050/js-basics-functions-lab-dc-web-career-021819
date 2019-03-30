// Code your solution in this file!
function distanceFromHqInBlocks (block) {
  return Math.abs(block - 42)
}

function distanceFromHqInFeet (block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet (startingBlock, endingBlock) {
  return Math.abs(endingBlock - startingBlock) * 264
}

function calculatesFarePrice (startingBlock, endingBlock) {
  distance = distanceTravelledInFeet(startingBlock, endingBlock)
  switch (true) {
    case distance < 400:
      return 0;
    case distance > 2500:
      return "cannot travel that far"
    case distance <= 2000:
      return (distance - 400) * 0.02
    case distance > 2000:
      return 25
  }
}

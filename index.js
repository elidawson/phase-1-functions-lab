//Distance in Blocks from HQ
function distanceFromHqInBlocks (pickupLocation){
  if (pickupLocation > 42) {
   return pickupLocation - 42;
  } else {
    return 42 - pickupLocation;
  }  
}

//Distance in feet from HQ
function distanceFromHqInFeet (pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}


function distanceTravelledInFeet (pickupLocation, destination) {
  if (pickupLocation < destination) {
    return (destination - pickupLocation) * 264;
  } else {
    return (pickupLocation - destination) * 264;
  }
}

function calculatesFarePrice (pickupLocation, destination) {
  const distance = distanceTravelledInFeet(pickupLocation, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
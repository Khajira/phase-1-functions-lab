// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    // Assuming headquarters is located at block 42
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264; // Assuming 1 block is equivalent to 264 feet
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264; // Assuming 1 block is equivalent to 264 feet
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // Return 0 for distances less than or equal to 400 feet
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // Assuming 2 cents per foot
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Assuming a flat fare of $25 for trips between 2000 and 2500 feet
    } else {
        return 'cannot travel that far';
    }
}



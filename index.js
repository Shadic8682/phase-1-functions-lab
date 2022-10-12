function distanceFromHqInBlocks(hq) {
    const hqPosition = 42;
    let difference = hq - hqPosition;
    const numberOfBlocks = Math.abs(difference)
    return numberOfBlocks
}
distanceFromHqInBlocks(hq);

function distanceFromHqInFeet(hqFeet) {
    let blockToFeet = distanceFromHqInBlocks(hqFeet);
    const numberOfFeet = blockToFeet * 264;
    return numberOfFeet
}

function distanceTravelledInFeet(start, destination) {
    let distance = destination - start;
    let absoluteDistance = Math.abs(distance)
    const distanceTravelledInFeet = absoluteDistance * 264
    return distanceTravelledInFeet
}

function calculatesFarePrice(start, destination) {
    let distance = destination - start;
    let absoluteDistance = Math.abs(distance)
    let distanceTravelledInFeet = absoluteDistance * 264
    var farePrice
    if (distanceTravelledInFeet <= 400) {
        var farePrice = 0
        return farePrice
    } else if (distanceTravelledInFeet <=2000) {
        var farePrice = distanceTravelledInFeet -400
        var farePrice = farePrice * 0.02
        return farePrice
    } else if (distanceTravelledInFeet <=2499) {
        let farePrice = 25
        return farePrice
    } else if (distanceTravelledInFeet >= 2500) {
        let farePrice = "cannot travel that far"
        return farePrice
    }
    return farePrice
}

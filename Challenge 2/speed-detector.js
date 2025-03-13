function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemerit = 5;
    
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Example usage:
const speed = parseInt(prompt("Enter the car speed (km/h): "));
speedDetector(speed);

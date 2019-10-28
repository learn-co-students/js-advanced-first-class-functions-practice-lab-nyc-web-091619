// Code your solution in this file!

// logDriverNames()
// Bobby
// Sally
// Sammy
// Annette
// Bobby
// ✓ logs the name of each driver
function logDriverNames(drivers){
    drivers.forEach(function(driver){
        console.log(driver.name)
    });
}


// logDriversByHometown()
// Bobby
// Sammy
// ✓ logs the name of each driver whose hometown matches the passed-in argument
const logDriversByHometown = function (drivers, hometown){
    drivers.forEach(function(driver){
        if (driver.hometown  === hometown){
            console.log(driver.name)
        } 
    });
}

// driversByRevenue()
// ✓ uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest)
const driversByRevenue = function (drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo) {
      return driverOne.revenue - driverTwo.revenue;
    });
  };


//   driversByName()
//   ✓ uses the sort() method to return a new array of drivers ordered alphabetically by name (A to Z)
const driversByName = function (drivers){
    return drivers.slice().sort(function (driverOne, driverTwo) {
        return driverOne.name.localeCompare(driverTwo.name);
    });
}

// totalRevenue()
// ✓ uses the reduce() method to sum the revenue of every driver and return the total
const totalRevenue = function (drivers){
    return drivers.reduce(function(total, currentDriver){
        return currentDriver.revenue + total;
    }, 0);
}

// averageRevenue()
// ✓ calculates the average revenue across all drivers
const averageRevenue = function (drivers){
    return totalRevenue(drivers)/ drivers.length;
}
// Code your solution in this file!
const logDriverNames = function(drivers) {
    // return drivers.name
    drivers.forEach(function(driver){
        // return driver.name
        console.log(driver.name)
    })
}

// const logDriversByHometown = function(drivers) {
//     logDriverNames(drivers).forEach(function(driver){
//         console.log(driver.homtown)
//     })
// }

const logDriversByHometown = function(drivers, hometown) {
    drivers.forEach(function(driver){
        if (driver.hometown === hometown){
            console.log(driver.name)
        }
    })
}

const driversByRevenue = function(drivers,revenue) {
    // drivers.forEach(function(driver) {
    //     console.log(driver.revenue)
    // })
    return drivers.slice().sort(function(driverOne, driverTwo){
        return driverOne.revenue - driverTwo.revenue
    })
}

const driversByName = function(drivers, name) {
    return drivers.slice().sort(function(driverOne, driverTwo){
        return driverOne.name.localeCompare(driverTwo.name)
    })
}

const totalRevenue = function(drivers) {
    return drivers.reduce(function (total, currentDriver) {
        return currentDriver.revenue + total;
      }, 0);
}

const averageRevenue = function(drivers) {
    return totalRevenue(drivers) / drivers.length
}


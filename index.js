const logDriverNames = function(drivers) {
    drivers.forEach(function(driver){
        console.log(driver.name)
    })
}     

const logDriversByHometown = function(drivers, hometown) {
        drivers.filter(function(driver) {
        if (driver.hometown === hometown) {
            debugger
            console.log(driver.name)
        }
    })
}

const driversByRevenue = function(drivers) {
    let newDrivers = [...drivers]
    return newDrivers.sort(function(driverA, driverB) {
        return driverA.revenue - driverB.revenue
    })
}

const driversByName = function(drivers) {
    let newDrivers = [...drivers]
    return newDrivers.sort(function(driverA, driverB) {
      return driverA.name.localeCompare(driverB.name)
    })
}

const totalRevenue = function(drivers) {
    return drivers.reduce(function (total, driver, idax, drivers) {
        return total + driver.revenue
    }, 0)
}

const averageRevenue = function(drivers) {
    return totalRevenue(drivers)/drivers.length
}
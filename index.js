// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach(function(driver) {
        console.log(driver.name)
    }
    )
}

function logDriversByHometown(drivers, location) {
    drivers.forEach(function(driver) {
        if (driver.hometown === location) {
            console.log (driver.name)
        }
    }
    )
}

function driversByRevenue(drivers) {
    return drivers.slice().sort(function( driver1, driver2) {
        return driver1.revenue - driver2.revenue
    }
    )
}

function driversByName(drivers){
    return drivers.slice().sort(function(driver1, driver2) {
        return driver1.name.localeCompare(driver2.name)
    }
    )
}

function totalRevenue(drivers){
    return drivers.reduce(function(total, driver) {
        return driver.revenue + total  
    },0
    )
}


function averageRevenue(drivers){
    return drivers.reduce(function(total, driver) {
        return driver.revenue + total },0 ) / (drivers.length)
}
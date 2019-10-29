// Code your solution in this file!

// the array drivers looks like this:
//  const drivers = [
//     { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
//     { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
//     { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
//     { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
//     { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
//   ];

// logDriverNames is passed an argument of an array of
// 'drivers' which is then iterated through by the forEach()
// method.  Each element of the array drivers is printed
// to the console.log.

function logDriverNames(drivers) {
    drivers.forEach(function(driver) {
        console.log(driver.name);
    });
};

// logDriversByHometown is passed an array of drivers and
// a variable of type string that corresponds to the info
// that is in the drivers array, under the attribute 'hometown'
// Here we are using map (but could use forEach) to iterate
// through the array and create a comparision to find elements
// of the array whose driver's hometown key/attribute matches
// the 'location' string we passed in.  If they match, that
// driver's name is printed to the console.log

function logDriversByHometown(drivers, location) {
    drivers.map(function(driver) {
        if (driver.hometown === location) {
            console.log(driver.name);
        }
    });
};

// using forEach instead of map:

// function logDriversByHometown(drivers, location) {
//     drivers.forEach(function(driver) {
//         if (driver.hometown === location) {
//             console.log(driver.name);
//         }
//     });
// }


// The function driversByRevenue is passed an argument of 
// an array drivers, which is then slice()ed to create a
// non-destructive copy with which we can work, because
// sort() operates in place, and is destructive.  
// sort() is passed 2 elements at a time, from which their
// revenue attributes are called and driverTwo's revenue
// is subtracted from driverOne's.  Due to the way that the
// sort() works this "custom compareFunction" 
// (e.g driverOne.revenue - driverTwo.revenue) generates
// a positive, 0 or negative value.  This value is used by
// sort to determine whether the driverOne element is 
// first (lower/negative), or unchanged (0), or if they
// should be switched (higher/positive).  sort() will then
// return the sorted array.

function driversByRevenue(drivers) {
    return drivers.slice().sort(function(driverOne, driverTwo) {
        return driverOne.revenue - driverTwo.revenue
    });
};


// The driversByName function is passed an argument of 
// drivers which is of type array.  It is then slice()d and
// sorted in the same way as the above function, except
// instead of using a mathematical formula, the string
// object's localeCompare method is used and works in the
// same fashion but lexicographically.  Words that appear
// earlier are given a negative value, equal values will
// get a 0 value and words that appear later a positive
// one.

function driversByName(drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo) {
      return driverOne.name.localeCompare(driverTwo.name);
    });
};

// totalRevenue is given an array of drivers.  From the
// array, the 'revenue' attribute is targetted and combined
// with the use of the reduce() method which reduces an 
// array object to a single value.  It does so by summing
// each value to a total (accumulator).  The value after the 
// interior (anonymous) function block is the starting value.
// In this case, we will start with a 0 total.

function totalRevenue(drivers) {
    return drivers.reduce(function (total, currentDriver) {
      return currentDriver.revenue + total;
    }, 0);
  };
  

// average revenue passes the drivers array into totalRevenue
// and receives back the summed total of the 'revenue' attributes
// of each of the driver array's members, after which it 
// uses the length of the driver's array to divide and 
//calculate the averageRevenue of all drivers.

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
  };
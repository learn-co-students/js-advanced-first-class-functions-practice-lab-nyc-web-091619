const logDriverNames = function(arr) {
  arr.forEach(driver => {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(arr, townName) {
  return arr.forEach(driver => {
    if (driver.hometown === townName) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function(arr) {
  const manipulate = [...arr];
  return manipulate.sort((driver1, driver2) => {
    return driver1.revenue - driver2.revenue;
  });
};

const driversByName = arr => {
  const maniplate = [...arr];
  return maniplate.sort((driver1, driver2) => {
    return driver1.name.localeCompare(driver2.name);
  });
};

const totalRevenue = arr => {
  return arr.reduce((total, driver) => {
    return driver.revenue + total;
  }, 0);
};

// reduce looks like:
/*

  array.reduce( (memo, element) => {function}, 0)

*/

const averageRevenue = arr => {
  return totalRevenue(arr) / arr.length;
};

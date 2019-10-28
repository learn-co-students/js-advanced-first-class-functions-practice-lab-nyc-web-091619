// Code your solution in this file!

function logDriverNames(drivers){
    return drivers.forEach( function (el, i, arr){
        console.log(el.name);
    });


}

function logDriversByHometown(drivers, location){
    return drivers.forEach( function (el, i, arr){
        if (el.hometown === location){
            console.log(el.name);
        }
    });
}

function driversByRevenue(drivers){
    let newArr = [...drivers];
    return newArr.sort( function (a,b){
        return a.revenue - b.revenue;
    });
}

function driversByName(drivers){
    let newArr = [...drivers];
    return newArr.sort(function (a, b) {
        return (a.name.localeCompare(b.name));
    });

}

function totalRevenue(drivers){
    return drivers.reduce(function (sum, el, index, arr){
        return el.revenue + sum;
    }, 0);
}

function averageRevenue(drivers){
    return totalRevenue(drivers)/drivers.length;
}
function exponentialRecurive(base, exponent) {
    if (exponent === 0) {return 1};
    let total = (base *= exponentialRecurive(base,exponent-1))
       //console.log(total) - logs the iterations to get to total product
    return total
}

console.log(exponentialRecurive(2,5));

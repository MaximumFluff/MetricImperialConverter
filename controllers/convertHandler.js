/*
*
*
*       Complete the handler logic below
*       
*       
*/

const UNITS = {
  mi: 'miles',
  km: 'kilometers',
  kg: 'kilograms',
  lbs: 'pounds',
  gal: 'gallons',
  l: 'liters',
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    // Check if no number is provided, if so return 1
    if (input === "") return 1;
    // Proceed with conversion
    const result = parseFloat(input);
    if (!result) {
      return false;
    }
    // Handle fractions
    else if (input.includes("/")) {
      let nums = input.split("/");
      if (nums.length > 2) return false;
      return parseFloat(nums[0] / nums[1]);
    }
    else {
      return result;
    }
  };
  
  this.getUnit = function(input) {
    const result = input.toLowerCase();
    if (UNITS.hasOwnProperty(result)) {
      return result;
    }
    else {
      return false;
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    // Maybe handle default case?
    switch (initUnit) {
      case 'mi':
        return 'km';
        break;
      case 'km':
        return 'mi';
        break;
      case 'lbs':
        return 'kg';
        break;
      case 'kg':
        return 'lbs';
        break;
      case 'gal':
        return 'l';
        break;
      case 'l':
        return 'gal';
        break;
    }
  };

  this.spellOutUnit = function(unit) {
    // Get full name of unit
    const result = UNITS[unit];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    //console.log("Ma nam jef: " + typeof initNum);
    switch (initUnit) {
      case 'gal':
        return initNum * galToL
      case 'lbs':
        return initNum * lbsToKg
      case 'mi':
        return initNum * miToKm
      case 'l':
        return initNum / galToL
      case 'kg':
        return initNum / lbsToKg
      case 'km':
        return initNum / miToKm
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${UNITS[initUnit]} converts to ${returnNum} ${UNITS[returnUnit]}`;
  };
  
}

module.exports = ConvertHandler;

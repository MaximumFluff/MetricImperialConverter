/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      // find index of first character and split string
      const index = req.query.input.search(/[a-zA-Z]/);
      const numString = req.query.input.substring(0, index);
      const unitString = req.query.input.substring(index);
      // Run conversions
      let initNum = convertHandler.getNum(numString);
      const initUnit = convertHandler.getUnit(unitString);
      // Error handling
      if (!initUnit && !initNum) {
        res.json({ error: 'Invalid number and unit' });
      }
      else if (!initNum) {
        res.json({ error: 'Invalid number' });
      }
      else if (!initUnit) {
        res.json({ error: 'Invalid unit' });
      }
      else {
        const returnNum = convertHandler.convert(initNum, initUnit).toFixed(5);
        const returnUnit = convertHandler.getReturnUnit(initUnit);
        const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        res.json({
          initNum,
          initUnit,
          returnNum,
          returnUnit,
          string,
        })
      }  
    });
    
};

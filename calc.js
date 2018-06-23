const prompt = require('prompt');
const asTable = require ('as-table');
const ansi = require ('ansicolor')
prompt.start();
let amount = 1;
let totalPaid= 0;
let tip = 0;
let results = [];
prompt.get(['fuelPrice','minTip','maxTip','maxAmoutToBePaid'], function (err, result) {

  while(totalPaid < result.maxAmoutToBePaid) {
    let tempData = {};
    totalPaid  = amount * result.fuelPrice;
    tip = 5 - totalPaid %5;

    if (amount >=10 && tip  <= result.maxTip && tip  >= result.minTip ){
      tempData = {amount:amount,totalPaid:totalPaid,tip:tip};
      if (tempData.tip < ((result.minTip+result.maxTip)/2.5 && tempData.tip < ((result.minTip+result.maxTip)/1.5 ))) {
        tempData.amount =ansi.bgMagenta.green.bright(amount);
        tempData.totalPaid =ansi.bgMagenta.green.bright(totalPaid);
        tempData.tip =ansi.bgMagenta.green.bright(tip);
      }
      results.push(tempData);
      //console.log(`${amount} litre for ${totalPaid} LE and tip is ${tip} <<<<<<<<<<<<<<< GOOD MATCH \n`);
    }else {
      //console.log(`${amount} litre for ${totalPaid } LE and tip is ${tip}\n`);
    }
    amount++;
  }
  console.log(asTable(results));
});


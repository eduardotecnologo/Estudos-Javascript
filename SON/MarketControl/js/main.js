let list = [
  { "desc": "rice", "amount": "1", "value": "5.40" },
  { "desc": "beer", "amount": "12", "value": "2.90" },
  { "desc": "meat", "amount": "3", "value": "15.90" },
];

function getTotal(list) {
  var total = 0;
  for (var key in list) {
    total += list[key].value * list[key].amount;
  }
  return total;
}
console.log(getTotal(list));
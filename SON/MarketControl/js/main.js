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
function setList(list) {
  let table = '<thead class="thead-light"><tr><td>Descrição</td><td>Quantidade</td><td>Valor</td><td>Ação</td></tr></thead><tbody>'
  for (let key in list) {
    table += ' <tr><td>' + list[key].desc + '</td><td>' + list[key].amount + '</td><td>' + list[key].value + '</td><td>Editar | Apagar</td></tr>'
  }
  table += '</tbody>';
  document.getElementById("listTable").innerHTML = table;
}

setList(list);
console.log(getTotal(list));
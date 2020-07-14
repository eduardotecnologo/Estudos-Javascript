var list = [
    { "desc": "rice", "amount": "1", "value": "5.40" },
    { "desc": "beer", "amount": "12", "value": "2.40" },
    { "desc": "neat", "amount": "1", "value": "16.40" }
];

function getTotal(list) {
    var total = 0;
    for (var key in list) {
        total += list[key].value * list[key].amount;
    }
    return total;
}

function setList(list) {
    var table = '<thead><tr><td><h4><span class="badge badge-secondary">Descrição</span></h4></td><td><h4>' +
        '<span class="badge badge-secondary">Quantidade</span></h4></td><td><h4>' +
        '<span class="badge badge-secondary">Valor</span></h4></td><td><h4>' +
        '<span class="badge badge-secondary">***** Ação *****</span></h4></td></tr></thead><tbody>';

    for (var key in list) {
        table += '<tr><td>' +
            formatDesc(list[key].desc) + '</td><td>' +
            formatAmount(list[key].amount) + '</td><td>' +
            formatValue(list[key].value) + '</td><td>' +
            '<button onclick="setUpdate(' + key + ');"class="btn btn-warning">Editar</button> ' +
            '<button onclick="deleteData(' + key + ');" class="btn btn-danger">Apagar</button></td></tr>';
    }

    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}

function formatAmount(amount) {
    return parseInt(amount);
}

function formatDesc(desc) {
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function formatValue(value) {
    var str = parseFloat(value).toFixed(2) + "";
    str = str.replace(".", ",");
    str = "R$ " + str;
    return str;
}

function addDate() {
    if (!validation()) {
        return;
    }

    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list.unshift({
        "desc": desc,
        "amount": amount,
        "value": value
    });
    setList(list);
}

function setUpdate(id) {
    var obj = list[id];

    document.getElementById("desc").value = obj.desc;
    document.getElementById("amount").value = obj.amount;
    document.getElementById("value").value = obj.value;

    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";

    document.getElementById("inputIdUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="' + id + '">';
}

function resetForm() {
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";

    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";

    document.getElementById("inputIdUpdate").innerHTML = "";

    document.getElementById("errors").style.display = "none";

}

function updateData() {
    if (!validation()) {
        return;
    }

    var id = document.getElementById("idUpdate").value;

    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list[id] = {
        "desc": desc,
        "amount": amount,
        "value": value
    }
    resetForm();
    setList(list);
}

function deleteData(id) {
    if (confirm("Deseja realmente deletar este ítem?")) {
        if (id === list.length - 1) {
            list.pop();
        } else if (id === 0) {
            list.shift();
        } else {
            var arrAuxIni = list.slice(0, id);
            var arraAuxEnd = list.slice(id + 1);
            list = arrAuxIni.concat(arraAuxEnd);
        }
        setList(list);
    }
}

function validation() {
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;
    var errors = "";

    document.getElementById("errors").style.display = "none";
    if (desc === "") {
        errors += '<p>Você precisa digitar uma descrição!</p>'
    }
    if (amount === "") {
        errors += '<p>Você precisa digitar um valor!</p>'
    } else if (amount != parseInt(amount)) {
        errors += '<p>Este valor está inválido!</p>'
    }
    if (value === "") {
        errors += '<p>Você precisa digitar um valor!</p>'
    } else if (value != parseFloat(value)) {
        errors += '<p>Este valor está inválido!</p>'
    }
    if (errors != "") {
        document.getElementById("errors").style.display = "block";
        document.getElementById("errors").innerHTML = "<h3>Ops!</h3>" + errors;
        return 0;
    } else {
        return 1;
    }
}

setList(list);

console.log(getTotal(list));
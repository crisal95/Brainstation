var todoInput = document.getElementById("todo");
var table = document.getElementById('table');


function addNewTodo() {
    var id = getListSize();
    var item = {
        id: id,
        checked: false,
        itemText: todoInput.value
    }
    return item;
}

function newTodo() {
    var todoItem = addNewTodo();
    saveNewItem(todoItem);
    addItemTable(todoItem);
    setChecks();
    document.getElementById("todo").value = "";
}

function addItemTable(item) {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var checkbox = "";
    //verifies if its already checked to check or uncheck item
    if (item.checked) {
        checkbox = '<td><input id="check-' + item.id + '" class="checkBox" type="checkbox" checked></td>';
    } else {
        checkbox = '<td><input id="check-' + item.id + '" class="checkBox" type="checkbox"></td>';
    }

    cell1.innerHTML = checkbox;
    cell2.innerHTML = item.itemText;
}

function getTodoList() {
    var itemsList = getData();
    itemsList.forEach(element => {
        addItemTable(element);
    });
}


getTodoList();

function setChecks() {
    var checkBoxes = document.getElementsByClassName("checkBox");
    for (var i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].onclick = function () {
            var checkboxId = this.id;
            //get checkbox id
            var position = checkboxId.substring(checkboxId.indexOf("-") + 1, checkboxId.length);
            modifyItem(parseInt(position));
        }
    }
}

setChecks();

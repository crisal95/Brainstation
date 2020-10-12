const listKey = "todoKey";

function saveNewItem(item) {
    var itemsList = getData();
    itemsList.push(item);
    newList(itemsList);
}

function modifyItem(id) {
    var itemsList = getData();
    itemsList[id].checked = !itemsList[id].checked;
    newList(itemsList);
}

function newList(list) {
    var newList = JSON.stringify(list);
    localStorage.setItem(listKey, newList);
}

const getData = () => {
    var arr = localStorage.getItem(listKey);

    var result = [];

    if (arr) {
        result = JSON.parse(arr);
    }
    return result;
};

function getListSize() {
    return getData().length;
}
const list = () => {
    return {
        type: 'LIST'
    }
}

const deleteItem = (index) => {
    return {
        type: 'DELETEITEM',
        index: index,
    }
}

export default {
    list,
    deleteItem,
}
const fs = require('fs')

const addOrder = (myName, myCoffee) => {
    const allOrders = loadOrder();
    allOrders.push({Name: myName, Coffee: myCoffee})
    saveOrder(allOrders)
}
//reads the JSON file and converts the code to a sytring
const loadOrder = () => {
    try {
        const dataBuffer = fs.readFileSync('order.json')
        const orderJSON = dataBuffer.toString();
        return JSON.parse(orderJSON)
    } catch (e) { return[] }
}
//takes orders and converts to code and writes to JSON file
const saveOrder = (order) => {
    const orderJSON = JSON.stringify(order)
    fs.writeFileSync('order.json', orderJSON)
}

const listOrders = () => {
    const allOrders = loadOrder()
    allOrders.map((order) => {
        console.log(order.Name, order.Coffee)
    })
}
const removeOrder= (deletedOrder) => {
    const allOrders = loadOrder()
    const ordersToKeep=allOrders.filter((order) => {
        return order.Name !== deletedOrder
    })
    saveOrder(ordersToKeep)
}
const clearOrders = () => {
    let allOrders = loadOrder()
    let emptyOrders = allOrders.splice()
    saveOrder(emptyOrders)
}




module.exports = {
    addOrder,
    loadOrder,
    listOrders,
    removeOrder,
    clearOrders
  }
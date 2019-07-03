//command line format
//node app.js add --name="al" --coffee="milky"
//node app.js remove --name="Jan"
//node app.js list
//node app.js clear

const fs = require('fs');
const yargs = require('yargs');
const {addOrder, listOrders, removeOrder, clearOrders} = require('./order.js');
const command = process.argv[2]

switch (command) {
    case "add":     addOrder(yargs.argv.name, yargs.argv.coffee);       break;
    case "remove":  removeOrder(yargs.argv.name);    break;
    case "list":    listOrders();     break;
    case "clear":   clearOrders();     break;
    default:        console.log(`'${command}' not recognised`);
}

const {load} = require('csv-load-sync')
const csv = load('coin_Bitcoin.csv')
const csvd = load('coin_Dogecoin.csv')
const csve = load('coin_Ethereum.csv')


console.log(csv[0])
console.log(csvd[0])
console.log(csve[0])
const {load} = require('csv-load-sync')
const csv = load('coin_Bitcoin.csv')


console.log(csv)
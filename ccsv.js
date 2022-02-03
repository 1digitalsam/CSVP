const {load} = require('csv-load-sync')
const csv = load('coin_Bitcoin.csv', {
  convert: {
    deviceId: parseInt,
    description: (s) => s.toUpperCase(),
  },
})
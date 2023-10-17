'use strict'

const os = require('os')

function getLocalIP() {
  const interfaces = os.networkInterfaces()
  console.log(interfaces, 'interfaces')
  let ipv4 = ''
  Object.values(interfaces).forEach(netInterface => {
    netInterface.forEach(interfaceDetail => {
      if (interfaceDetail.family === 'IPv4' && interfaceDetail.internal === false) {
        ipv4 = interfaceDetail.address
      }
    })
  })
  return ipv4
}

module.exports = { getLocalIP: getLocalIP }

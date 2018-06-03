var tape = require('tape')
var benOSAddress = require('./')

tape('benOS IPV4 Test #1:', function (t) {
  t.ok(/^\d+\.\d+\.\d+\.\d+$/.test(benOSAddress()), 'benOS: IPV4 Address Test Passed')
  t.end()
})

tape('benOS IPV4 Test #2:', function (t) {
  t.ok(/^\d+\.\d+\.\d+\.\d+$/.test(benOSAddress.ipv4()), 'benOS: IPV4 Address Test Passed')
  t.end()
})

tape('benOS IPV4 Test #3:', function (t) {
  t.ok(/^\d+\.\d+\.\d+\.\d+$/.test(benOSAddress.ipv4('lo')), 'benOS: IPV4 Address Test Passed')
  t.end()
})

tape('benOS IPV6 Single Test', function (t) {
  t.ok(/([0-f]*:)?([0-f]*:)?([0-f]*:)?([0-f]*:)?$/.test(benOSAddress.ipv6()), 'benOS: IPV6 Address Test Passed')
  t.end()
})

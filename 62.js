if(false == "") console.log('1',true)
if (false == {}) console.log('2',true) //false
if ("" == 0) console.log('3',true)
if ("" == []) console.log('4',true)
if ("" == {}) console.log('5',true) //false
if (0 == []) console.log('6',true)
if (0 == {}) console.log('7', true) //false
if (0 == null) console.log('8', true) //false
if (false == []) console.log('9',true)
if ({} == {}) console.log('10', true) //false
if ({} === {}) console.log('11', true) //false



a = false
console.log(typeof(a))
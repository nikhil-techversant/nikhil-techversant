const { json } = require("express");

var e = {
    name : "nikhil",
    addr : "melevalappil",
    num : 9854575
}

console.log("typ of EE", typeof(e))

var jsoneE = JSON.stringify(e)
console.log("done", jsoneE);
console.log(typeof(jsoneE))

var ss = JSON.parse(jsoneE)
console.log("parsed data",ss);
console.log(typeof(ss))
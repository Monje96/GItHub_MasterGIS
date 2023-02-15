var r = [12, 15, 1 ,3 ,40,35,5]
var s = r[0]
for (let i = 0; i< r.length;i++){
    var current = r[i]
    if (current>s){
        s = current
    }
    console.log(s)
}

function foo(n) {
    console.time()
    let arr = [];
    for (let i = 2; arr.length < n; i++) {
        let flag = true
        // if ((i === 0) || (i === 1)){
        //     continue
        // }
        for (let j = 0; j <= i; j++) {
            if ((j === 0) || (j === 1) || (j === i)) {
                continue
            }
            if (i % j === 0) {
                flag = false
            }
        }
        if (flag === true) {
            arr.push(i)
        }
    }
    console.timeEnd()
    return arr
}
console.log(foo(process.argv[2]))

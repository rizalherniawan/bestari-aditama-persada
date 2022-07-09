// soal 1
function kelipatan7(n){
    console.log("===jawaban soal 1===\n")
    for(let i = 1; i <= n; i++){
        if(i % 7 == 0 && i == n){
            console.log("sukses\n")
        } else if(i % 7 == 0){
            console.log("bestada")
        } else if(i == n){
            console.log("sukses\n")
        } else {
            console.log(i)
        }
    }
}

// soal 2
function checkAndMerge(arr){
    console.log("===jawaban soal 2===\n")
    let obj = {}
    let duplicateVal = []
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]] += 1
        } else {
            obj[arr[i]] = 1
        }
    }
    for(let key in obj){
        if(obj[key] > 1){
            duplicateVal.push(parseInt(key))
        }
    }
    arr.sort((a,b) => a - b)
    console.log("Nilai yang duplikat di array = ", duplicateVal)
    console.log(arr)
}



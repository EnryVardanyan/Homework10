function remDublicate(arr){
    const setArr = new Set(arr)
    return setArr
}
const arr = [1,2,2,3,4,3]
console.log(remDublicate(arr))

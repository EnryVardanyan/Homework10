function memFactorial(){
    const mapped = new Map()
    function factorial(n){
        if(n === 1 || n === 0){
            return 1
        }
        if(mapped.has(n)) return mapped.get(n)
        const res = n * factorial(n - 1)
        mapped.set(n, res)
        return res
    }
    return factorial
}
const memorizedFactorial = memFactorial()
console.log(memorizedFactorial(5))
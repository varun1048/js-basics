console.clear()
let log=inner=>console.log(inner)
let obj = new Array(1,2,3,4,5,6,7,8)
let map = Array.prototype.map
let a = map.call('va', function(x) { 
    return x.charCodeAt(0)
})
let out = obj.map( (x,y,z,a)=>{
    if(x <= 2){
        return x
    }
})
out = obj.filter(x=>  x<4 )

function isBigEnough(value,x) {
    return value >= 4
  }  
  out = obj.filter(isBigEnough)
// log(out)

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 

function isPrime(num) {
log(num)
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

let str='AB'
// log(str.toLowerCase(0))
let words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']

const modifiedWords = words.filter( (word, index, arr) => {
  arr[index+1] +=' extra'
  return word.length < 6
})
// console.log(modifiedWords)

words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
const appendedWords = words.filter( (word, index, arr) => {
  arr.push('new')
  return true
})

// console.log(appendedWords)


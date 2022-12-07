console.log(Math.PI)
console.log(Math.max(1,2,3,4,4,5,5,6,7,8,9,10,11,12,13,14,15))

class MyMath{
  static PI = 3.14

  static max(...numbers: number[]){
    console.log(...numbers)
    return numbers.reduce((max, item) => max >= item ? max : item, 0)
  }

}

console.log(Math.PI)
console.log(MyMath.PI)
console.log(MyMath.max(-123,-2,-332432,-4,-5,))

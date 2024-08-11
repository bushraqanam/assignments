//assignments 1 to 10 //how do you declare a variable in typescript? 
//Q 1) 
let myPet = "bunbun"
console.log(myPet)
//Q2) what does "strong typing "mean in typescript?
let myName:string = "bushra qanam"
console.log(myName)
let myAge:number = 35
console.log(myAge)
let myFav:string = "food, pizza"
//Q3) what is a template literal in typescrpt and how do you use it?
let abc:string = `i like ${myName}, ${myAge}, and ${myFav} this is a simple my name projet`
console.log(abc)
//Q4) what will be the result of the following expression: 5+ 10 * 2?
let sum:number = 5 + 10 * 2
console.log(sum)
//Q5) how can you include an arthimatic expression inside a templeat literal?
let num2:number = 25
let num3:number = 37
let num4:number = num2 + num3 
console.log(num4)
let abcd:string = `this is a templet literal useing artimatic ${num2} + ${num3} and ${num3}- ${num2} then * ${num4} `
console.log(abcd)
//Q6) write a typescript program that declares variable fristname and lastname use a template literal to creat a fullname and print it as my name is [fullname]//
let firstName:string = "Bushra"
let lastName:string = "Qanam"
let fullName:string = `my name is ${firstName}, ${lastName}`
console.log(fullName)
//Q7) write a typescript program to compare two numbers, a and b. print"a is greater" ,"b is greater', or "a and b is equal'based on the comparison?
let a:number = 30
let b:number = 45
console.log(a > b)
console.log(a === b)
//Q8) write a typescript program that initializes a variable total to 50. then add 20 to total using the += operator and print the result?
let num6:number = 30
let num7:number = 20
let num8:number = (num6 + num7)
console.log(num8)
num8+=20
console.log(num8)
//Q9) write a typescript program that takes 2 numbers as input use a template literal to print a sentence that includes the sum of these two numbers?
let num9:number = 65
let num10:number = 40
let sum1:string = `i want to add the sum of ${num9},and ${num10}= to total 105`
console.log(sum1)
//Q10) write a typescript program that claculates the average of three numbers.use both arithmetic and assignment operators, then print the result?
let num12 = 35
let num13 = 20
let num14 = 15
console.log(num12 + num13 - num14 * num12)
let num15 = 8
num15 += 5
num15 -= 2
num15 *= 4
num15 /= 6
num15 %= 5
console.log(num15)







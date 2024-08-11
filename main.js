//assignments 1 to 10 //how do you declare a variable in typescript? 
//Q 1) 
var myPet = "bunbun";
console.log(myPet);
//Q2) what does "strong typing "mean in typescript?
var myName = "bushra qanam";
console.log(myName);
var myAge = 35;
console.log(myAge);
var myFav = "food, pizza";
//Q3) what is a template literal in typescrpt and how do you use it?
var abc = "i like ".concat(myName, ", ").concat(myAge, ", and ").concat(myFav, " this is a simple my name projet");
console.log(abc);
//Q4) what will be the result of the following expression: 5+ 10 * 2?
var sum = 5 + 10 * 2;
console.log(sum);
//Q5) how can you include an arthimatic expression inside a templeat literal?
var num2 = 25;
var num3 = 37;
var num4 = num2 + num3;
console.log(num4);
var abcd = "this is a templet literal useing artimatic ".concat(num2, " + ").concat(num3, " and ").concat(num3, "- ").concat(num2, " then * ").concat(num4, " ");
console.log(abcd);
//Q6) write a typescript program that declares variable fristname and lastname use a template literal to creat a fullname and print it as my name is [fullname]//
var firstName = "Bushra";
var lastName = "Qanam";
var fullName = "my name is ".concat(firstName, ", ").concat(lastName);
console.log(fullName);
//Q7) write a typescript program to compare two numbers, a and b. print"a is greater" ,"b is greater', or "a and b is equal'based on the comparison?
var a = 30;
var b = 45;
console.log(a > b);
console.log(a === b);
//Q8) write a typescript program that initializes a variable total to 50. then add 20 to total using the += operator and print the result?
var num6 = 30;
var num7 = 20;
var num8 = (num6 + num7);
console.log(num8);
num8 += 20;
console.log(num8);
//Q9) write a typescript program that takes 2 numbers as input use a template literal to print a sentence that includes the sum of these two numbers?
var num9 = 65;
var num10 = 40;
var sum1 = "i want to add the sum of ".concat(num9, ",and ").concat(num10, "= to total 105");
console.log(sum1);
//Q10) write a typescript program that claculates the average of three numbers.use both arithmetic and assignment operators, then print the result?
var num12 = 35;
var num13 = 20;
var num14 = 15;
console.log(num12 + num13 - num14 * num12);
var num15 = 8;
num15 += 5;
num15 -= 2;
num15 *= 4;
num15 /= 6;
num15 %= 5;
console.log(num15);

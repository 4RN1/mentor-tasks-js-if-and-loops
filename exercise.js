// დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.

// let userPickedNum = Number(prompt('შეიყვანეთ რიცხვი'))
// if (userPickedNum <= 0) {
//   console.log('Invalid')
// } 
// if (userPickedNum % 2 === 0) {
//   console.log('თქვენს მიერ შეყვანილი რიცხვი ლუწია')
//  } else { console.log('თქვენს მიერ შეყვანილი რიცხვი კენტია') }




// დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი დადებითია, უარყოფითი თუ ნული.

// let userPickedNum = Number(prompt('შეიყვანეთ რიცხვი'))

// if (userPickedNum === 0) {
//   console.log('არჩეული რიცხვია 0')
// } else if (userPickedNum > 0) {
//   console.log('არჩეული რიცხვი დადებითია')
// } else   { console.log('არჩეული რიცხვი უარყოფითია') }







// დაწერეთ პროგრამა, რათა შეამოწმოთ იყოფა თუ არა რიცხვი სხვა რიცხვზე.

// let x = Number(prompt('შეიყვანეთ პირველი რიცხვი'));
// let y = Number(prompt('შეიყვანეთ მეორე რიცხვი'));

// if (x % y === 0 ) {
//   console.log('რიცხვები იყოფა ერთმანეთზე უნაშთოდ')
  
// } else {console.log('რიცხვები არ იყოფა') }




// დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.

// let word = prompt('test') 

// if (word === '') {
//   console.log('ცარიელია')
// } else {
//   console.log('good job')
// }




// დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა სტრიქონი კონკრეტულ სიტყვას.

// let word = 'მე მიყვარს გლდანი :D'

// if (word.includes(':D')) {
//   console.log("შეიცავს კონკრეტულ სიტყვას")
// } else {
//   console.log("არ შეიცავს")
// }



// დაწერეთ პროგრამა, რომ იპოვოთ მინიმალური ორი რიცხვიდან.

// let x = Number(prompt('შეიყვანეთ პირველი რიცხვი'));
// let y = Number(prompt('შეიყვანეთ მეორე რიცხვი'));
// if(x === y) {
// console.log('ტოლია')}
// else if (x > y) {
//   console.log(`${y} არის მინიმალური`)
// } else  {
// console.log(`${x} არის მინიმალური`)
// }


// დაწერეთ პროგრამა, რომ იპოვოთ მაქსიმალური ორი რიცხვიდან.

// let x = Number(prompt('შეიყვანეთ პირველი რიცხვი'));
// let y = Number(prompt('შეიყვანეთ მეორე რიცხვი'));
//  if(x === y) {
//   console.log('ტოლია')
//  }else if (x > y) {
//   console.log(`${x} არის მაქსიმალური`)
// } else  console.log(`${y} არის მაქსიმალური`)


// დაწერეთ პროგრამა, რომელიც მომხმარებელს შეეკითხება თავის ასაკს და დაადგენს არის თუ არა 18 წლის ან უფრო მეტის. თუ არის, გამოპრინტეთ "Adult", თუარადა - "Minor".

// let age = Number(prompt('შეიყვანეთ თქვენი ასაკი'));

// if (age > 18) {
//   console.log('adult')
// }else {
//   console.log('Minor')
// }


// დაწერეთ პროგრამა, რომელიც შეეკითხება მომხმარებელს ქულას და გამოიტანს შესაბამის შეფასებას. 91-100 -> A; 81-90 -> B, 71 -> 80: C, 61-70 -> D, 51-60 -> E, 0-50 -> ჩაიჭრა. გამოიყენეთ ორივე - if/else if/else და switch.


// let score = Number(prompt('შეიყვანეთ ქულა'));



// if (score >= 91 && score <= 100) {
//   console.log("Grade: A");
// } else if (score >= 81 && score <= 90) {
//   console.log("Grade: B");
// } else if (score >= 71 && score <= 80) {
//   console.log("Grade: C");
// } else if (score >= 61 && score <= 70) {
//   console.log("Grade: D");
// } else if (score >= 51 && score <= 60) {
//   console.log("Grade: E");
// } else if (score >= 0 && score <= 50) {
//   console.log("ჩაიჭრა");
// } else {
//   console.log("Invalid score");
// }

// let score = Number(prompt('შეიყვანეთ ქულა'));
// switch (true) {
//   case (score >= 91 && score <= 100):
//     console.log("Grade: A");
//     break;
//   case (score >= 81 && score <= 90):
//     console.log("Grade: B");
//     break;
//   case (score >= 71 && score <= 80):
//     console.log("Grade: C");
//     break;
//   case (score >= 61 && score <= 70):
//     console.log("Grade: D");
//     break;
//   case (score >= 51 && score <= 60):
//     console.log("Grade: E");
//     break;
//   case (score >= 0 && score <= 50):
//     console.log("ჩაიჭრა");
//     break;
//   default:
//     console.log("Invalid score");
// }

// დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F) ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით. მაგალითად, თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!"


// let score = prompt('შეიყვანეთ შეფასება A, B, C, D ან F').toUpperCase();


// switch (score) {
//   case ('A'):console.log("შესანიშნავია")
//   break;
//   case ('B'):console.log("კარგია")
//   break;
//   case ('C'):console.log("ნორმალურია")
//   break;
//   case ('D'):console.log("მეტი შეგიძლია")
//   break;
//   case ('F'):console.log("ცუდია")
//   break;
//   default :console.log('შეიყვანე სწორი შეფასება')
 
// } 

// დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.

// let num = Number(prompt('შეიყვანეთ თვის რიცხვი') )

// switch(num) {
//   case (1):
//           console.log('იანვარი') 
//           console.log('დღეების რაოდენობა 31')
//           break;
//   case (2):
//           console.log('თებერვალი')
//           console.log('დღეების რაოდენობა 28')
//           break;
//   case (3):
//           console.log('მარტი ')
//           console.log('დღეების რაოდენობა 31')
//           break;
//   case (4):
//           console.log('აპრილი ')
//           console.log('დღეების რაოდენობა 30')
//           break;
//   case (5):
//           console.log('მაისი ')
//           console.log('დღეების რაოდენობა 31')
//           break;
//   case (6):
//           console.log('ივნისი')
//           console.log('დღეების რაოდენობა 30')
//           break;
//   case (7):
//           console.log('ივლისი ')
//           console.log('დღეების რაოდენობა 31')
//           break;
//   case (8):
//           console.log('აგვისტო ')
//           console.log('დღეების რაოდენობა 31')
//           break;
//   case (9):
//           console.log('სექტემბერი ')
//           console.log('დღეების რაოდენობა 30')
//           break;
//   case (10):
//             console.log('ოქტომბერი ')
//             console.log('დღეების რაოდენობა 31')
//             break;

//   case (11):
//             console.log('ნოემბერი')
//             console.log('დღეების რაოდენობა 30')
//             break;
//   case (12):
//             console.log('დეკემბერი ')
//             console.log('დღეების რაოდენობა 31')
//             break;

//   default : console.log('არავალიდური რიცხვი')
// }

// დაწერეთ პროგრამა რომელიც კონსოლში გამოპრინტავს რიცხვებს 0 დან 10-ის ჩათვლით. გამოიყენეთ while და for ციკლები.


// for (let i = 0; i <= 10; i++) {
//   console.log(i)
// }

//While loop

// let i=0
// while ( i < 10) {
//   i++
//   console.log(i);
  
// }


// დაწერეთ პროგრამა, რომელიც ბეჭდავს ლუწ რიცხვებს 1-დან 20-მდე for loop-ის გამოყენებით.

// for (let i = 1; i < 20 ; i++) {
//   if (i % 2 === 0) {
//     console.log(i)
//   } 
// }


// დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი და დაბეჭდოს "Hello!" იმდენჯერ რამდენსაც უდრის ეს შეყვანილი რიცხვი.

// let n = Number(prompt("შეიყვანეთ რიცხვი"))
// let str = "Hello!"
// console.log(str.repeat(n))


// დაწერეთ პროგრამა, რომელიც გამოთვლის რიცხვების ჯამს 1-დან 100-მდე for loop-ის გამოყენებით და დაბეჭდავს შედეგს.

// let sum = 0;

// for (let i = 1; i < 100; i++) {
//   sum += i
// }
// console.log(sum)


// დაწერეთ პროგრამა, რომელიც გამოთვლის კენტი რიცხვების ჯამს 1-დან 100-მდე და დაბეჭდავს შედეგს.
// let sum = 0;

// for (let i = 1; i < 100; i++) {
//   if (i % 2 !== 0 ) {
//     sum += i;
//   }
// }
// console.log(sum)


// დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს საიდუმლო რიცხვი 1-დან 10-მდე. განაგრძეთ გამოცნობის მოთხოვნა, სანამ ისინი სწორად გამოიცნობენ, while loop-ის და do while-ის გამოყენებით.

// let num = Number(prompt('შეიყვანეთ რიცხვი'))
// let guessedNum = Math.floor(Math.random() * 10 ) + 1;
// while (num !== guessedNum) {
//  num = Number(prompt('სცადეთ კიდევ:'))

// } 
// console.log( `გილოცავთ სწორია რიცხვია:  ${guessedNum}`)


// let num = Number(prompt('შეიყვანეთ რიცხვი'))
// let guessedNum = Math.floor(Math.random() * 10 ) + 1;

// do   {
//   num = Number(prompt('სცადეთ კიდევ:'))
// } while (num !== guessedNum);

// console.log( `გილოცავთ სწორია რიცხვია:  ${guessedNum}`)




// გამოიყენეთ do...while ციკლი 10-დან 1-მდე დასათვლელად. 
// let i = 11
// do {
//   i--
//   console.log(i)
// } while (i > 0) 
  

// გამოიყენეთ for loop 1-დან 30-მდე 3-ის ჯერადების დასაბეჭდად.

// for (let i = 1; i < 30; i++) {
//   if (i % 3 === 0) {
//     console.log(i)
//   }
// }


// გამოიყენეთ for loop 4-ის გამრავლების ცხრილის დასაბეჭდად (4 × 1-დან 4 × 10-მდე).

// for (let i = 0; i <= 10 ; i++) {
//   console.log('4 x' + ' ' + i)
// }

// გამოიყენეთ while ლუპი, რათა დათვალოთ სიმბოლოების რაოდენობა სტრიქონში "AlgoUni" და დაბეჭდოთ შედეგი.
// let i=0;
// count = 0;
// let str = "AlgoUni";
// while (i < str.length) {
//   i++
//   count++
// }

// console.log(count)


// გამოიყენეთ do...while ციკლი „დიახ“-ის დასაბეჭდად, თუ რიცხვი 5-ზე ნაკლებია და „არა“, თუ ის აღწევს ან აღემატება 5-ს. რიცხვების შუალედად აიღეთ -10 და 10.
// let i = Number(prompt('ნაკლებია თუ არა შეყვანილი რიცხვი 5-ზე'))
// do {
//   if (i < 5){
//     console.log('დიახ')
//     break;
//   }
//   else {
//     console.log("არა");
//     break;
//   }
  
// } while (i < 5)
  
// გამოიყენეთ for loop 20-დან 10-მდე რიცხვების დასაბეჭდად.

// for (let i = 20 ; i >= 10; i--)  {
//   console.log(i)
// }
 

// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######


// let output = ""
// for (let i = 0; i<7; i++) {
//   output += "#"
//   console.log(output)
// }
 
  
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// for (let i = 1; i <=100; i++) {
//   if (i % 3 === 0) {
//     console.log('Fizz')
//   } else if (i % 5 === 0) {
//     console.log('Buzz')
//   } else console.log(i)
// }


// 26 gamiwirda smn 
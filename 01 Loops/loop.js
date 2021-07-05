/*Print out all the leap years in the last 100 years.


console.log("Akash");

/*var today = new Date;
var currentYear = today.getFullYear();
for (var i = currentYear-100; i<currentYear; i++) {
    if(i%4===0){
console.log(i);
}
}*/

//For numbers between 1 and 200:
//a) print out multiples of 7.


/*for (var i = 1;i<200;i++) {
    if(i%7===0){
        console.log(i);     
    }
}*/

//For numbers between 1 and 200:
//b) print out every second odd number.*/

/*for (let i = 1; i<200; i+=4) {
    if(i%2!==0){
       console.log(i); 
    }
    
}*/

//For numbers between 1 and 200:
// c) print out all prime numbers.

for (var i = 10; i <= 200; i++) {
	if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0 && i % 11 != 0) {
		console.log(i);
	}
}

//Why did we start with 10? why did we only divide by 3,5,7 & 11 in the if statement?








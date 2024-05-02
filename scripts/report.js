//for loop
for (let i= 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}


//while loop
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
    i++;
  }

  // forEach loop
  studentReport.forEach(function (item) {
    if (item < LIMIT) {
      console.log(item);
    }
  });

  // for...in loop
  for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }

const n = 6; 

const output = document.getElementsByTagName("ul");

const options = { weekday: 'long'}; 

// BEGIN
const today = new Date();

let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
document.getElementById('today').innerHTML = `Today is ${todaystring}. `;


for (let i = 1; i <= n; i++ ) {
	let nextday = new Date();
	nextday.setDate(today.getDate() + i);
	let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
	item = document.createElement("li"); 
	item.textContent = nextdaystring;
	output[0].appendChild(item);
}

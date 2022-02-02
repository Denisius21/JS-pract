/*function numberReduction(){
for(let number = 25; 0 <= number; number-- )
console.log(number);
}*/
/*function number(){
for (let counter = 10; counter <= 50; counter += 5){

  console.log(counter);
};
}*/

/*for(let num = 0, sum = 0; num <= 100; num++ ){
  
console.log(sum+=num);
}*/

/*const student = {
  studentName : 'Stepan',
  studentLastName : 'Fedorov',
  age : 24,
  weight: 70,
  education : 'school',
  hobby : 'football',
  colorYeas : 'grey',
}
function greet(person){
  return 'Hello '+ student.studentName +' '+student.studentLastName;
}*/

function Car (manufacturer, model, color, releaseYear, fuelConsumpition,volume){
  this.rides = function(){
    return 'rides';
  };
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.releaseYear = releaseYear;
  this.fuelConsumpition = fuelConsumpition;
  this.volume = volume;
}
const vaz = new Car('autoVaz', 'vaz2112', 'green', 2006, 9, 50);

let namb1 = 8;
let numb2 = 11;
let num3 = 22;
alert(`(${namb1} * ${numb2}) / ${num3} = ${(namb1 * numb2) / num3}`);
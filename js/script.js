// reduce practice java script


// practice one ::

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let check = theBiggest.reduce(function (acc, current) {
  console.log(`the accrante => ${acc}`);

  console.log(`the current => ${current}`);
  
  console.log(`the bigger is => `, acc.length > current.length ? acc : current);
  
  console.log("-".repeat(60));
  
  return acc.length > current.length ? acc : current;
});


// ---------------------------------------------------------------


// practice two 

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let filter = removeChars.filter(function(ele){
  return !ele.startsWith("@")
})
// make join method using  reduce

let collect = filter.reduce(function(acc,current) {
  return `${acc}${current}`
})

console.log(filter)

console.log(collect)
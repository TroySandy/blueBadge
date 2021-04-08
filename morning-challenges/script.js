// Using our database of users
// We are going to write some code to do various tasks
// In each challenge there will be a different scenario, it is your job
// to find a solution z

let users = [
  {
    name: "Jeremy Scandanavia",
    age: 32,
    hobbies: ["skiing", "art", "gardening"],
    hasChildren: false,
  },
  {
    name: "Urasue Piper",
    age: 26,
    hobbies: ["acting", "yoga", "woodshop"],
    hasChildren: false,
  },
  {
    name: "Ahmed Smith",
    age: 23,
    hobbies: ["reading", "farming", "bowling"],
    hasChildren: true,
  },
  {
    name: "Flora Alonso",
    age: 23,
    hobbies: ["cooking", "cars", "sleeping"],
    hasChildren: false,
  },
  {
    name: "Wanda Nitt",
    age: 55,
    hobbies: ["racing", "acting", "reading"],
    hasChildren: false,
  },
  {
    name: "George Chen",
    age: 22,
    hobbies: ["sewing", "witchcraft", "writing"],
    hasChildren: false,
  },
  {
    name: "Sophie Castavet",
    age: 34,
    hobbies: ["soccer", "bowling", "swimming"],
    hasChildren: true,
  },
  {
    name: "Wayne Cross",
    age: 25,
    hobbies: ["music", "eating", "bird watching"],
    hasChildren: false,
  },
  {
    name: "Sarah Titinius",
    age: 57,
    hobbies: ["archery", "tennis", "video games"],
    hasChildren: false,
  },
  {
    name: "Mabaa Aziz",
    age: 21,
    hobbies: ["skiing", "art", "farming"],
    hasChildren: false,
  },
  {
    name: "Sophie Castavet",
    age: 55,
    hobbies: ["eating", "cars", "chess"],
    hasChildren: true,
  },
  {
    name: "Matthew Garcia",
    age: 41,
    hobbies: ["baking", "art", "tennis"],
    hasChildren: false,
  },
  {
    name: "Milo Fortuna",
    age: 30,
    hobbies: ["paintball", "music", "gardening"],
    hasChildren: false,
  },
  {
    name: "Sophie Castavet",
    age: 21,
    hobbies: ["video games", "photography", "coding"],
    hasChildren: true,
  },
  {
    name: "Maxwell Roa",
    age: 40,
    hobbies: ["skiing", "art", "gardening"],
    hasChildren: true,
  },
  {
    name: "William Mendoza",
    age: 37,
    hobbies: ["chess", "hiking", "gardening"],
    hasChildren: false,
  },
  {
    name: "Jack Medina",
    age: 77,
    hobbies: ["hiking", "bird watching", "cards"],
    hasChildren: false,
  },
  {
    name: "Kian Sharma",
    age: 24,
    hobbies: ["sleeping", "eating", "cards"],
    hasChildren: false,
  },
  {
    name: "Jetta Sepperin",
    age: 27,
    hobbies: ["woodshop", "coding", "bowling"],
    hasChildren: true,
  },
  {
    name: "Jovena Radcliff",
    age: 38,
    hobbies: ["chess", "art", "bird watching"],
    hasChildren: true,
  },
  {
    name: "Jolanta Maryam",
    age: 52,
    hobbies: ["hiking", "sleeping", "cooking"],
    hasChildren: false,
  },
  {
    name: "Deborah Beasley",
    age: 25,
    hobbies: ["witchcraft", "art", "gardening"],
    hasChildren: false,
  },
  {
    name: "Ethan Delarosa",
    age: 46,
    hobbies: ["coding", "video games", "baking"],
    hasChildren: false,
  },
  {
    name: "Erica Davila",
    age: 32,
    hobbies: ["yoga", "soccer", "canoeing"],
    hasChildren: false,
  },
  {
    name: "Ernest Rivera",
    age: 33,
    hobbies: ["cards", "baking", "coding"],
    hasChildren: true,
  },
];

// console.log(users);
// console.log(...users);

// Challenge 1
// You are helping a popular dating app write some new
// code to make sure people are paired accordingly
// In this challenge you will
// - Create a new array to store new users in
// - Using the .forEach() function, map over the 'Users' array.
// - Use the .push() array method, to push all Users above the age of 24,
// who's hobbies include 'baking'

let newArr = [];
users.forEach((user) => {
  //breaks array into indivdual items
  console.log(user);
  for (hobby of user.hobbies) {
    //breaks array into individual vars.
    console.log(hobby);
    if (user.age > 24 && hobby.includes("baking")) {
      console.log(user);
      newArr.push(user);
    }
  }
});

console.log(newArr);


//Challenge 2
// You are working at a popular social networking site, and your 
// boss wants you to create a new addition to the app where parents 
// can can talk about their experiences. 
// In this challenge you will
// - Create a new array to store our users marked as parents, parentArray
// - Loop through the Users, using whichever type of loop you'd like
// - Create a new object inside the loop, to hold key value pairs, parentName, 
// parentAge, and hobbies and set the values to the values we get back from
// our loop
// - push the new object to our parentArray
    

// After you get back your new parent array...
// - Create a new array to store new users in
// - Using any method of itteration, map over the 'parentArray' array.
// - Use the .push() array method, to push all Users above the age of 30, 
// who's hobbies include 'gardening' 

let parentArray = [];

users.forEach((person) => {
if (person.hasChildren){
  let parentObject =
  {parentName: person.name,
    parentAge: person.age,
    hobbies: person.hobbies
  }
  parentArray.push(parentObject)
}
console.log(parentArray);
})

let lonelyFilter = [];
parentArray.forEach((parent) => {
  //breaks array into indivdual items
  // console.log(parent);
  for (hobby of parent.hobbies) {
    //breaks array into individual vars.
    // console.log(hobby);
    if (parent.parentAge > 30 && hobby.includes("gardening")) {
      // console.log(parent);
      lonelyFilter.push(parent);
    }
  }
});

console.log(lonelyFilter);

// Challenge 3
// step 1. Re-arrange the array to be in alphabetical order by first name. 
// (the .sort() method will help!)
// step 2. Use the .filter() array method to filter out any duplicates.
// step 3: console.log() the new array.


users.sort(function(a, b){ //sorts names 
  if(a.name < b.name) { return -1; }
  if(a.name > b.name) { return 1; }
  return 0;
})
console.log(users);

let distinctUserName = [...new Set(users.map(a => a.name))]; //removes duplicate names
console.log(distinctUserName);
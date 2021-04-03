//Homework Part One

//Using what you did with Objects perdiod 2 from the slides, create a personal profile. Instead of Products you will need to create a personal profile. Initialize Constructors and More!
//Step 1
function Person(name, age, pronouns, favoriteColor) {
  this.name = name;
  this.age = age;
  this.pronouns = pronouns;
  this.favoriteColor = favoriteColor;
};



//Step 2
let person1 = new Person("Judy", 31, ['she', 'her'], "red");



//Step 3
let person2 = new Person("Jonathon", 24, ['he', 'him'], "black");
let person3 = new Person("Randy", 15, ['she', 'her'], "orange")
let person4 = new Person("Jenn", 29, ['she', 'her'], "black")

//Step 4
function Pet(type, breed, name) {
  this.type = type;
  this.breed = breed;
  this.name = name;
};

//Step 5
function Person(name, age, pronouns, favoriteColor, pet) {
  this.name = name;
  this.age = age;
  this.pronouns = pronouns;
  this.favoriteColor = favoriteColor;
  this.pet = pet
};


//Step 6
let dog1 = new Pet("dog", "golden retriever", "Hamlet");
let person5 = new Person("Stephen", 30, ['he', 'him'], "blue", dog1);
console.log(person5.pet.name);

// Step 7
person5.hairColor = 'brown';


//.Create

//Step 1
let Teacher = {
  firstName: "Amy",
  lastName: "Johnson",
  subject: ['math', 'science'],
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`)
  }
}

//Step 2
let teacher1 = Object.create(Teacher)
teacher1.getFullName()

//Step 3
let teacher2 = Object.create(Teacher)
teacher2.firstName = "Jessica"
teacher2.lastName = "Brown"
teacher2.getFullName()


//Array vs Objects

//Objects: Create a hobby object with properties with name, descriptions and boolean of a property name of supplies needed.

//Use dot notation to return hobby description

//Use bracket notation to return name


//Arrays: Create an array with 4 different hobbies


//access second item in the array

//Objects
//Change the value of the boolean of the object we created.

//Add a new property to our person object such as supplies with multiple values in the property.

//remove the hobby description property from the person object


//Arrays
//Use push to add another hobby to your array of hobbies


//use pop to remove the last item from an hobby array


//use unshift to add more values to the beginning of the hobby array.

// us shift to remove the item from the hobby of the array

//Object
//Write a for in loop for the person object you created

//Write a for each loop for your person Object


//Arrays
//Write a for loop for your hobby array

//Write a for of loop for your hobby array

//write a for each loop for your hobby array





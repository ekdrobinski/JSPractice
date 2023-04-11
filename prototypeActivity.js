class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {   //contructor function for a class of Person
      this.firstName = firstName;
      this.lastName = lastName;
      this.favoriteColor = favoriteColor;
      this.favoriteNumber = favoriteNumber;
      this.favoriteFoods = favoriteFoods;
      this.family = []; //4. adds a property called family which is an empty array
    }
  
    fullName() { //function called fullName on the person prototype - these are concatenated together (appended/added)
      return this.firstName + " " + this.lastName; 
    }
  
    toString() { // should return Peter Oleary, Favorite Color: Green, Favorite Number: 42
      return this.firstName + " " + this.lastName + ", Favorite Color: " + this.favoriteColor + ", Favorite Number: " + this.favoriteNumber;    
    }
addToFamily(person) {
  if (person !== this && person instanceof Person) { //person instance of person checks if person is of the instance class.
    const duplicate = this.family.find(p => p.firstName === person.firstName && p.lastName === person.lastName);//the !=== makes sure there are not duplicated-line above
    if (!duplicate) {
      this.family.push(person);}}
return this.family.length;
}}
//testing below to the consol
let peter = new Person("Peter", "Oleary", "Green", 42, ['pasta', 'pizza']); //1. let peter
  console.log(peter.fullName());// Peter Oleary
  console.log(peter.toString());// Peter Oleary, Favorite Color: Green, Favorite Number: 42

  let rebecca = new Person("Rebecca", "Drobinski", "Green", 32, ["coffee", "tomatoes"]);
  console.log(rebecca.fullName());// // Rebecca Drobinski
  console.log(rebecca.toString());/// Rebecca Drobinski Favorite Color Green, Favorite Number 32, Favorite Food Coffee and Tomatoes

  console.log(peter.addToFamily(peter));// 1 (cannot add oneself to family)

console.log(peter.addToFamily(rebecca));// 1
console.log(peter.addToFamily(rebecca));// 1 (no duplicates allowed, should still only log 1)

console.log(peter.family); // [Person {firstName: "John", lastName: "Doe", ...}]


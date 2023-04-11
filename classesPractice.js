//sets up class of job, properties are name, industry, requiresDegree, field, location
class Job {
    constructor (name, industry, requiresDegree, field, location) {
     this.name = name;
     this.industry = industry;
     this.requiresDegree = requiresDegree;
     this.field = field;
     this.location = location;}
    
    getName = function() {
        return this.name;}
  
    getFieldAndIndustry = function() {
        return this.field + " / " + this.industry;}

    getLocation = function() {
        return "Is located in " + this.location ;}
}

//Job extension - creates an instance of the extended class
class JobExtension extends Job {
    constructor(name, industry, requiresDegree, field, location, emphasis) {
    super (name, industry, requiresDegree, field,location, emphasis); //calls the parent constructor??
    this.emphasis = emphasis; //sets additional relevant property
    }
}

// Create three instances of Job class
const job1 = new Job("Barista", "Service", false, "Food and Beverage", "Coffee Shops");
const job2 = new Job("Account Manager", "Marketing", true, "Advertising", "Remote");
const job3 = new Job("Recruiter", "Business", true, "Manufacturing", "Multiple Locations");

//Console log two methods for each instance of Job class
console.log(job1.getName());
console.log(job1.getFieldAndIndustry());
console.log(job2.getName());
console.log(job2.getFieldAndIndustry());
console.log(job3.getName());
console.log(job3.getFieldAndIndustry());
console.log(job1.getLocation());

// Create an instance of JobExtension class
const specialJob = new JobExtension("Unempoloyment Tax Specialist", "Account Management", true, "Public Sector", "Downtown St. Paul");

//Console log two methods for each instance of class class
console.log(specialJob.getName());
console.log(specialJob.getFieldAndIndustry());
console.log(specialJob.getLocation());
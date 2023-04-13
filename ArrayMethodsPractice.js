const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

const getJose = users.find(user => user.firstName == "Jose"); // returns entire object of Jose
console.log("Jose:");
console.log(getJose); 

const getPremiumMembers = users.filter(user => user.isPremiumMember === true);
console.log("Premium members:");
console.log(getPremiumMembers); //Returns the objects of all premium members.

const getLastNames = users.map(user => user.lastName); //gets last names 
console.log("Last names:  " + getLastNames);

const loggedInMoreThan10Times = users.filter(user => user.logins >= 10) //gets users who logged in more than 10 times
console.log("Users who logged in more than 10 times:");
console.log(loggedInMoreThan10Times);


const getTotalLogins = users.reduce(function(total, user) { 
    return total + user.logins; }, 0); //user.logins give the number of logins for each user specifically.
console.log("Total logins:  " + getTotalLogins);


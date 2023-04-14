const storeOwners = [
    { charles: 1 },
    { sally: 1 },
    { cassandra: 1 },
    {"Danny Shavez": 1, location: "in NM",},
  ];
  
  const listNumberOfStores = function () {
    let totalLocations = 0;//initialize totalLocations variable
    for (let i = 0; i < storeOwners.length; i++) {
     // totalLocations = totalLocations + storeOwners[i][Object.keys(storeOwners[i])[0]]; // Add the value of the storeOwner object to totalLocations
      totalLocations = storeOwners[i].store;
    }
    return totalLocations;
  };
  
  let locations = listNumberOfStores(); //calls the function and stores it
  
  function tellMeMyStores() {
    console.log("Hey, can you tell me who owns stores?"); 
    //if (locations > 0) { 
    //     console.log("Of course, we have " + locations + " stores"); 
    // }
  }
  
  function hasStore() {
    for (let i = 0; i < storeOwners.length; i++) { //loops t storeOwners array
      
        //gets the key/person name of storeOwner object-references the key in the object through the loop
        let person = Object.keys(storeOwners[i])[0];
  
        console.log("Yes, " + person + " has one"); 
    }
  }
  
  tellMeMyStores();
  hasStore();
  
  //gets the storeOwner object directly from index
  let mister = storeOwners[3];
  
  let whereHeLives = mister.location; // Get the location property from the storeOwner object
  //print the person name and location
  console.log("Yes, " + Object.keys(mister)[0] + " that lives " + whereHeLives + " owns one too.");
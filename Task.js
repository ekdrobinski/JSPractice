let taskManager = (function() {
    let tasks = []; 
  
    // Function to add a task to the tasks array
    function addTask(characteristic) { 
      tasks.push(characteristic);
    }
  
    function displayTasks() { // Function to display all tasks in the tasks array
      console.log("Tasks in tasks:");
      tasks.forEach(function(characteristic, index) {
        //the index helps it iterate through the loop and gives it a point value +1 of the index(the placement value of the array)
        console.log((index + 1) + ". " + characteristic);  
      });
    }
  
    // Returns the object with the addTask and displayTasks functions
    return { 
      addTask: addTask,
      displayTasks: displayTasks
    };
  })();
  
  // Adds three sample tasks using the addTask function
  taskManager.addTask("Watercolor");
  taskManager.addTask("Write lesson plans");
  taskManager.addTask("Go to the gym");
  
  // Display the list of tasks using the displayTasks function, already console.logs it in the function of displayTasks from above
  taskManager.displayTasks();
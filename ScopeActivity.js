function outer(){
    let a = "string "; // 1. Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.
    let b = {key: 85};  
    console.log("This is step 1.: " + a + b.key);

    function inner(a , b) {  //3. Update the inner function to take two parameters named a and b.
        console.log("This is step 2. Log the values of a and b in the inner function: " + a + b); //2. Log the values of a and b in the inner function.
        a = "innerString "; //5. Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).
        b = {key: 99.6}; //5. 
        console.log("This is step 5(assign new values to a and b). log them at the end of the function:  " + a+ b.key);//5.
        b.key = 100; //6. Inside the inner function, update a property of the b object.
        console.log("6.  This is the logging of the updated b object " + a , b.key); 
    }
  
    console.log("right after this should be step 4, which is pass a and b as arguments in the execution of inner().");
    inner(a , b.key); //4. Pass a and b in as arguments when you execute inner().
    console.log("this after the execution of step 4, which was execution of inner()");
    console.log("5. this is logging after the execution of inner(a,b) " + a + b.key);
  }
  
  outer();
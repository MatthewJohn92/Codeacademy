/*
Default Parameters
*/
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}


makeShoppingList('tacos');

// Return - When a function is called, the computer will run through the function’s code and evaluate the result. By default, the resulting value is undefined.
function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  /*
  Let’s say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and if the plant needs to be watered:

Create a variable named plantNeedsWater using the const variable keyword.
Assign an anonymous function that takes in a parameter of day to plantNeedsWater.*/
  const numOfMonitors = monitorCount(5,4);
  console.log(numOfMonitors);


  const plantNeedsWater = function(day) {
    if(day === 'Wednesday'){
      return true;
    } else {
      return false;
    }
  };
  
  plantNeedsWater('Tuesday');
  
  console.log(plantNeedsWater('Tuesday'));

  //Arrow Functions
  const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  
/*Concise Body Arrow Functions
JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. We’ll explore a few of these techniques below:

Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

showcasing how arrow functions parameters differ for different amounts of parameters
A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

comparing single line and multiline arrow functions
So if we have a function:

const squareNum = (num) => {
  return num * num;
};

We can refactor the function to:

const squareNum = num => num * num;

Notice the following changes:

The parentheses around num have been removed, since it has a single parameter.
The curly braces { } have been removed since the function consists of a single-line block.
The return keyword has been removed since the function consists of a single-line block.*/

  const plantNeedsWater2 = day => day === 'Wednesday' ? true : false;

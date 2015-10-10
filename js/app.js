  // On Load.
  window.onload = function(event) 
  { 
  console.log("window loaded");
  document.getElementById("list").innerHTML += itemText;  // Inserts loop into HTML
  document.getElementById("author").innerHTML += author;
  }

  // Global Variables.
  var itemText = "";  // Sets Text and adds li .
  var author = "Mackenzie Abby";

  // Fizz Buzz Loop
  for (var i = 1; i <= 100; i++)
  { 
  itemText += "<li>"; // Adds Li

  if ( i % 15 == 0)  // If Divisible by 15 and remainder is 0.

  itemText += "Fizz Buzz";

  else if (i % 3 == 0) // If Divisible by 3 and remainder is 0.

  itemText += "Fizz";

  else if ( i % 5 == 0) // If Divisible by 5 and remainder is 0.

  itemText += "Buzz";

  else 

  itemText += i; // Add the remainder numbers that are not Divisible.

  itemText += "</li>"; // Closes li.
  }
 



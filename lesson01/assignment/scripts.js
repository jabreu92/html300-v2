// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){

      //Logic for ES6 new methods:

      //1: Map Function we are going to add the favorite number by the user to each element in the array:
      let mapArray = data.map(function(value) {
        return value + userNumber;
      });

      console.log(mapArray.toString());
      //2: Filter Function, we are going get elements that are greater than the favorite number
      let filteredArray = data.filter(function(value){
        return value > userNumber;
      });
      console.log(filteredArray.toString());

      //3: The every method, we will check if every single elementin the array is greater than the favorite number 
      let everyArray = data.every(function(value){
        return value > userNumber;
      });

      console.log(everyArray.toString());

      //4: The some method, we will check if any element in the array is greater than the favorite number
      let someArray = data.some(function(value){
        return value > userNumber;
      });

      console.log(someArray.toString());



      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .output').innerHTML = mapArray.toString();
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })


})
// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const form1 = document.querySelector('#form1')

  form1.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#form1 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    if(!isNaN(userNumber)){
      
      //1: Map Function we are going to add the favorite number by the user to each element in the array:
      let mapArray = data.map(function(value) {
        return value + userNumber;
      });

      document.querySelector('#form1 .output').innerHTML = mapArray.toString();
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

  /****************************************************************************************************************************************/

  const form2 = document.querySelector('#form2')

  form2.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#form2 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    if(!isNaN(userNumber)){
      

      //2: Filter Function, we are going get elements that are greater than the favorite number
      let filteredArray = data.filter(function(value){
        return value > userNumber;
      });

      document.querySelector('#form2 .output').innerHTML = filteredArray.toString();
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

  
  /****************************************************************************************************************************************/

  const form3 = document.querySelector('#form3')

  form3.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [1, 2, 3, 4, 5, 6]

    const inputField = document.querySelector('#form3 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    if(!isNaN(userNumber)){
      
        let everyArray = data.every(function(value){
          return value > userNumber;
        });

      document.querySelector('#form3 .output').innerHTML = everyArray.toString();
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

  /****************************************************************************************************************************************/

  const form4 = document.querySelector('#form4')

  form4.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#form4 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    if(!isNaN(userNumber)){

        //4: The some method, we will check if any element in the array is greater than the favorite number
        let someArray = data.some(function(value){
          return value > userNumber;
        });

      document.querySelector('#form4 .output').innerHTML = someArray.toString();
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

})
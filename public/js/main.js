const deleteBtn = document.querySelectorAll('.fa-trash') //creating a variable and assigning it to a selection of all elements with a class of fa-trash
const item = document.querySelectorAll('.item span') //creating a variable and assigning it to a selection of all span elements with a class of item 
const itemCompleted = document.querySelectorAll('.item span.completed') //creating a variable and assigning it to all completed span elements with a class of item 

Array.from(deleteBtn).forEach((element)=>{ //creating an array from our selection and starting a loop
    element.addEventListener('click', deleteItem) //add an event listener to the current item that listens for a click and then calls a function called deleteItem
}) //close loop

Array.from(item).forEach((element)=>{ //creating an array from our selection and starting a loop
    element.addEventListener('click', markComplete) //add an event listener to the current itsm that waits for a click and then calls a function called markComplete
}) //close loop

Array.from(itemCompleted).forEach((element)=>{ //creating an array from selection adn starting a loop
    element.addEventListener('click', markUnComplete) //add an event listener to only completed items
}) //close loop

async function deleteItem(){ //declaring an asychronous function 
    const itemText = this.parentNode.childNodes[1].innerText //looks inside of the list item and grabs only the inner text within the list span
    try{ //starting a try block to do something
        const response = await fetch('deleteItem', { //creates a response variable that waits on a fetch to get data from the result of the deleteItem route
            method: 'delete', //sets the CRUD method to delete for the route
            headers: {'Content-Type': 'application/json'}, //specifying the type of content expected, which is JSON
            body: JSON.stringify({ //declare the message content being passed, and stringify that content 
              'itemFromJS': itemText //setting the content of the body to the inner text of the list item and naming it 'itemFromJS'
            }) //closing the body
          }) //closing the object
        const data = await response.json() //waiting on JSON from the response to be converted
        console.log(data) //log the resule to the console 
        location.reload() //reloads teh page to update what is displayed

    }catch(err){ //if an error occurs, pass the error into the catch block
        console.log(err) //log the error to the console
    } //close the catch block 
} //close the function 

async function markComplete(){ //declare an asynchronous function called markComplete
    const itemText = this.parentNode.childNodes[1].innerText //looks inside of the list item and grabs only the inner text within the list span
    try{ //start try block 
        const response = await fetch('markComplete', { //declaring a response and waiting for a feth to get data from the reselt of the markComplete route
            method: 'put', //sets the CRUD method to update for the route
            headers: {'Content-Type': 'application/json'}, //specifying the type of content expected, which is JSON
            body: JSON.stringify({ //declare the message content being passed, and stringify that content
                'itemFromJS': itemText //setting the content of the body to the inner text of the list item, and maning it 'itemFromJS'
            }) //closing the body
          }) //closing the object
        const data = await response.json() //waiting on JSON from the response to be converted
        console.log(data) //log the result to the console
        location.reload() //reloads the page to update what is displayed

    } catch (err) { //if an error occurs, pass the error into the catch block
        console.log(err) //log the error to the console
    }//close the catch block 
} //close the function 

async function markUnComplete() { //declare an asynchronous function called markUnComplete
    const itemText = this.parentNode.childNodes[1].innerText //looks inside of the list item and grabs only the inner text within the list span
    try { //start try block 
        const response = await fetch('markUnComplete', { //declaring a response and waiting for a feth to get data from the reselt of the markUnComplete route
            method: 'put', //sets the CRUD method to update for the route
            headers: { 'Content-Type': 'application/json' }, //specifying the type of content expected, which is JSON
            body: JSON.stringify({ //declare the message content being passed, and stringify that content
                'itemFromJS': itemText //setting the content of the body to the inner text of the list item, and maning it 'itemFromJS'
            }) //closing the body
        }) //closing the object
        const data = await response.json() //waiting on JSON from the response to be converted
        console.log(data) //log the result to the console
        location.reload() //reloads the page to update what is displayed

    } catch (err) { //if an error occurs, pass the error into the catch block
        console.log(err)//log the error to the console
    }//close the catch block 
} //close the function 
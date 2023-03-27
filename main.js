
// Constants
const appID = "app";

// DOM Elements
let appContainer = document.getElementById(appID);

let targets = []; 

// keeps track of the form element
const target = document.querySelector("#Target"); 

// keeps track of what the user inputs
const form = document.querySelector("#TargetForm"); 

// keeps track of the list of targets
const targLi = document.querySelector("#Target_List"); 

// keeps a hold of the delete button
const DeleteButton = document.querySelector("#Delete"); 


// Event the happens once the button is clicked 
form.addEventListener('submit', (event) => {
  event.preventDefault(); // makes the program not reload when the button is clicked
  const name = target.value; // sets the value of the input to a const named 'name'
  console.log(name); 
  targets.push(name);

  if (name === "") {
    alert("Please Enter a Target's Name"); // Display error message if nothing is inputted 
  }
  else {
    console.log("Working"); 
    add(name); // call on the function to add the list contents 
  }

  target.value = ""; // removes whatever text is in the form 

}); 

// event listener that determines what happens once a button is clicked 
targLi.addEventListener('click', (event) =>  {

console.log(event.target.tagName); 
//console.log(event.target.id); 

//console.log("id::: ", event.target.tagName.id); 

  if (event.target.tagName === "BUTTON" ) {
   // console.log("delbut id"+DeleteButton.id); 
    console.log("deleted: ");
    event.target.parentNode.remove(); 
  }

  if (event.target.tagName === "TYPE") {
    console.log("checked: ");
    event.target.name = "✅";
   // event.target.parentNode.strike(); 
  }


}); 

// this function adds a new list element, that includes the name, as well as a captured button and a delete button
function add(name, event) {

const CapturedList = document.createElement("li"); // creates a new list element
targLi.appendChild(CapturedList); 

const target = document.createElement('span'); // creates a text span to display the name of the tastk, add it to the list
target.textContent = name;
CapturedList.appendChild(target);

const CaptureButton = document.createElement("type", "checkbox"); // creates the Captured button and adds it to the list
CaptureButton.id = "CapBut";
CaptureButton.textContent = "⚔️";
CapturedList.appendChild(CaptureButton); 

const DeleteButton = document.createElement("button"); 
DeleteButton.id = "DelBut";
DeleteButton.textContent = "Delete ❌";
DeleteButton.type = "button";
DeleteButton.removeAttribute("hidden"); 
CapturedList.appendChild(DeleteButton);

return 
}


//
// Functions
//

// function made to add a new element when the sumbit button is pressed 
function ButtonPress(event) {

  event.preventDefault(); // doesn't reload the page when the button in pressed 
  
  let targ_name = document.getElementById('Target_Name').value; // sets the value of the input 

  if (!targ_name) {
    alert("Please Enter a Name"); // dispalys an alert message if the textbox is empty 
  }
  else {

    console.log("BUTTON CLICK "+event); 

    targets.push(targ_name); // pushes the value of the input to the array 
  
    console.log(targets); 
  
    const taskEl = document.createElement("div");
    console.log("taskEL "+taskEl); 

    taskEl.classList.add("Target"); 

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    task_content_el.innerText = targ_name; 

    taskEl.appendChild(task_content_el);
  //  ListEl.appendChild(taskEl);


   // targ_name = document.getElementById("List").innerHTML; 
  }

}


// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app container");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  // h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//

inititialise();



let transaction = []

function add(){

    var input = document.getElementById('input').value;
    
    if (input){

        transaction.push(input)
        generateDiv(input)
        document.getElementById('input').value = '';

    } else {
        
    }
    
    

}

function generateDiv(input) {
    // Create a new div element
    var newDiv = document.createElement("div");
    newDiv.classList.add("generated-div");
    newDiv.textContent = transaction;

    // Append the new div to the container
    document.getElementById("container").appendChild(newDiv);
}

// function recommend() {
        
//         if (transaction.length != 0) {
//             document.getElementById('output').value = transaction;
//             transaction = []
//         } else {
//             document.getElementById('output').value = "No item selected yet."
//         }
        
//     }


    

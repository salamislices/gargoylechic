// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions
$("#make-convo").click(function(){
  // get new fake dialogue
    const strings = ["I love you!", "Hey sweet thing", "Ur so sweet", "I miss u!", "mwuah"];
    const newText = strings[Math.floor(Math.random() * strings.length)];

  // append a new div to our output div
    $("#output").find(".text").remove();
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

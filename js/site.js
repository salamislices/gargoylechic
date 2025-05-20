// site.js - purpose and description here
// Author: Your Name
// Date:

$(function() {
  $("#make-convo").click(function(){
    const strings = ["I love you!", "loveeeeee <3", "Mi amor!", "I miss u!", "mwuah", "xoxoxoxoxoxo"];
    const newText = strings[Math.floor(Math.random() * strings.length)];

    $("#output").find(".text").remove();
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  });
});

function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

main();

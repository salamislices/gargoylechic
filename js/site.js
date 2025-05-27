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

const canvas = document.getElementById('paintCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function endPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#ff3399';
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', endPosition);
  canvas.addEventListener('mousemove', draw);

  window.clearCanvas = clearCanvas;
}

function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

main();

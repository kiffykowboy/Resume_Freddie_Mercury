  
function fadeIn() {
    var fade = document.getElementById("FM");
    var opacity = 0;
    var intervalID = setInterval(function() {

        if (opacity < 1) {
            opacity = opacity + 0.1
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
}

function toggleText() {
  var text = document.getElementById("num");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}


function poof() {
  document.getElementById('pic').style.display = 'none';
}
function yup() {
  document.getElementById('pic').style.display = 'block';
}
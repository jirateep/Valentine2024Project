var countDownDate = new Date("Feb 13, 2024 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Are you Ready?";
  }
}, 1000);

function myFunction() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  if (distance > 0) {
    alert("Not time yet! Jub Jub <3 <3");
  } else {
    if (window.confirm('If you click "ok" you would be redirected . Cancel will load this website ')) 
    {
      window.location.href='https://youtu.be/Le5oS9kEgjA';
    };
  }
  return;
}
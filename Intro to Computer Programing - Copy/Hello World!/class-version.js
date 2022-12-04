function countDown() {
    var currTime = 3;
    //timer for seconds left
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 1000);


    //timer for seconds left
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 2000);


    //timer for seconds left
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 3000);


    //timer for seconds left
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 4000);

    //timer for seconds left
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = "Dance!";
        currTime = currTime - 1;
        alert("Super Happy Fun Times");
        document.getElementById("buttoon").innerHTML = "<img src=\"Mii Dance.gif\" id = pic>"

    }, 5000);

}
 
   

 
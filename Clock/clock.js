var fizzBuzz=0
function time() {
    function displayTime() {
        var today=new Date()                                                                //create a new date variable with the name "today"
        var hrs=today.getHours();                                                           //create a variable with the name "hrs" using the hour portion of "today"
        var min=today.getMinutes();                                                         //create a variable with the name "min" using the minute portion of "today"
        var sec=today.getSeconds();                                                         //create a variable with the name "sec" using the second portion of "today"
        if (hrs>12) {                                                                       //change from 24 hour time to 12 hour time
            hrs=hrs-12
        };
        if (hrs<10) {                                                                       //make numbers always 2 digits
            hrs="0"+hrs
        };
        if (min<10) {                                                                       //make numbers always 2 digits
            min="0"+min
        };
        if (sec<10) {                                                                       //make numbers always 2 digits
            sec="0"+sec
        };
        if (fizzBuzz==0){                                                                   //check for FizzBuzz
            document.getElementById("hour").innerHTML=hrs;                                  //show hours
            document.getElementById("minute").innerHTML=min;                                //show minutes
            document.getElementById("second").innerHTML=sec;                                //show seconds
        };
        if (fizzBuzz==1){                                                                   //check for FizzBuzz
            var h=""                                                                        //declare vars
            var m=""
            var s=""
            if (hrs%3==0) h="Fizz"                                                          //check for factors of 3
            if (min%3==0) m="Fizz"
            if (sec%3==0) s="Fizz"
            if (hrs%5==0) h=h+"Buzz"                                                        //check for factors of 5
            if (min%5==0) m=m+"Buzz"
            if (sec%5==0) s=s+"Buzz"
            if (hrs%5!=0&&hrs%3!=0) h=hrs                                                   //what to do if neither
            if (min%5!=0&&min%3!=0) m=min
            if (sec%5!=0&&sec%3!=0) s=sec
            document.getElementById("hour").innerHTML=h;                                    //show hours
            document.getElementById("minute").innerHTML=m;                                  //show minutes
            document.getElementById("second").innerHTML=s;                                  //show seconds
        };                                                                           
    };
    setInterval (displayTime,1000);                                                         //set to loop every 1000 ms

};

function disHour() {
    document.write("<img src=\"Hour Hand.jpg\" width=\"1000px\">");                         //show hour pun on click
};
function disMinute() {
    document.write("<img src=\"Minute Hand.jpg\" width=\"1000px\">");                       //show minute pun on click
};
function disSecond() {
    document.write("It's the second hand or the third hand depending on who you ask.");     //show second pun on click
};
function fizzBuzzToggle(){
    if (fizzBuzz==0) {
        document.getElementById("fizzBuzz").innerHTML="Turn Off FizzBuzz Mode :("           //update button
    } else {
        document.getElementById("fizzBuzz").innerHTML="Turn On FizzBuzz Mode!"              //update button
    }
    fizzBuzz=((fizzBuzz+1)%2)                                                               //turn 1 to 0 and 0 to 1
}

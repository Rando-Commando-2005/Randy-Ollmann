function checkCreds(){
    var firstName=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var code=document.getElementById("code").value;
    var fullName=firstName+" "+lastName;
    if (firstName.length<4){
        document.getElementById("status").innerHTML="Name must be more than three charachters. I apologize to anyone named Dan, Sal, Bob, Max, Sam, Eve, Zoe, or Amy, but not to people named "+firstName
    } else if (fullName.length>20){
        document.getElementById("status").innerHTML="Oh jee willikers! That's a long name."
    } else if (code>=10000) {
        document.getElementById("status").innerHTML="It's a four digit code and you entered more than four."
    } else if (fullName!="Randy Ollmann"){
        document.getElementById("status").innerHTML="Sorry, only Randy Ollmann can enter"
    } else if (code<5309){
        document.getElementById("status").innerHTML="Ha ha, that's not his secret code, his is bigger."
    } else if (code>5309){
        document.getElementById("status").innerHTML="Bruh, you thought that was his secret code? his is smaller."
    } else if (code==5309){
        document.getElementById("status").innerHTML="Wellcome to your <a href=\"../Hello World!/Hello World!.html\">website</a> Randy :)"
    }
};
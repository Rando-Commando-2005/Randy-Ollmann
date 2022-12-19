//declare veriables
v= Math.floor((Math.random()*2-1)*100);
shift=30/(1-(v/299792458));
d=Math.floor(Math.random()*300+1000);
delay=d/299792458*2000000;
offset=Math.floor(Math.random()*20);
angle=Math.floor(Math.random()*359);
roll=Math.floor(Math.random()*359);
pitch=Math.floor(Math.random()*60-30);
yaw=Math.floor(Math.random()*60-30);
rollSpeed=0;
pitchSpeed=0;
yawSpeed=0;
lines=0

//create vectors for easier math
//position=[x,y,z,roll,pitch,yaw]; where x is right y is up and z is out
position=[offset*Math.cos((-1*angle+90)*(Math.PI/180)),offset*Math.sin((-1*angle+90)*(Math.PI/180)),d,roll,pitch,yaw];
//velocity=[Vx,Vy,Vz,Vr,Vp,Vw]; where z0 is at port and position is positive
velocity=[0,0,-1*v,0,0,0];







//text functions for console
function text1(){
    document.getElementById("print").innerHTML="Request radio transmission of 30 mHz";
};
function text2(){
    document.getElementById("print").insertAdjacentHTML("beforeend","<br> Recieve transmission of "+shift+" mHz <br>");
};                                                                                                  
function text3(){
    document.getElementById("print").insertAdjacentHTML("beforeend","Calculating relative speed from doppler effect <br>");
};
function text4(){
    document.getElementById("print").insertAdjacentHTML("beforeend","Speed found speed = "+v+" m/s <br>")
    document.getElementById("v").innerHTML=v+" m/s"
};
function text5(){
    document.getElementById("print").insertAdjacentHTML("beforeend","Sending LASER pulse <br>");
};
function text6(){
    document.getElementById("print").insertAdjacentHTML("beforeend","Recieved LASER pulse time elapsed = "+delay+" μs <br>");
};
function text7(){
    document.getElementById("print").insertAdjacentHTML("beforeend","Calculating distance to port <br>");
};
function text8(){
    document.getElementById("print").insertAdjacentHTML("beforeend","Distance found distance = "+d+" m <br>");
    document.getElementById("d").innerHTML=d+" m"
};
function text9(){
    document.getElementById("print").insertAdjacentHTML("beforeend","Requesting angles from nearby objects <br>");
};
function text9b(){
    document.getElementById("print").insertAdjacentHTML("beforeend","Port angle offset found angle = "+angle+" deg <br>");
    document.getElementById("offsetAngle").innerHTML=angle+" deg";

};
function text9c(){
    document.getElementById("print").insertAdjacentHTML("beforeend","Roll, pitch, yaw found <br>");
};
function text9d(){
    document.getElementById("print").insertAdjacentHTML("beforeend","Roll = "+roll+" deg <br> Pitch = "+pitch+" deg <br> Yaw = "+yaw+" deg <br>");
    document.getElementById("roll").innerHTML=roll+" deg";
    document.getElementById("pitch").innerHTML=pitch+" deg";
    document.getElementById("yaw").innerHTML=yaw+" deg";

};
function text10(){
    document.getElementById("print").innerHTML="Comparing angles";
};
function text11(){
    document.getElementById("print").insertAdjacentHTML("beforeend","<br> Preforming trigonometry <br>");
};
function text12(){
    document.getElementById("print").insertAdjacentHTML("beforeend","Port offset found ofset = "+offset+" m <br>");
    document.getElementById("offset").innerHTML=offset+" m"
};
function text13(){
    document.getElementById("print").insertAdjacentHTML("beforeend","Requesting data from target gyroscopes <br>");
};
function text14(){
    document.getElementById("print").insertAdjacentHTML("beforeend","Copmaring data to internal gyroscopes <br>");
};
function text15(){
    document.getElementById("print").insertAdjacentHTML("beforeend","No spin detected <br>");
    document.getElementById("rollSpeed").innerHTML=rollSpeed+" deg/s"
    document.getElementById("pitchSpeed").innerHTML=pitchSpeed+" deg/s"
    document.getElementById("yawSpeed").innerHTML=yawSpeed+" deg/s"
};
function text16(){
    document.getElementById("print").insertAdjacentHTML("beforeend","Data collection complete <br>");
};
function text17(){
    document.getElementById("print").insertAdjacentHTML("beforeend","Now relying on instruments to update data");
};

//update chart to display current units
function printUnits(){
    document.getElementById("roll").innerHTML=        Math.floor(100*position[3])/100+" deg";
    document.getElementById("pitch").innerHTML=       Math.floor(100*position[4])/100+" deg";
    document.getElementById("yaw").innerHTML=         Math.floor(100*position[5])/100+" deg";
    document.getElementById("d").innerHTML=           Math.floor(100*position[2])/100+" m"
    document.getElementById("rollSpeed").innerHTML=   Math.floor(100*velocity[3])/100+" deg/s";
    document.getElementById("pitchSpeed").innerHTML=  Math.floor(100*velocity[4])/100+" deg/s";
    document.getElementById("yawSpeed").innerHTML=    Math.floor(100*velocity[5])/100+" deg/s";
    document.getElementById("v").innerHTML=           Math.floor(-100*velocity[2])/100+" m/s";

    //convert cartesian to cylindrical and display
    document.getElementById("offsetAngle").innerHTML= Math.floor(100*(-1*(Math.atan2(position[1],position[0])*(180/Math.PI)-90)))/100+" deg";
    document.getElementById("offset").innerHTML=      Math.floor(100*Math.sqrt(position[0]*position[0]+position[1]*position[1]))/100+" m";
};

//update internal units using current velocity
function updateUnits(){
    position[0]=position[0]+(velocity[0]/100);
    position[1]=position[1]+(velocity[1]/100);
    position[2]=position[2]+(velocity[2]/100);
    position[3]=position[3]+(velocity[3]/100);
    position[4]=position[4]+(velocity[4]/100);
    position[5]=position[5]+(velocity[5]/100);
};

function myPrint(text){
    document.getElementById("print").insertAdjacentHTML("beforeend",text);
    lines=lines+1;
    if (lines==14) {
        lines=0
        document.getElementById("print").innerHTML=text
    }
}

//function to run on loading
function initiate(){

    //text functions
    setTimeout(text1,1000);
    setTimeout(text2,2000);
    setTimeout(text3,3000);
    setTimeout(text4,4000);
    setTimeout(text5,5000);
    setTimeout(text6,6000);
    setTimeout(text7,7000);
    setTimeout(text8,8000);
    setTimeout(text9,9000);
    setTimeout(text9b,10000);
    setTimeout(text9c,11000);
    setTimeout(text9d,12000);
    setTimeout(text10,13000);
    setTimeout(text11,14000);
    setTimeout(text12,15000);
    setTimeout(text13,16000);
    setTimeout(text14,17000);
    setTimeout(text15,18000);
    setTimeout(text16,19000);
    setTimeout(text17,20000);

    //make loop to constantly update display and position
    setTimeout(() => {
        setInterval(printUnits,10);
        setInterval(updateUnits,10);
        printUnits();
    }, 21000);    
};

//function to call when thrusters are activated
function mainThrusterStart(){
    //display booster ignition
    myPrint("Booster Ignition <br>");

    //make force vector to apply to velocity by converting pitch and yaw to cartesian coordinate system
    acceleration=[Math.sin((90-position[5])*(Math.PI/180))*Math.sin((180-position[4])*(Math.PI/180)),Math.cos((180-position[4])*(Math.PI/180)),Math.sin((90-position[5])*(Math.PI/180))*Math.cos((180-position[4])*(Math.PI/180)),0,0,0];
    
    //multiply unit vector by acceleration constant in m/s^2
    acceleration[0]=acceleration[0]*10
    acceleration[1]=acceleration[1]*10
    acceleration[2]=acceleration[2]*10
    acceleration[3]=acceleration[3]*10
    acceleration[4]=acceleration[4]*10
    acceleration[5]=acceleration[5]*10

    //make loop to run once thrusters activate
    mainThrusterId=setInterval(() => {

        //update velocities with acceleration
        velocity[0]=velocity[0]+(acceleration[0]/100);
        velocity[1]=velocity[1]+(acceleration[1]/100);
        velocity[2]=velocity[2]+(acceleration[2]/100);
        velocity[3]=velocity[3]+(acceleration[3]/100);
        velocity[4]=velocity[4]+(acceleration[4]/100);
        velocity[5]=velocity[5]+(acceleration[5]/100);
    }, 10);
};

//function to call when thrusters are deactivated
function mainThrusterEnd(){
    
    //display booster extinguish
    myPrint("Booster Extinguished <br>")

    //end loop once thrusters deactivate
    clearInterval(mainThrusterId);
};

//function to call when reversing starts
function reverseStart(){
    //display booster ignition
    myPrint("Angling veins <br>");
    myPrint("RCS Ignition <br>");

    //make force vector to apply to velocity by converting pitch and yaw to cartesian coordinate system
    acceleration=[Math.sin((90-position[5])*(Math.PI/180))*Math.sin((180-position[4])*(Math.PI/180)),Math.cos((180-position[4])*(Math.PI/180)),Math.sin((90-position[5])*(Math.PI/180))*Math.cos((180-position[4])*(Math.PI/180)),0,0,0];
    
    //multiply unit vector by acceleration constant in m/s^2
    acceleration[0]=acceleration[0]*1
    acceleration[1]=acceleration[1]*1
    acceleration[2]=acceleration[2]*1
    acceleration[3]=acceleration[3]*1
    acceleration[4]=acceleration[4]*1
    acceleration[5]=acceleration[5]*1

    //make loop to run once thrusters activate
    reverseId=setInterval(() => {

        //update velocities with acceleration
        velocity[0]=velocity[0]-(acceleration[0]/100);
        velocity[1]=velocity[1]-(acceleration[1]/100);
        velocity[2]=velocity[2]-(acceleration[2]/100);
        velocity[3]=velocity[3]-(acceleration[3]/100);
        velocity[4]=velocity[4]-(acceleration[4]/100);
        velocity[5]=velocity[5]-(acceleration[5]/100);
    }, 10);
};

//function to call when reversing ends
function reverseEnd(){
    
    //display booster extinguish
    myPrint("RCS Extinguished <br>")

    //end loop once thrusters deactivate
    clearInterval(reverseId);
};

//function to call when twisting starts
function twistStart(){
    //display booster ignition
    myPrint("Angling veins <br>");
    myPrint("RCS Ignition <br>");

    //make force vector to apply to velocity by converting pitch and yaw to cartesian coordinate system
    acceleration=[0,0,0,1,0,0];
    
    //multiply unit vector by acceleration constant in deg/s^2
    acceleration[0]=acceleration[0]*12.25
    acceleration[1]=acceleration[1]*12.25
    acceleration[2]=acceleration[2]*12.25
    acceleration[3]=acceleration[3]*12.25
    acceleration[4]=acceleration[4]*12.25
    acceleration[5]=acceleration[5]*12.25

    //make loop to run once thrusters activate
    twistId=setInterval(() => {

        //update velocities with acceleration
        velocity[0]=velocity[0]+(acceleration[0]/100);
        velocity[1]=velocity[1]+(acceleration[1]/100);
        velocity[2]=velocity[2]+(acceleration[2]/100);
        velocity[3]=velocity[3]+(acceleration[3]/100);
        velocity[4]=velocity[4]+(acceleration[4]/100);
        velocity[5]=velocity[5]+(acceleration[5]/100);
    }, 10);
};

//function to call when twisting ends
function twistEnd(){
    
    //display booster extinguish
    myPrint("RCS Extinguished <br>")

    //end loop once thrusters deactivate
    clearInterval(twistId);
};

//function to call when untwisting starts
function untwistStart(){
    //display booster ignition
    myPrint("Angling veins <br>");
    myPrint("RCS Ignition <br>");

    //make force vector to apply to velocity by converting pitch and yaw to cartesian coordinate system
    acceleration=[0,0,0,-1,0,0];
    
    //multiply unit vector by acceleration constant in deg/s^2
    acceleration[0]=acceleration[0]*12.25
    acceleration[1]=acceleration[1]*12.25
    acceleration[2]=acceleration[2]*12.25
    acceleration[3]=acceleration[3]*12.25
    acceleration[4]=acceleration[4]*12.25
    acceleration[5]=acceleration[5]*12.25

    //make loop to run once thrusters activate
    untwistId=setInterval(() => {

        //update velocities with acceleration
        velocity[0]=velocity[0]+(acceleration[0]/100);
        velocity[1]=velocity[1]+(acceleration[1]/100);
        velocity[2]=velocity[2]+(acceleration[2]/100);
        velocity[3]=velocity[3]+(acceleration[3]/100);
        velocity[4]=velocity[4]+(acceleration[4]/100);
        velocity[5]=velocity[5]+(acceleration[5]/100);
    }, 10);
};

//function to call when untwisting ends
function untwistEnd(){
    
    //display booster extinguish
    myPrint("RCS Extinguished <br>")

    //end loop once thrusters deactivate
    clearInterval(untwistId);
};
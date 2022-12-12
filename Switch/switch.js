//declare vars
var t=0;
var c=0;
var srs=0;
var srr=0;
var axnor=0;
var bxnor=0;
var smoothid=0;
var smoothr=0;
var smoothg=0;
var smoothb=255;
//make toggle button function
function toggle(id){
    if (t==0){
        document.getElementById(id).style.backgroundColor="#ff0000";    //make red if blue
        t=1
    } else if (t==1){
        document.getElementById(id).style.backgroundColor="#0000ff";    //make blue if red
        t=0
    };
};

//make cycle button function
function cycle(){
    if (c==0){
        document.getElementById("cycle").style.backgroundColor="#ff00ff";   //add red
        c=1
    } else if (c==1){
        document.getElementById("cycle").style.backgroundColor="#ff0000";   //remove blue
        c=2
    } else if (c==2){
        document.getElementById("cycle").style.backgroundColor="#ffff00";   //add green
        c=3
    } else if (c==3){
        document.getElementById("cycle").style.backgroundColor="#00ff00";   //remove red
        c=4
    } else if (c==4){
        document.getElementById("cycle").style.backgroundColor="#00ffff";   //add blue
        c=5
    } else if (c==5){
        document.getElementById("cycle").style.backgroundColor="#0000ff";   //remove green
        c=0
    };
};

//make switch function
function sw(color){
    document.getElementById("sw").style.backgroundColor=color;  //set to color specified in html
};

//what to do if s and r are true
function srError(){
    if (document.getElementById("sr").style.backgroundColor=="blue"){   //if blue
        document.getElementById("sr").style.backgroundColor="red";      //make red
    } else {
        document.getElementById("sr").style.backgroundColor="blue";     //if not blue make it blue
    };
};

//function to decide what to do in each sr situation
function sr(){
    if ((srs==1)&&(srr==0)){
        document.getElementById("sr").style.backgroundColor="#0000ff";  //if s is the last one pressed make solid blue
        clearInterval(srErrorid);
    } else if ((srs==0)&&(srr==1)){
        document.getElementById("sr").style.backgroundColor="#ff0000";  //if r is the last one pressed make solid red
        clearInterval(srErrorid);
    } else if ((srs==1)&&(srr==1)){
            srErrorid=setInterval(srError,20);                          //if both are pressed at the same time flip colors every 20 ms
    };
};

//make s button function
function sSwitch(){
    if (srs==0){
        document.getElementById("s").style.backgroundColor="#000000";   //if off make on and invert colors
        document.getElementById("s").style.color="#ffffff";
        srs=1;
    } else if (srs==1){
        document.getElementById("s").style.backgroundColor="#ffffff";   //if on make off and invert colors
        document.getElementById("s").style.color="#000000";
        srs=0;
    };
    sr();                                                               //run deciding function
};

function rSwitch(){
    if (srr==0){
        document.getElementById("r").style.backgroundColor="#000000";   //if off make on and invert colors
        document.getElementById("r").style.color="#ffffff";
        srr=1
    } else if (srr==1){
        document.getElementById("r").style.backgroundColor="#ffffff";   //if on make off and invert colors
        document.getElementById("r").style.color="#000000";
        srr=0
    };
    sr();                                                               //run deciding function
}

//make funny button function
function funny(){
    document.getElementById("funny").disabled = true;                   //disable this button
    document.getElementById("redonkulous").disabled = false;            //enable the other one
    document.getElementById("humor").style.backgroundColor="#0000ff";   //make blue
    document.getElementById("humour").style.backgroundColor="#0000ff";
}

//make redonkulous button function
function redonkulous(){
    document.getElementById("redonkulous").disabled = true;             //disable this button
    document.getElementById("funny").disabled = false;                  //enable the other one
    document.getElementById("humor").style.backgroundColor="#ff0000";   //make red
    document.getElementById("humour").style.backgroundColor="#ff0000";
}

function xnora(){
    if (axnor==0){
        document.getElementById("xnora").style.backgroundColor="#000000";    //make black if white
        document.getElementById("xnora").style.color="#ffffff";
        axnor=1;
    } else if (axnor==1){
        document.getElementById("xnora").style.backgroundColor="#ffffff";    //make white if black
        document.getElementById("xnora").style.color="#000000";
        axnor=0;
    };
    toggle("xnor");                                                         //toggle color
}

function xnorb(){
    if (bxnor==0){
        document.getElementById("xnorb").style.backgroundColor="#000000";    //make black if white
        document.getElementById("xnorb").style.color="#ffffff";
        bxnor=1;
    } else if (bxnor==1){
        document.getElementById("xnorb").style.backgroundColor="#ffffff";    //make white if black
        document.getElementById("xnorb").style.color="#000000";

        bxnor=0;
    };
    toggle("xnor");                                                     //toggle color
};

function smoothen(){
    var color=(65536*(smoothr))+(256*(smoothg))+smoothb;                //convert 3 numbers into 1
    color=color.toString(16);                                           //convert to hex string
    while (color.length<6){                                             //check for full length
        color=0+color;                                                  //make full length
    };
    color="#"+color                                                     //add number symbol
    document.getElementById("smoothie").style.backgroundColor=color;    //update color
    if (smoothg==0&&smoothr<255&&smoothb==255){                         //check if color is [blue,magenta)
        smoothr=smoothr+1;                                              //increment towards magenta
    };
    if (smoothr==255&&smoothg==0&&smoothb>0){                           //check if color is [magenta,red)
        smoothb=smoothb-1;                                              //increment towards red
    };
    if (smoothb==0&&smoothg<255&&smoothr==255){                         //check if color is [red,yellow)
        smoothg=smoothg+1;                                              //increment towards yellow
    };
    if (smoothg==255&&smoothb==0&&smoothr>0){                           //check if color is [yellow,green)
        smoothr=smoothr-1;                                              //increment towards green
    };
    if (smoothr==0&&smoothb<255&&smoothg==255){                         //check if color is [green,cyan)
        smoothb=smoothb+1;                                              //increment towards cyan
    };
    if (smoothb==255&&smoothr==0&&smoothg>0){                           //check if color is [cyan,blue)
        smoothg=smoothg-1;                                              //increment towards blue
    };
    
};

//make smooth button function
function smooth(){
    smoothid=setInterval(smoothen,1);               //start transition
};

//make halt smoothing function
function unsmooth(){
    clearInterval(smoothid);                        //end transition
};
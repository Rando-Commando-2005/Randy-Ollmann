// Declare Variables
s1=0;
s2=0;
s3=0;
s4=0;
s5=0;
s6=0;
ts1=0;
ts2=0;
ts3=0;
ts4=0;
ts5=0;
ts6=0;
score=0
var bank=0;

function countBenign(){
    //declare vars
    var pair = 0;
    var ones = 0;
    var twos = 0;
    var threes = 0;
    var fours = 0;
    var fives = 0;
    var sixes = 0;
    scoreQ=0

    //check for 5s
    if (d1*((s1+1)%2)==5){
        scoreQ =scoreQ+50;
        fives = fives + 1;
    };
    if (d2*((s2+1)%2)==5){
        scoreQ=scoreQ+50;
        fives = fives + 1;
    };
    if (d3*((s3+1)%2)==5){
        scoreQ=scoreQ+50;
        fives = fives + 1;
    };
    if (d4*((s4+1)%2)==5){
        scoreQ=scoreQ+50;
        fives = fives + 1;
    };
    if (d5*((s5+1)%2)==5){
        scoreQ=scoreQ+50;
        fives = fives + 1;
    };
    if (d6*((s6+1)%2)==5){
        scoreQ=scoreQ+50;
        fives = fives + 1;
    };

    //check for 3 or more 5s
    if (fives >= 3){
        scoreQ=scoreQ-(50*fives);
    };

    //check for 1s
    if (d1*((s1+1)%2)==1){
        scoreQ=scoreQ+100;
        ones = ones + 1;
    };
    if (d2*((s2+1)%2)==1){
        scoreQ=scoreQ+100;
        ones = ones + 1;
    };
    if (d3*((s3+1)%2)==1){
        scoreQ=scoreQ+100;
        ones = ones + 1;
    };
    if (d4*((s4+1)%2)==1){
        scoreQ=scoreQ+100;
        ones = ones + 1;
    };
    if (d5*((s5+1)%2)==1){
        scoreQ=scoreQ+100;
        ones = ones + 1;
    };
    if (d6*((s6+1)%2)==1){
        scoreQ=scoreQ+100;
        ones = ones + 1;
    };

    //check for 3 or more 1s
    if (ones >= 3){
        scoreQ = scoreQ-(100*ones);
    };

    //check for 2s
    if(d1*((s1+1)%2)==2){
        twos=twos +1;
    };
    if(d2*((s2+1)%2)==2){
        twos=twos +1;
    };
    if(d3*((s3+1)%2)==2){
        twos=twos +1;
    };
    if(d4*((s4+1)%2)==2){
        twos=twos +1
    };
    if(d5*((s5+1)%2)==2){
        twos=twos +1;
    };
    if(d6*((s6+1)%2)==2){
        twos=twos +1;
    };

    //check for 3s
    if(d1*((s1+1)%2)==3){
        threes = threes +1;
    };
    if(d2*((s2+1)%2)==3){
        threes = threes +1;
    };
    if(d3*((s3+1)%2)==3){
        threes = threes +1;
    };
    if(d4*((s4+1)%2)==3){
        threes = threes +1;
    };
    if(d5*((s5+1)%2)==3){
        threes = threes +1;
    };
    if(d6*((s6+1)%2)==3){
        threes = threes +1;
    };
    
    //check for 4s
    if(d1*((s1+1)%2)==4){
        fours = fours +1;
    };
    if(d2*((s2+1)%2)==4){
        fours = fours +1;
    };
    if(d3*((s3+1)%2)==4){
        fours = fours +1;
    };
    if(d4*((s4+1)%2)==4){
        fours = fours +1;
    };
    if(d5*((s5+1)%2)==4){
        fours = fours +1;
    };
    if(d6*((s6+1)%2)==4){
        fours = fours +1;
    };

    //check for 6s
    if(d1*((s1+1)%2)==6){
        sixes = sixes +1;
    };
    if(d2*((s2+1)%2)==6){
        sixes = sixes +1;
    };
    if(d3*((s3+1)%2)==6){
        sixes = sixes +1;
    };
    if(d4*((s4+1)%2)==6){
        sixes = sixes +1;
    };
    if(d5*((s5+1)%2)==6){
        sixes = sixes +1;
    };
    if(d6*((s6+1)%2)==6){
        sixes = sixes +1;
    };

    //3 of a kind
    if (sixes==3){
        scoreQ = scoreQ + 600;
    } else if (fives==3){
        scoreQ = scoreQ + 500;
    } else if (fours==3){
        scoreQ = scoreQ + 400;
    } else if (threes==3){
        scoreQ = scoreQ + 300;
    } else if (twos==3){
        scoreQ = scoreQ + 200;
    } else if (ones==3){
        scoreQ = scoreQ + 1000;
    };

    //4 of a kind
    if (sixes==4||fives==4||fours==4||threes==4||twos==4){
        scoreQ = scoreQ + 1000;
    } else if (ones==4){
        scoreQ = scoreQ + 1100;
    };

    //5 of a kind
    if (sixes==5||fives==5||fours==5||threes==5||twos==5||ones==5){
        scoreQ = scoreQ + 2000;
    };

    //6 of a kind
    if (sixes==6||fives==6||fours==6||threes==6||twos==6||ones==6){
        scoreQ = scoreQ + 3000;
    };

    //3 pair
    if (ones==2){
        pair=pair+1;
        scoreQ = scoreQ - 200
    };
    if (twos==2){
        pair=pair+1;
    };
    if (threes==2){
        pair=pair+1;
    };
    if (fours==2){
        pair=pair+1;
    };
    if (fives==2){
        pair=pair+1;
        scoreQ = scoreQ - 100
    };
    if (sixes==2){
        pair=pair+1;
    };
    if (ones==4){
        pair=pair+2;
    };
    if (twos==4){
        pair=pair+2;
    };
    if (threes==4){
        pair=pair+2;
    };
    if (fours==4){
        pair=pair+2;
    };
    if (fives==4){
        pair=pair+2;
    };
    if (sixes==4){
        pair=pair+2;
    };
    if (pair==3){
        scoreQ=scoreQ+1500;
    };

    //run
    if (ones*twos*threes*fours*fives*sixes==1){
        scoreQ=scoreQ+2500;
    };

    //farkle?
    farkle=false
    if (scoreQ==0){
        farkle=true
    }
};

function roll(){

    //fix dice
    if (s1==1){
        ts1=1;
        document.getElementById("d1").style.color = "#0000ff";
    };
    if (s2==1){
        ts2=1;
        document.getElementById("d2").style.color = "#0000ff";
    };
    if (s3==1){
        ts3=1;
        document.getElementById("d3").style.color = "#0000ff";
    };
    if (s4==1){
        ts4=1;
        document.getElementById("d4").style.color = "#0000ff";
    };
    if (s5==1){
        ts5=1;
        document.getElementById("d5").style.color = "#0000ff";
    };
    if (s6==1){
        ts6=1;
        document.getElementById("d6").style.color = "#0000ff";
    };

    // Roll dice//
    if (s1*ts1==0){
        d1 = Math.ceil(Math.random()*6);
    };
    if (s2*ts2==0){
        d2 = Math.ceil(Math.random()*6);
    };
    if (s3*ts3==0){
        d3 = Math.ceil(Math.random()*6);
    };
    if (s4*ts4==0){
        d4 = Math.ceil(Math.random()*6);
    };
    if (s5*ts5==0){
        d5 = Math.ceil(Math.random()*6);
    };
    if (s6*ts6==0){
        d6 = Math.ceil(Math.random()*6);
    };
    
    // Show dice//
    document.getElementById("d1").innerHTML = d1;
    document.getElementById("d2").innerHTML = d2;
    document.getElementById("d3").innerHTML = d3;
    document.getElementById("d4").innerHTML = d4;
    document.getElementById("d5").innerHTML = d5;
    document.getElementById("d6").innerHTML = d6;


    //farkle check
    countBenign();
    if (farkle) {
        alert("Farkle!")
        score = 0

        //reset selection
        s1=0;
        s2=0;
        s3=0;
        s4=0;
        s5=0;
        s6=0;
        ts1=0;
        ts2=0;
        ts3=0;
        ts4=0;
        ts5=0;
        ts6=0;
        document.getElementById("d1").style.color = "#000000" ;
        document.getElementById("d2").style.color = "#000000" ;
        document.getElementById("d3").style.color = "#000000" ;
        document.getElementById("d4").style.color = "#000000" ;
        document.getElementById("d5").style.color = "#000000" ;
        document.getElementById("d6").style.color = "#000000" ;

        //reset dice
        d1=0
        d2=0
        d3=0
        d4=0
        d5=0
        d6=0

        // Show dice//
        document.getElementById("d1").innerHTML = d1;
        document.getElementById("d2").innerHTML = d2;
        document.getElementById("d3").innerHTML = d3;
        document.getElementById("d4").innerHTML = d4;
        document.getElementById("d5").innerHTML = d5;
        document.getElementById("d6").innerHTML = d6;

        //show points
        document.getElementById("count").innerHTML = "Round Score: " + score;
        document.getElementById("bank").innerHTML = "Total Score/Bank: " + bank;
    };

    //hot dice check

    //reset selection
    s1=0;
    s2=0;
    s3=0;
    s4=0;
    s5=0;
    s6=0;
};

function count(){
    //declare vars
    var pair = 0;
    var ones = 0;
    var twos = 0;
    var threes = 0;
    var fours = 0;
    var fives = 0;
    var sixes = 0;
    score=0

    //check for 5s
    if (d1*s1*((ts1+1)%2)==5){
        score=score+50;
        fives = fives + 1;
    };
    if (d2*s2*((ts2+1)%2)==5){
        score=score+50;
        fives = fives + 1;
    };
    if (d3*s3*((ts3+1)%2)==5){
        score=score+50;
        fives = fives + 1;
    };
    if (d4*s4*((ts4+1)%2)==5){
        score=score+50;
        fives = fives + 1;
    };
    if (d5*s5*((ts5+1)%2)==5){
        score=score+50;
        fives = fives + 1;
    };
    if (d6*s6*((ts6+1)%2)==5){
        score=score+50;
        fives = fives + 1;
    };

    //check for 3 or more 5s
    if (fives >= 3){
        score=score-(50*fives);
    };

    //check for 1s
    if (d1*s1*((ts1+1)%2)==1){
        score=score+100;
        ones = ones + 1;
    };
    if (d2*s2*((ts2+1)%2)==1){
        score=score+100;
      ones = ones + 1;
    };
    if (d3*s3*((ts3+1)%2)==1){
       score=score+100;
        ones = ones + 1;
    };
    if (d4*s4*((ts4+1)%2)==1){
        score=score+100;
        ones = ones + 1;
    };
    if (d5*s5*((ts5+1)%2)==1){
        score=score+100;
        ones = ones + 1;
    };
    if (d6*s6*((ts6+1)%2)==1){
        score=score+100;
        ones = ones + 1;
    };

    //check for 3 or more 1s
    if (ones >= 3){
        score = score-(100*ones);
    };

    //check for 2s
    if(d1*s1*((ts1+1)%2)==2){
        twos=twos +1;
    };
    if(d2*s2*((ts2+1)%2)==2){
        twos=twos +1;
    };
    if(d3*s3*((ts3+1)%2)==2){
        twos=twos +1;
    };
    if(d4*s4*((ts4+1)%2)==2){
        twos=twos +1
    };
    if(d5*s5*((ts5+1)%2)==2){
        twos=twos +1;
    };
    if(d6*s6*((ts6+1)%2)==2){
        twos=twos +1;
    };

    //check for 3s
    if(d1*s1*((ts1+1)%2)==3){
        threes = threes +1;
    };
    if(d2*s2*((ts2+1)%2)==3){
        threes = threes +1;
    };
    if(d3*s3*((ts3+1)%2)==3){
        threes = threes +1;
    };
    if(d4*s4*((ts4+1)%2)==3){
        threes = threes +1;
    };
    if(d5*s5*((ts5+1)%2)==3){
        threes = threes +1;
    };
    if(d6*s6*((ts6+1)%2)==3){
        threes = threes +1;
    };
    
    //check for 4s
    if(d1*s1*((ts1+1)%2)==4){
        fours = fours +1;
    };
    if(d2*s2*((ts2+1)%2)==4){
        fours = fours +1;
    };
    if(d3*s3*((ts3+1)%2)==4){
        fours = fours +1;
    };
    if(d4*s4*((ts4+1)%2)==4){
        fours = fours +1;
    };
    if(d5*s5*((ts5+1)%2)==4){
        fours = fours +1;
    };
    if(d6*s6*((ts6+1)%2)==4){
        fours = fours +1;
    };

    //check for 6s
    if(d1*s1*((ts1+1)%2)==6){
        sixes = sixes +1;
    };
    if(d2*s2*((ts2+1)%2)==6){
        sixes = sixes +1;
    };
    if(d3*s3*((ts3+1)%2)==6){
        sixes = sixes +1;
    };
    if(d4*s4*((ts4+1)%2)==6){
        sixes = sixes +1;
    };
    if(d5*s5*((ts5+1)%2)==6){
        sixes = sixes +1;
    };
    if(d6*s6*((ts6+1)%2)==6){
        sixes = sixes +1;
    };

    //3 of a kind
    if (sixes==3){
        score = score + 600;
    } else if (fives==3){
        score = score + 500;
    } else if (fours==3){
        score = score + 400;
    } else if (threes==3){
        score = score + 300;
    } else if (twos==3){
        score = score + 200;
    } else if (ones==3){
        score = score + 1000;
    };

    //4 of a kind
    if (sixes==4||fives==4||fours==4||threes==4||twos==4){
        score = score + 1000;
    } else if (ones==4){
        score = score + 1100;
    };

    //5 of a kind
    if (sixes==5||fives==5||fours==5||threes==5||twos==5||ones==5){
        score = score + 2000;
    };

    //6 of a kind
    if (sixes==6||fives==6||fours==6||threes==6||twos==6||ones==6){
        score = score + 3000;
    };

    //3 pair
    if (ones==2){
        pair=pair+1;
    };
    if (twos==2){
        pair=pair+1;
    };
    if (threes==2){
        pair=pair+1;
    };
    if (fours==2){
        pair=pair+1;
    };
    if (fives==2){
        pair=pair+1;
    };
    if (sixes==2){
        pair=pair+1;
    };
    if (ones==4){
        pair=pair+2;
    };
    if (twos==4){
        pair=pair+2;
    };
    if (threes==4){
        pair=pair+2;
    };
    if (fours==4){
        pair=pair+2;
    };
    if (fives==4){
        pair=pair+2;
    };
    if (sixes==4){
        pair=pair+2;
    };
    if (pair==3){
        score=score+1500;
        if (ones==4||twos==4||threes==4||fours==4||fives==4||sixes==4){
            score = score - 1000
            if (ones=2){
                score = score - 200
            }
            if (fives=2){
                score = score - 100
            }
            if (ones==4){
                score=score-100
            }
        }
    };

    //run
    if (ones*twos*threes*fours*fives*sixes==1){
        score=score+2500;
    };

    //write score to screen
    document.getElementById("count").innerHTML = "Round Score: " + score;
};

//Select on click
function sel1(){
    if (ts1==0){
        if (s1==0){
            s1=1;
            document.getElementById("d1").style.color = "#ff0000" ;
        } else if (s1==1){
            s1=0;
            document.getElementById("d1").style.color = "#000000" ;
        };
        count();
    };
};
function sel2(){
    if (ts2==0){
        if (s2==0){
            s2=1;
            document.getElementById("d2").style.color = "#ff0000" ;
        } else if (s2==1){
            s2=0;
            document.getElementById("d2").style.color = "#000000" ;
        };
        count();
    };
};
function sel3(){
    if (ts3==0){
        if (s3==0){
            s3=1;
            document.getElementById("d3").style.color = "#ff0000" ;
        } else if (s3==1){
            s3=0;
            document.getElementById("d3").style.color = "#000000" ;
        };
        count();
    };
};
function sel4(){
    if (ts4==0){
        if (s4==0){
            s4=1;
            document.getElementById("d4").style.color = "#ff0000" ;
        } else if (s4==1){
            s4=0;
            document.getElementById("d4").style.color = "#000000" ;
        };
        count();
    };
};
function sel5(){
    if (ts5==0){
        if (s5==0){
            s5=1;
            document.getElementById("d5").style.color = "#ff0000" ;
        } else if (s5==1){
            s5=0;
            document.getElementById("d5").style.color = "#000000" ;
        };
        count();
    };
};
function sel6(){
    if (ts6==0){
        if (s6==0){
            s6=1;
            document.getElementById("d6").style.color = "#ff0000" ;
        } else if (s6==1){
            s6=0;
            document.getElementById("d6").style.color = "#000000" ;
        };
        count();
    };
};

function endTurn(){
    //save points
    bank = bank + score;
    score = 0
    document.getElementById("bank").innerHTML = "Total Score/Bank: " + bank;
    document.getElementById("count").innerHTML = "Round Score: " + score;

    //reset selection
    s1=0;
    s2=0;
    s3=0;
    s4=0;
    s5=0;
    s6=0;
    ts1=0;
    ts2=0;
    ts3=0;
    ts4=0;
    ts5=0;
    ts6=0;
    document.getElementById("d1").style.color = "#000000" ;
    document.getElementById("d2").style.color = "#000000" ;
    document.getElementById("d3").style.color = "#000000" ;
    document.getElementById("d4").style.color = "#000000" ;
    document.getElementById("d5").style.color = "#000000" ;
    document.getElementById("d6").style.color = "#000000" ;

    //reset dice
    d1=0
    d2=0
    d3=0
    d4=0
    d5=0
    d6=0

    // Show dice//
    document.getElementById("d1").innerHTML = d1;
    document.getElementById("d2").innerHTML = d2;
    document.getElementById("d3").innerHTML = d3;
    document.getElementById("d4").innerHTML = d4;
    document.getElementById("d5").innerHTML = d5;
    document.getElementById("d6").innerHTML = d6;

};
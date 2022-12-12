function kush() {
    document.getElementById("all").innerHTML=" <img id=\"pic\" src=\"sunrise-by-the-ocean.webp\"></img><audio controls><source src=\"sprach.mp3\">no audio support</audio>"
    var mysound = new sound("sprach.mp3");
    mysound.play();
};

function sound(src) {
    this.sound=document.createElement("audio");
    this.sound.src = src;
    this.play=function(){
        this.sound.play();
    };
};

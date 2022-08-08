x=0;
y=0;
q="";
p="";

var SpeechRecognition=window.webkitSpeechRecognition;
var rehre= new SpeechRecognition();
function Static(){
    document.getElementById("status").innerHTML="SAY SOMETHING";
    rehre.start();
}

rehre.onresult= function(event){
    console.log(event);
    var content=event.results[0][0].transcript;

    document.getElementById("status").innerHTML="YOU SAID "+content;
    if(content== "Circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="drawing circle";
p="set";
    }
    if(content=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="drawing rectangle";
q="set";
    }
}
function preload(){

}
function setup(){
canvas=createCanvas(900,600);
}
function draw(){
    if(q=="set"){
rect(x,y,40,65);
document.getElementById("status").innerHTML="DONE";


q="";
}
    if(p=="set"){
radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        console.log(radius);
        document.getElementById("status").innerHTML="DONE";
        p="";
    }
}
        
        
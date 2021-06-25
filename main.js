NoseX=0;
NoseY=0;
WristleftX=0;
WristrightX=0;
differnce=0; 
function preload(){}


function setup(){
video=createCapture(VIDEO);
video.size(500,500);
canvas=createCanvas(500,400);
canvas.position(600,180);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function gotPoses(results){
if (results.length>0){
    console.log("results")
    NoseX=results[0].pose.nose.x;
    NoseY=results[0].pose.nose.y;
    WristleftX=results[0].pose.leftWrist.x;
    WristrightX=results[0].pose.rightWrist.x;
    differnce=floor(WristleftX-WristrightX);
}
}



function modelLoaded(){
    console.log("P0sENeT hAs BeEn L0aDed!!");
}

function draw(){
    background("#424242");
    document.getElementById("font").innerHTML="Font size will be= " + differnce + "px";
   fill("#ffffff");
  stroke("#ffffff");
  square(NoseX,NoseY,differnce);
}
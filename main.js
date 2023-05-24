noseX=0;
noseY=0;
mustache = "";
function preload() {
mustache = loadImage('https://i.postimg.cc/qRNhqmJ5/m.png')

}


function setup() {
    canvas =  createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Inistialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, noseX -25, noseY + 5, 50, 50);
}
function take_snapshot() {
    save('myFilterImage.png');
}
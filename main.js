song = "";

scoreleftwrist = 0;
selection = "";

leftWristY= 0;
leftWristX= 0;

rightWristY= 0;
rightWristX= 0;

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}

function draw()
{
    image(video, 0 , 0, 600, 500);

    

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreleftwrist > 0.2)
    {

    circle(leftWristY, leftWristX, 20);

    song2.stop();

        if(song1 == false)
        {
            song1.play();
            song1.setVolume(1);
            song1.rate(1);

            document.getElementById("song_name").innerHTML = "= "+song1;

        }
    }
   

}

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}




function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreleftwrist = results[0].pose.keypoints[9].score;
        console.log("left wrist score = "+ scoreleftwrist);




        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX " + leftWristX + " leftWristY " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX " + rightWristX + " rightWristY " + rightWristY);
    }
}
function preload()
{
}

function setup()
{
canvas=createCanvas(640, 480);

canvas.position(110, 250);

video=createCapture(VIDEO);

video.hide();
}

function draw()
{
c1=color(255, 204, 0);
fill(c1);
noStroke();
square(145, 145, 330, 250);

image(video, 150, 150, 320, 240);

c2=color(103, 204, 0);
fill(c2);
noStroke();
ellipse(140, 140, 25, 25);

c3=color(103, 204, 0);
fill(c1);
noStroke();
ellipse(165, 165, 25, 25);

}

function take_snapshot()
{
    save('image.png');
}
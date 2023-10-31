
let song; 

let peaks;

let link; 

function preload() {
  song = loadSound("autumn-leaf_with-violins-74917.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
peaks = song.getPeaks(width)

link= createA("https://ks7150.github.io/HW08B2/","link to line visualisation")


}



function draw() {
  background(220, 120, 120);
for(let i=0; i < peaks.length; i++){
  
//line (i%width,height/2+peaks[i]*height/2, i%width, height/2)
let x= i%width;
noFill()
strokeWeight(1/2)
ellipse(x, height/2+peaks[x]*height/2 , x, height/2)
}
link.position(10,10);




}

function mouseClicked() {
  song.play();

}










const BIAS = 1;
let numberOfTrainingObjects = 100


let brain;
let inputs;
let trainer = new Array();

let p1 = [-1, fx(-1)]
let p2 = [1, fx(1)]
let p3, p4, j;

function fx(x){
    // y = mx + x
    return 0.4 * x + 0.3;
}

function setup() {
    
    createCanvas(windowWidth, windowHeight);

    brain = new Perceptron(3);
    brain.printWeight()

    for(let i = 0; i < numberOfTrainingObjects; i++){
        inputs = [random(-1, 1), random(-1, 1), BIAS];
        trainer.push(new Trainer(inputs));

    // console.log('expected --> ' + trainer[i].ans);
    // console.log('Guess --> ' + brain.guess());
    }

    j = 0;
}

function draw() {
    background(220);

    line(
        map(p1[0], -1, 1, 0, width),
        map(p1[1], -1, 1, height, 0),
        map(p2[0], -1, 1, 0, width),
        map(p2[1], -1, 1, height, 0)
    )

    p3 = [-1, brain.guessLine(-1)]
    p4 = [1, brain.guessLine(1)]

    line(
        map(p3[0], -1, 1, 0, width),
        map(p3[1], -1, 1, height, 0),
        map(p4[0], -1, 1, 0, width),
        map(p4[1], -1, 1, height, 0)
    )
    // line(0, height, width , 0)
    
    for(let i = 0; i < trainer.length; i++){
        
        let data = [trainer[i].x, trainer[i].y, trainer[i].bias];

        if(fx(trainer[i].x) < trainer[i].y){
            circle(map(trainer[i].x, -1, 1, 0, width), map(trainer[i].y, -1, 1, height, 0), 10);
            fill(255, 0, 0);
        }
        else{
            rect(map(trainer[i].x, -1, 1, 0, width), map(trainer[i].y, -1, 1, height, 0), 10, 10);
            fill(255, 0, 0);
        }

        data = [trainer[i].x, trainer[i].y, trainer[i].bias];
        if (brain.guess(data) == trainer[i].ans){
            fill(0, 255, 0);
        }
    }  
    
    if(j < trainer.length){
        let data = [trainer[j].x, trainer[j].y, trainer[j].bias];
        brain.learn(data, trainer[j].ans);
        j++;
    }else{
        j = 0;
    }
}
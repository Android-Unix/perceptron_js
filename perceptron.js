function activation_function(sum){
    if(sum > 0)
        return 1;
    else
        return -1;
}

function Perceptron(len){
    this.weight = [];
    this.learning_rate = 0.1;
  
    for(let i = 0; i < len; i++)
        this.weight.push(random(-1, 1));
    
  
    this.printWeight = function(){
        for(let i = 0; i < this.weight.length; i++){
            console.log(this.weight[i]);
        }
    }
  
    this.guess = function(inputs){
        let sum = 0;
        for(let i = 0; i < this.weight.length; i++)
            sum += this.weight[i] * inputs[i];

        return activation_function(sum)
    }
  
    this.learn = function(inputs, ans){

        let predection = this.guess(inputs);

        let error = ans - predection;

        for(let i = 0; i < this.weight.length; i++){
        this.weight[i] += this.learning_rate * inputs[i] * error;
        }
    }

    this.guessLine = function(x){
        return  -(this.weight[2] / this.weight[1]) - (this.weight[0] / this.weight[1]) * x;
    }
}

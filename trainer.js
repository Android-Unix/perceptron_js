
function Trainer(inputs) {

  this.x = inputs[0];
  this.y = inputs[1];
  this.bias = inputs[2];

  this.ans = 0;

  let lineY = fx(this.x)
  
  if (lineY < this.y) {
    this.ans = -1;
  } else {
    this.ans = 1;
  }
}

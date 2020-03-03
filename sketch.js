var number1=20
var number2=30
function setup()
{
  createCanvas(400, 400);
    
}

function draw()
{
  background(220);
}

function keyPressed()
{
  if(key=='s')
  {
    console.log("Sum = " +(number1+number2));
  }
  if(key=='p')
  {
    console.log("Product =" +(number1*number2));
  }
  if(key=='q')
  {
    console.log("Quotient ="+(number1/number2));
  }
}
    
  
function hide(){
  let score = 5;
  return function newest(){
    score++;
    console.log(score);
  }
}
const hideOp = hide();
hideOp();
hideOp();
hideOp();

// o/p:- 6, 7, 8
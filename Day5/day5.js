const calculateAdd = () => {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
  
    const add = parseInt(num1) + parseInt(num2);
    const subs = parseInt(num1) - parseInt(num2);
    const multi = parseInt(num1) * parseInt(num2);
    const divide = parseInt(num1) / parseInt(num2);
  
    document.querySelector("#answer").innerHTML = add;
  };
  
  const calculateSubs = () => {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
  
    const subs = parseInt(num1) - parseInt(num2);
  
    document.querySelector("#answer").innerHTML = subs;
  };
  
  const calculateMulti = () => {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
  
    const multi = parseInt(num1) * parseInt(num2);
  
    document.querySelector("#answer").innerHTML = multi;
  };
  
  const calculateDivide = () => {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
  
    const divide = parseInt(num1) / parseInt(num2);
  
    document.querySelector("#answer").innerHTML = divide;
  };
  
  document.querySelector("#add").addEventListener("click", calculateAdd);
  document.querySelector("#subs").addEventListener("click", calculateSubs);
  document.querySelector("#multi").addEventListener("click", calculateMulti);
  document.querySelector("#divide").addEventListener("click", calculateDivide);
  
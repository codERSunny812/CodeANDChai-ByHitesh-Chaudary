const heigth = document.querySelector('#height');
const weight = document.querySelector('#Weight');
const box = document.querySelector('.result');
const btn = document.querySelector('.submit-btn');
let bmi = 0;
btn.addEventListener('click',()=>{
   let heightValue = heigth.value;
   let weightValue = weight.value;
   console.log(heightValue);
   console.log(weightValue);
   let newHeight = (heightValue*heightValue)/10000;
   bmi = Math.floor( (weightValue)/ newHeight);
   console.log(bmi);
   box.innerHTML=`
<h2><span>Your Bmi is :</span> ${bmi}</h2>

`
   
})


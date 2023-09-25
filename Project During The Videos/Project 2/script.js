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
   if(heightValue === ' ' || heightValue < 0 || isNaN(heightValue)){
      console.log("error");
      box.innerHTML=` <h2>Please enter a valid value   of heigth</h2>`;
     }

     if(weightValue === ' ' || weightValue < 0 || isNaN(weightValue)){
      console.log("error");
      box.innerHTML=` <h2>Please enter a valid value of weigth </h2>`;
     }

      console.log(bmi);
      box.innerHTML=`
      <h2><span>Your Bmi is :</span> ${bmi}</h2>
      
      `
   
   
   
});


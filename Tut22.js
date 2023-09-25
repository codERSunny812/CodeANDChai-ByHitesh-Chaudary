// always use the EventListener  to use the events type 

// document.querySelector('#forest').addEventListener('click ' , ()=>{
// alert("forest found ");
// },false);

document.getElementById('forest').addEventListener('click' , (e)=>{
alert('hey');
console.log(e); //know more about this 
}, false);

// type , timestamp , defaultPrevented , target , toElement , srcElement , currentTarget , clientX , clientY , screenX , screenY , altkey , cntrlKey , shiftKey , keyCode

// about the third variale 

// event capturing and bubling 
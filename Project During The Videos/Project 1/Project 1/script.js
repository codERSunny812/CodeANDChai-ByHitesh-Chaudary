const button = document.querySelectorAll(".span-button");
const body = document.querySelector("body");


button.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        console.log(e.target.id);
        let value = e.target.id;
        if(value == 'hotpink'){
            body.style.backgroundColor="hotpink";
            // btn.style.border="2px solid black";
           
        }
        else if (value == 'LawnGreen'){
            body.style.backgroundColor="LawnGreen";
            // btn.style.border="2px solid black";
        }
        else if(value == "LightBlue"){
            body.style.backgroundColor="LightBlue";
            // btn.style.border="2px solid black";
        }
        else{
            body.style.backgroundColor="LightSalmon";
            // btn.style.border="2px solid black";
        }
    })
})
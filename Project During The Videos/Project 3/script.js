let box = document.querySelector('.clock');
// let btn = document.querySelector('.btn');


// btn.addEventListener('click' , ()=>{
//     box.innerHTML=`
//     setInterval(()=>{
//         var date = new Date().toLocaleTimeString();
//         console.log(date);
//         },1000)
        
//     `;
// })


    setInterval(()=>{
        var date = new Date().toLocaleTimeString();
        console.log(date);
        box.innerHTML=`${date}`
        },1000)
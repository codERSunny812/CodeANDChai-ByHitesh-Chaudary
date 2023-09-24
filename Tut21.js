console.log("js file is attached ");
function addLang(langName){
    const newElement = document.createElement('li');
    
    newElement.innerText = `${langName}`;
    document.querySelector('.lang').appendChild(newElement);
}

addLang("python");
addLang("java");



// another way of writing is and this is more optimize becoz it didt traverse the whole tree

function addOptiLang(langName){
const newEle = document.createElement('li');
newEle.appendChild(document.createTextNode(langName));
document.querySelector('.lang').appendChild(newEle);

}

addOptiLang('golang')


// now how to edit and delete the value 

const changeTheList = document.querySelector('li:nth-child(2)');
console.log(changeTheList);
const newLi = document.createElement('li');
newLi.textContent = "TyPeScRipT";
changeTheList.replaceWith(newLi);



//remove 

const lastLang = document.querySelector('li:last-child');
lastLang.remove();
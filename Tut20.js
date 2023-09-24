

const parent = document.querySelector('.parent');
console.log(parent);
parent.style.fontSize="20px";
console.log(parent.children);
parent.children[0].style.color="red";
parent.children[1].style.color="blue";
parent.children[2].style.color="green";
parent.children[3].style.color="yellow";
parent.children[4].style.color="purple";
parent.children[5].style.color="white";

// if you dont want to go throught these step process then  you can use the follwing syntax 
const child = parent.firstElementChild;
child.style.backgroundColor="skyblue";
const child2 = parent.lastElementChild;
child2.style.backgroundColor="black";


// now if you want  to track the parent of a child 
console.log(child2.parentElement);
// if you want to know the sibling of the element 
console.log(child2.nextElementSibling);
// if you  want to know all the  children of a html elemet
console.log(parent.childElement);



// how to create new Element in  js 

const Element = document.createElement('div');
Element.className="newClass";
Element.id=Math.floor(Math.random()*10+1);
console.log(Element); 

// Another way of creating  the element 

const newElement = document.createElement('div');
newElement.setAttribute("title" , "getneratedTitle");
console.log(newElement);





// our new Element is empty now lets add some value in it 
//  1st way
Element.innerText = 'chai and code ';

// 2nd way
const newText = document.createTextNode("chai and code  in a new Element");
newElement.appendChild(newText);

// Now how to append this into our body 

document.body.appendChild(Element);
document.body.appendChild(newElement);




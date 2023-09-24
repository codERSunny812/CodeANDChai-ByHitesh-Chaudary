// Dom manipulation  in js 

  // console.dir(document);

  // select element using get element by id
 
const mainHeading = document.getElementById("heading");
console.log(mainHeading);

// select element using quary selector 

const element = document.querySelector(".para")
console.log(element);

// NOw Changing the text of the 

mainHeading.textContent = "This is something else";
console.log(mainHeading.textContent);

// we acess the class written in the the html inside the js (jsx ) by the clasName

document.getElementById("heading").getAttribute('class');
document.getElementById("heading").setAttribute("class", "test");


/*
 
****diffrence between textContent and innerText  and innerHTML ****


innerText -> it only shows the visible text present in a html tag 

textContent -> it shows all the  text wheteher its hidden using any style. 

innerHTML -> its shows all the text along with the html tags and attribvute present in it. 

 */


// About selectors
// document.querySelector("your class tag ")
// you can add anything in the query selector by applying the tag along with thier attribute too  


// ******Applying style the selectors**********

// selector.style.style_type:"style_value"

// Now lets know about the queryselectorAll 

// it select the all the child or tag which match the enterted tag


// *****HTML collection and node List******
// ------> They are very similar to the array but  they are not proper array

// 1. A NodeList and an HTMLcollection is very much the same thing.

// 2. Both are array-like collections (lists) of nodes (elements) extracted from a document. and the node can be accesed by the index number 

// 3. HTMLCollection items can be accessed by their name, id, or index number


// 4. The getElementsByClassName() and getElementsByTagName() methods return a live
// HTMLCollection.
// 5. The querySelectorAll() method returns a static NodeList. 




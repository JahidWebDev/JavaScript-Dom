//What is DOM

//DOM = Document objects model

// D = HTML page is a Document = for example - index.html
// O = HTML elementa are objects = for example - head, body, div, h1, p
// M = HTML tree structure is model = for example - window, document, html, head, body, title, div, h1, p

//NOW JavaScript can 

// 1. change HTML elements 
// 2. change HTML attributes
// 3. change css style
// 4. add HTML elements and attributes
// 5. remove  HTML elements and attributes
// 6. react to HTML events


// P O E M = Properties Objects Events Methods


/*DOM is a Document Object Model and Programming interface for HTML
That defibes HTML Object, properties, methods and events to get, change
add or Delete HTML elements*/


/******************************** */


// JavaScript - HTML DOM Methods

//<p id="demo"></p> - HTML elements
//const p = document.getElementById("demo");
//p.innerHTML = "Hello Jon"


//The getElementById Method

//In the example above the getElementById method used id="demo" to find the element.

//The innerHTML property can be used to get or change any HTML element, including <html> and <body>.


/******************************* ********/


//JavaScript - HTML DOM Document 

//Below are some examples of how you can use the document object to access and manipulate HTML.


//Finding HTML Elements

// Find an element by element id -- Description
//  document.getElementById(id) -- Method

// Find elements by tag name -- Description
// document.getElementsByTagName(name) -- Method

// Find elements by class name -- Description
// document.getElementsByClassName(name) -- Method


// FOR Example

//<a class="anchor" href="text.html">LINKE1</a>
//document.getElementsByClassName("anchor")

//<a id="anchor" href="text.htmt">LINKE1</a>
//document.getElementById('anchor').innerHTML


/************************************** */


//JavaScript HTML DOM Elements

//Finding HTML Elements


/*Finding HTML elements by id
Finding HTML elements by tag name
Finding HTML elements by class name
Finding HTML elements by CSS selectors
Finding HTML elements by HTML object collections*/

//<p id="demo"></p>

//const element = document.getElementById("intro");

/*document.getElementById("demo").innerHTML = 
"The text from the intro paragraph is: " + element.innerHTML;*/


//<p id="demo"></p>

/*document.getElementById("demo").innerHTML = 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;*/



//This example finds the element with id="main", and then finds all <p> elements inside "main":

//Example

//const x = document.getElementById("main");
//const y = x.getElementsByTagName("p")



//Finding HTML Elements by CSS Selectors

//This example returns a list of all <p> elements with class="intro".

//const x = document.querySelectorAll("p.intro");



//Finding HTML Elements by HTML Object Collections

/*const x = document.forms["frm1"];
console.dir(x);
let text = "";

for (let i = 0; i < x.length ;i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;*/


/****************************************** */


//JavaScript HTML DOM - Changing HTML

//The HTML DOM allows JavaScript to change the content of HTML elements.


//Changing HTML Content

//The easiest way to modify the content of an HTML element is by using the innerHTML property.



//Changing the Value of an Attribute

//To change the value of an HTML attribute, use this syntax: 

//This example changes the value of the src attribute of an <img> element:


//const element = document.getElementById('myImage');

//element.src ="test.jpg";


//Dynamic HTML content
//JavaScript can create dynamic HTML content
//const element = document.getElementById('demo').innerHTML = "Date : " + Date();


/****************************************** */


//JavaScript Forms

// function validateForm(){
//    const from = document.forms['myForm'];
//    console.log(from);
//    return false;
// }

// function validateForm(){
//   const form = document.forms['myForm'];
//   console.log(form['fname'].value);

//   return false;
// }


// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }

/************************************************ */



//JavaScript HTML DOM - Changing CSS


//The HTML DOM allows JavaScript to change the style of HTML elements.


//Changing HTML Style

// document.getElementById(id).style.property = new style


// const colorChange = document.getElementById('p');

// colorChange.style.color = "red"; 
// colorChange.style.fontSize = "50px"; 



// setTimeout(function(){
//   const colorChange = document.querySelector('#p');
//   colorChange.style.color = "red"; 
//   colorChange.style.fontSize = "50px";
// }, 1000);


/*************************************************** */



//JavaScript HTML DOM Animation

//A Basic Web Page

//To demonstrate how to create HTML animations with JavaScript, we will use a simple web page

/*function myMove(){
  const animate = document.getElementById('animate');
  let pos = 0;

 const interval = setInterval(frames, 10);

  function frames(){
    if(pos < 500){
     pos++;
     animate.style.top = pos + "px";
     animate.style.left = pos + "px";
  }else{
    clearInterval(interval);
  }
}
}*/


/***************************************************** */

//JavaScript HTML DOM Events


//HTML DOM allows JavaScript to react to HTML events:

//Reacting to Events

//Examples of HTML events:

/*When a user clicks the mouse
When a web page has loaded
When an image has been loaded
When the mouse moves over an element
When an input field is changed
When an HTML form is submitted
When a user strokes a key*/


/*function changeText(){
  const title = document.getElementById('title');
   title.innerHTML = "Hello world"
};*/


/*const button = document.querySelector("#button");

button.onclick = function(){
  console.log("hello");
}*/



/*************************************** */


//JavaScript HTML DOM EventListener

//The addEventListener() method

//Example

//document.getElementById("myBtn").addEventListener("click", displayDate);

/*function myfunction(){
  console.log('hello world');
}*/

//const button = document.getElementById("button");

/*button.addEventListener('click', function(){
  console.log('hello world');
})*/

/*button.addEventListener('mouseover', function(){
  console.log('hello world');
})*/

//Event Bubbling or Event Capturing?

/*document.getElementById("myP1");

addEventListener("click", function() {
  alert("You clicked the white element!");
}, false);

document.getElementById("myDiv1");

addEventListener("click", function() {
  alert("You clicked the orange element!");
}, false);

document.getElementById("myP2");

addEventListener("click", function() {
  alert("You clicked the white element!");
}, true);

document.getElementById("myDiv2");

addEventListener("click", function() {
  alert("You clicked the orange element!");
}, true)*/

/*********************************************** */


//JavaScript HTML DOM Navigation

//With the HTML DOM, you can navigate the node tree using node relationships.

//DOM Nodes

//According to the W3C HTML DOM standard, everything in an HTML document is a node:

/*The entire document is a document node
Every HTML element is an element node
The text inside HTML elements are text nodes
Every HTML attribute is an attribute node (deprecated)
All comments are comment nodes*/


//Navigating Between Nodes

/*parentNode
childNodes[nodenumber]
firstChild
lastChild
nextSibling
previousSibling*/

/********************************************* */

//JavaScript HTML DOM Elements (Nodes)

//Creating New HTML Elements (Nodes)

//To add a new element to the HTML DOM, you must create the element (element node) first, and then append it to an existing element.

//Creating New HTML Elements (Nodes)

/**const para = document.createElement("p");
const node = document.createTextNode("hello world");
para.appendChild(node);*/  // <p>hello world</p>

/*const element = document.getElementById("div1");
element.appendChild(para)*/


//Creating new HTML Elements - insertBefore()

//const para = document.createElement("p");
//const node = document.createTextNode("hello world");


/*const element = document.getElementById("div1");
const p2 = document.getElementById("p2")
element.insertBefore(node,p2);*/


//Removing Existing HTML Elements



/*const p1 = document.getElementById("p2")

p1.remove();*/


/*const div1 = document.getElementById("div1");
const p2 = document.getElementById("p2");

div1.removeChild(p2);*/



//Replacing HTML Elements 

/*const para = document.createElement("p");
const node = document.createTextNode("This is new.");

const parent = document.getElementById("div1");
const child = document.getElementById("p1");

parent.replaceChild(node, child);*/


/******************************************** */

//JavaScript HTML DOM Collections

//The HTMLCollection Object

/*The getElementsByTagName() method returns an HTMLCollection object.

An HTMLCollection object is an array-like list (collection) of HTML elements.

The following code selects all <p> elements in a document:*/


/******************************************************* */


//JavaScript HTML DOM Node Lists


/*const nodeList = document.querySelectorAll(".hello");
const HTMLCollection = document.getElementsByClassName("hello");

 console.dir(nodeList);
 console.dir(HTMLCollection);


console.log(HTMLCollection['p1']);
console.log(nodeList[0]);*/


/******************************************** */

//BOM
//JavaScript Window - The Browser Object Model
/*let mywindow;
const width = document.getElementById("width");
const height = document.getElementById("height");

width.innerHTML = "window inner width is:" + window.innerWidth
height.innerHTML = "window inner height is:" + window.innerHeight




function openwindow(){
  mywindow = window.open("https://www.linkedin.com/feed/")
}

function closewindow(){
  mywindow.close();
}*/



/*const width = document.getElementById("width");
const height = document.getElementById("height");
const availwidth = document.getElementById("availwidth");
const availheight = document.getElementById("availheight");
const colordepth = document.getElementById("colordepth");
const pixeldepth = document.getElementById("pixeldepth");


width.innerHTML = "screen width:" + screen.width;
height.innerHTML = "screen height:" +  screen.height;
availwidth.innerHTML = "screen availwidth:" + screen.availWidth;
availheight.innerHTML = "screen availheight:" + screen.availHeight;
colordepth.innerHTML = "screen colordepth:"  + screen.colorDepth
pixeldepth.innerHTML = "screen pixeldepth:"  + screen.pixelDepth*/



/*The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

Window Location
The window.location object can be written without the window prefix.

Some examples:

window.location.href returns the href (URL) of the current page
window.location.hostname returns the domain name of the web host
window.location.pathname returns the path and filename of the current page
window.location.protocol returns the web protocol used (http: or https:)
window.location.assign() loads a new document*/


/********************************************** */


// function goBack(){
//     Window.history.back();
//   }
  
  
//   function goForward(){
//     Window.history.forward();
//   }
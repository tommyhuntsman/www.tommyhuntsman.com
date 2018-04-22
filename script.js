  


/*function myFunction() {
  var element = document.getElementById("quotes");
  element.classList.toggle("mystyle");
} */



// I LOVE JS
// NEW APP LOGIC <3
// button - onlick - get button - toggle class arrow right/down; toggle css color grey/white;
/*

GET HTML ELEMENTS
var button = document.getElementById("buttonId")
var button = document.getElementByTagName("buttonId")
var button = document.getElementByClassName("buttonId")
document.anchors
document.applets
document.baseURL
document.body
document.cookie
document.doctype
document.documentElement
docuemnt.documentMode
.documentURI
docuemnt.domain
document.domConfig
.embeds
.forms
.head
.images
.implementation
.inputEncoding
.lastModified
.links
.readyState
.referrer
.scripts
.strictErrorChecking
.title
.URL

CHANGE/MODIFY ELEMENTS
button.innerHTML  //  new/change html content
button.attribute  //  new/change attribute value
button.setAttribute(attribute, value)  //  new/change attribute value
button.style.property  //  new/change style

DATA METHODS AND PROPERTIES - How we can play with our data
var string = "John is walking home";
string.length
string.indexOf("walking") = 8 (i) = 5;
string.replace("is", "was") = "John was walking home";
string.toUpperCase() = "JOHN IS WALKING HOME";
string.slice(0, 8) = "John is"
string.split(0 = converts string to array! Very cool
var num = 45;
nun * 2 = 90;
num / 5 = 9;
num.isInterger()
num.toString()
num.typeof()  // tells what data type
math.pow 
math.abs (absolute value)
math.round
math.floor (round down)
math.min (minimum of a list of numbers)
math.max
math.random (gives you random numbers)
array.length
array.reverse()
array.indexOf()
array.push() (add data to end of array)
array.pop() (delete data from end of array)
array.unshift() (add data to beginning of array)
array.shift() (delete data from beginning of array)
array.join(" ") (turns array into string)
object (student.name .age .profession .grades.1 )
object.hobby = "swimming";  //  adds key value pair to object
delete object.age  //  delets key value pair to object


ADDING / DELETING ELEMENTS
document.createElement(element)  //  create an html element
document.removeChild(element)  //  remove html element
document.appendChild(element)  //  add html element
document.replacechild(element)  //  replace html element
document.write(text)  //  write into the html output stream.

ADD EVENT HANDLERS
document.getElementById(id).onclick = function(){}


*/

$(document).ready(function(){

  /* The code below will enable Google Analytics */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-101640292-1', 'auto');
  ga('send', 'pageview');

  
/* The code below calculates my location time*/
  var d = new Date();
  document.getElementByID("date").innerHTML = d;
  
   
/* The code below enables the panel toggle */
  $("#webapps").click(function(){
      $("#webappscontent").slideToggle("slow");
      $("#portfoliocontent").slideUp("slow");
      $("#quotescontent").slideUp("slow");
      $("#leaderscontent").slideUp("slow");
      $("#stockscontent").slideUp("slow");
      $("#favoritescontent").slideUp("slow");
      $("#recipescontent").slideUp("slow");
  });

/* The code below enables the panel toggle */
  $("#portfolio").click(function(){
      $("#portfoliocontent").slideToggle("slow");
      $("#webappscontent").slideUp("slow");
      $("#quotescontent").slideUp("slow");
      $("#leaderscontent").slideUp("slow");
      $("#stockscontent").slideUp("slow");
      $("#favoritescontent").slideUp("slow");
      $("#recipescontent").slideUp("slow");
  });

/* The code below enables the panel toggle */
  $("#quotes").click(function(){
      $("#quotescontent").slideToggle("slow");
      $("#webappscontent").slideUp("slow");
      $("#portfoliocontent").slideUp("slow");
      $("#leaderscontent").slideUp("slow");
      $("#stockscontent").slideUp("slow");
      $("#favoritescontent").slideUp("slow");
      $("#recipescontent").slideUp("slow");
  });
  
/* The code below enables the panel toggle */
  $("#leaders").click(function(){
      $("#leaderscontent").slideToggle("slow");
      $("#webappscontent").slideUp("slow");
      $("#portfoliocontent").slideUp("slow");
      $("#quotescontent").slideUp("slow");
      $("#stockscontent").slideUp("slow");
      $("#favoritescontent").slideUp("slow");
      $("#recipescontent").slideUp("slow");
  });

/* The code below enables the panel toggle */
  $("#stocks").click(function(){
      $("#stockscontent").slideToggle("slow");
      $("#webappscontent").slideUp("slow");
      $("#portfoliocontent").slideUp("slow");
      $("#quotescontent").slideUp("slow");
      $("#leaderscontent").slideUp("slow");
      $("#favoritescontent").slideUp("slow");
      $("#recipescontent").slideUp("slow");
  });

/* The code below enables the panel toggle */
  $("#favorites").click(function(){
      $("#favoritescontent").slideToggle("slow");
      $("#webappscontent").slideUp("slow");
      $("#portfoliocontent").slideUp("slow");
      $("#quotescontent").slideUp("slow");
      $("#leaderscontent").slideUp("slow");
      $("#stockscontent").slideUp("slow");
      $("#recipescontent").slideUp("slow");
  });
  
/* The code below enables the panel toggle */
  $("#recipes").click(function(){
      $("#recipescontent").slideToggle("slow");
      $("#webappscontent").slideUp("slow");
      $("#portfoliocontent").slideUp("slow");
      $("#quotescontent").slideUp("slow");
      $("#leaderscontent").slideUp("slow");
      $("#stockscontent").slideUp("slow");
      $("#favoritescontent").slideUp("slow");
  });
});


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA-0w0YeFvKq2guOzEcKeNOmai4Fx44tRY",
    authDomain: "quoteled-82e1e.firebaseapp.com",
    databaseURL: "https://quoteled-82e1e.firebaseio.com",
    projectId: "quoteled-82e1e",
    storageBucket: "quoteled-82e1e.appspot.com",
    messagingSenderId: "956082552823"
  };
  firebase.initializeApp(config);

    

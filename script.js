// I LOVE JS
// Author: Tommy Huntsman
// button - onlick - get button - toggle class arrow right/down; toggle css color grey/white;

$(document).ready(function(){

  /*
// Email Alert
  let emailPopup = document.getElementById("email");
  emailPopup.addEventListener("click", () => alert("Email me thomas.huntsman@gmail.com"));
  */
  
// Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-101640292-1', 'auto');
  ga('send', 'pageview');

  
// Panel Toggle

  $("#about").click(function(){
      $(this).find(".fa").toggleClass('active');
      $("#webappscontent").slideToggle("slow");
      $("#portfoliocontent").slideUp("slow");
      $("#quotescontent").slideUp("slow");
      $("#leaderscontent").slideUp("slow");
      $("#stockscontent").slideUp("slow");
      $("#favoritescontent").slideUp("slow");
      $("#recipescontent").slideUp("slow");
  });

  $("#portfolio").click(function(){
      $(this).find(".fa").toggleClass('active');
      $("#portfoliocontent").slideToggle("slow");
      $("#webappscontent").slideUp("slow");
      $("#quotescontent").slideUp("slow");
      $("#leaderscontent").slideUp("slow");
      $("#stockscontent").slideUp("slow");
      $("#favoritescontent").slideUp("slow");
      $("#recipescontent").slideUp("slow");
  });

  $("#quotes").click(function(){
      $(this).find(".fa").toggleClass('active');
      $("#quotescontent").slideToggle("slow");
      $("#webappscontent").slideUp("slow");
      $("#portfoliocontent").slideUp("slow");
      $("#leaderscontent").slideUp("slow");
      $("#stockscontent").slideUp("slow");
      $("#favoritescontent").slideUp("slow");
      $("#recipescontent").slideUp("slow");
  });
  
  $("#leaders").click(function(){
      $(this).find(".fa").toggleClass('active');
      $("#leaderscontent").slideToggle("slow");
      $("#webappscontent").slideUp("slow");
      $("#portfoliocontent").slideUp("slow");
      $("#quotescontent").slideUp("slow");
      $("#stockscontent").slideUp("slow");
      $("#favoritescontent").slideUp("slow");
      $("#recipescontent").slideUp("slow");
  });

  $("#stocks").click(function(){
      $(this).find(".fa").toggleClass('active');
      $("#stockscontent").slideToggle("slow");
      $("#webappscontent").slideUp("slow");
      $("#portfoliocontent").slideUp("slow");
      $("#quotescontent").slideUp("slow");
      $("#leaderscontent").slideUp("slow");
      $("#favoritescontent").slideUp("slow");
      $("#recipescontent").slideUp("slow");
  });

  $("#favorites").click(function(){
      $(this).find(".fa").toggleClass('active');
      $("#favoritescontent").slideToggle("slow");
      $("#webappscontent").slideUp("slow");
      $("#portfoliocontent").slideUp("slow");
      $("#quotescontent").slideUp("slow");
      $("#leaderscontent").slideUp("slow");
      $("#stockscontent").slideUp("slow");
      $("#recipescontent").slideUp("slow");
  });
  
/* The code below enables the panel toggle 
  $("#recipes").click(function(){
      $(this).find("active").toggleClass('.fa');
      $("#recipescontent").slideToggle("slow");
      $("#webappscontent").slideUp("slow");
      $("#portfoliocontent").slideUp("slow");
      $("#quotescontent").slideUp("slow");
      $("#leaderscontent").slideUp("slow");
      $("#stockscontent").slideUp("slow");
      $("#favoritescontent").slideUp("slow");
  });*/
});


/*
var button = document.getElementById("buttonId")
.getElementByTagName("buttonId")
.getElementByClassName("buttonId")
.anchors
.applets
.baseURL
.body
.cookie
.doctype
.documentElement
.documentMode
.documentURI
.domain
.domConfig
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
.attribute  //  new/change attribute value
.setAttribute(attribute, value)  //  new/change attribute value
.style.property  //  new/change style

DATA METHODS AND PROPERTIES - How we can play with our data
var string = "John is walking home";
string.length
.indexOf("walking") = 8 (i) = 5;
.replace("is", "was") = "John was walking home";
.toUpperCase() = "JOHN IS WALKING HOME";
.slice(0, 8) = "John is"
.split(0 = converts string to array! Very cool

var num = 45;
nun * 2 = 90;
num / 5 = 9;
num.isInterger()
.toString()
.typeof()  // tells what data type

math.pow 
.abs (absolute value)
.round
.floor (round down)
.min (minimum of a list of numbers)
.max
.random (gives you random numbers)

array.length
.reverse()
.indexOf()
.push() (add data to end of array)
.pop() (delete data from end of array)
.unshift() (add data to beginning of array)
.shift() (delete data from beginning of array)
.join(" ") (turns array into string)

object (student.name .age .profession .grades.1 )
object.hobby = "swimming";  //  adds key value pair to object
delete object.age  //  delets key value pair to object


ADDING / DELETING ELEMENTS
document.createElement(element)  //  create an html element
.removeChild(element)  //  remove html element
.appendChild(element)  //  add html element
.replacechild(element)  //  replace html element
.write(text)  //  write into the html output stream.

ADD EVENT HANDLERS
document.getElementById(id).onclick = function(){}


*/
    

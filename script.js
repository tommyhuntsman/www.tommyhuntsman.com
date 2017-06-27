$(document).ready(function(){

/* The code below will enable Google Analytics */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-101640292-1', 'auto');
  ga('send', 'pageview');
   
/* The code below enables the panel toggle */
  $("#webapps").click(function(){
      $("#webappscontent").slideToggle("slow");
  });

/* The code below enables the panel toggle */
  $("#portfolio").click(function(){
      $("#portfoliocontent").slideToggle("slow");
  });

/* The code below enables the panel toggle */
  $("#quotes").click(function(){
      $("#quotescontent").slideToggle("slow");
  });
  
/* The code below enables the panel toggle */
  $("#leaders").click(function(){
      $("#leaderscontent").slideToggle("slow");
  });

/* The code below enables the panel toggle */
  $("#stocks").click(function(){
      $("#stockscontent").slideToggle("slow");
  });

/* The code below enables the panel toggle */
  $("#favorites").click(function(){
      $("#favoritescontent").slideToggle("slow");
  });
  
/* The code below enables the panel toggle */
  $("#recipes").click(function(){
      $("#recipescontent").slideToggle("slow");
  });
});
    

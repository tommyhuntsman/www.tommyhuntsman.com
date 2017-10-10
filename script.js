$(document).ready(function(){

$('.your-class').slick({
  dots: true,
  infinite: true,
  speed: 333,
  slidesToShow: 1,
  adaptiveHeight: false,
  arrows: false,
  autoplay: false,
  centermode: true,
  });
  
  
 $("#webapps").click(function(){
   $(this).toggleClass('ButtonClicked');
});
  
  
/* The code below will enable Google Analytics */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-101640292-1', 'auto');
  ga('send', 'pageview');
   
/* The code below enables the panel toggle */
  $("#webapps").click(function(){
      $(this).toggleClass('ButtonClicked');
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
      $(this).toggleClass('ButtonClicked');
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
      $(this).toggleClass('ButtonClicked');
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
      $(this).toggleClass('ButtonClicked');
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
      $(this).toggleClass('ButtonClicked');
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
      $(this).toggleClass('ButtonClicked');
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
      $(this).toggleClass('ButtonClicked');
      $("#recipescontent").slideToggle("slow");
      $("#webappscontent").slideUp("slow");
      $("#portfoliocontent").slideUp("slow");
      $("#quotescontent").slideUp("slow");
      $("#leaderscontent").slideUp("slow");
      $("#stockscontent").slideUp("slow");
      $("#favoritescontent").slideUp("slow");
  });
});
    

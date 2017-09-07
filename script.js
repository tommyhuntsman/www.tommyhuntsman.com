$(document).ready(function(){

$('.your-class').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
  });

$('.menu button')click(function(){
  $('.menu button')removeClass('active').addClass('inactive');
    $('this')removeClass('inactive').addClass('active');
  });
})
  
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
    

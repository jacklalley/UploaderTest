$( function(){

  var pagenumber = 1;

  $(".thumbnail1").on("click", function(){
    $(".editPhotoSection .first").removeClass('hidden').siblings('.second, .third').addClass('hidden');
    $(".thumbnail1").removeClass("unselected");
    $(".thumbnail2, .thumbnail3").addClass("unselected");
  });

  $(".thumbnail2").on("click", function(){
    $(".editPhotoSection .second").removeClass('hidden').siblings('.first, .third').addClass('hidden');
    $(".thumbnail2").removeClass("unselected")
    $(".thumbnail1, .thumbnail3").addClass("unselected");
  });

  $(".thumbnail3").on("click", function(){
    $(".editPhotoSection .third").removeClass('hidden').siblings('.first, .second').addClass('hidden');
    $(".thumbnail3").removeClass("unselected");
    $(".thumbnail1, .thumbnail2").addClass("unselected");
  });

  $('.photoForm .caption').blur(function() {
    if( $(this).val() ) {
      $(".correctOverlay").removeClass("hidden");
    }
  });

  $('.photoForm .caption').blur(function() {
    if( !$(this).val() ) {
      $(".correctOverlay").addClass("hidden");
    }
  });

  $(".addNew").on("click", function(){
    if(pagenumber == 1){
      var numRand = Math.floor(Math.random()*3)
      var addString = 'images/pic' + numRand + '.jpg'
      $(".contained").append( '<div class="thumbimage"><img class="unselected" src="' + addString + '" /><div class="deletecircle"><p>-</p></div>' );
    } else if(pagenumber == 2){
      var numRand = Math.floor(Math.random()*3)
      var addString = 'images/pic' + numRand + '.jpg'
      $(".contained2").append( '<div class="thumbimage"><img class="unselected" src="' + addString + '" /><div class="deletecircle"><p>-</p></div>' );
    }
  });

  $(".delete1").on("click", function(){
    $(".thumbnail1, .delete1").animate({ opacity: 0}, 500);
    $(".rightarrow").addClass("hidden");
    $(".leftarrow").addClass("hidden");
    $(".thumb1").remove();
  });
        
  $(".delete2").on("click", function(){
    $(".thumbnail2, .delete2").animate({ opacity: 0}, 1000);
    $(".rightarrow").addClass("hidden");
    $(".leftarrow").addClass("hidden");
    $(".thumb2").remove();
  });
          
  $(".delete3").on("click", function(){
    $(".thumbnail3, .delete3").animate({ opacity: 0}, 1000);
    $(".rightarrow").addClass("hidden");
    $(".leftarrow").addClass("hidden");
    $(".thumb3").remove();
  });

  $(".addNew").on("click", function(){
    if($(".contained img").length === 6) {
      $(".rightarrow").removeClass("hidden");
    } 
    else {}
  });
       
  $(".rightarrow").on("click", function(){
    pagenumber = 2;
    $(".leftarrow").removeClass("hidden");
    $(".thumbnails").animate({ marginLeft: -1056}, 1000);
  });

  $(".leftarrow").on("click", function(){
    pagenumber = 1;
    $(".thumbnails").animate({ marginLeft: 0}, 1000);
  });

  $(".loadingbar").ready(function() {
    setTimeout(function() { $('.loadingbar').fadeOut(200); }, 1400);
  });

  $(".doneButton").on("click", function(){
    alert("In this modal there would be a checkbox to authorise the photos or go back");
  });


});
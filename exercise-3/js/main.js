// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html File
$(function() {
  // Select all <p> elements and assign a click event that removes the clicked element (recall `this`)
  $("p").on('click', function(){
    $(this).remove();
  });
  // Select the <circle>, and when it's clicked, turn it red
  // Each time the <circle> is clicked, change its radius from 10 to 40
$("circle").click(function(){
    $(this).attr("style", "fill:red");
});

$('circle').click(function(){
  if($(this).attr("r") == 10){
    $(this).attr("r", 40);
  } else {
    $(this).attr("r", 10);
  }
});

  // Assign a mouseenter event to the <rect> element that makes it have an opacity of .5
  $("rect").on("mouseenter", function(){
    $(this).attr("opacity", 0.5)
  });
  // Assign a mouseleave event to the <rect> element that makes it have an opacity of 1
  $("rect").on("mouseleave", function(){
    $(this).attr("opacity", 1.0)
  });

});

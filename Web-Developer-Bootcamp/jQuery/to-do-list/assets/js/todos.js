// Check off specific items by clicking
// .on("click", function(){}); allows for future elements to have eventlisteners as well
// When a LI is clicked inside of a UL
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Click on X to delete item
$("ul").on("click", "span", function(event){
  // Fadeout and removes span (child element) and li (parent element)
  $(this).parent().fadeOut(500, function(){
    // Removes li tag along with span tag
    $(this).remove();
  });
  // Stops event bubbling
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    // Input text
    var todoText = $(this).val();
    // Create new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    $(this).val("");
  }
});

$("span").on("mouseover", "li", function(){
  console.log("hovering");
  $(this).css("float", "right");
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});

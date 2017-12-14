$('.carousel').carousel({ interval: false });

$("#test").click(function(){
    $(".carousel").carousel("next");

});

$("#test2").click(function(){
    $(".carousel").carousel("next");

});

$("#test3").click(function(){
    $(".carousel").carousel("next");

});

$("#start").click(function(){
    $(".carousel").carousel("next");

});

$("#test4").click(function(){
    $(".carousel").carousel("next");
});

$(document).ready(function(){

  var $checkboxes = $('#devel-generate-content-form td input[type="checkbox"]');

  $('.animated-icon1,.animated-icon3,.animated-icon4').click(function(){
    $(this).toggleClass('open');
  });

    $checkboxes.change(function(){
        var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
        $('#count-checked-checkboxes').text(countCheckedCheckboxes);
        $('#edit-count-checked-checkboxes').val(countCheckedCheckboxes);
    });

});

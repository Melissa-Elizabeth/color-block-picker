$(document).ready(function(){

  var colorArray = ['red', 'pink', 'orange', 'yellow', 'green', 'blue', 'purple'];



  for (var i = 0; i < colorArray.length; i++) {

    var colorBox = $('<div class= "coloredBoxes" data-color = "' + colorArray[i] + '">');

    colorBox.css('background-color', colorArray[i]);
    $('#coloredBoxes').append(colorBox);

}

  var randomColor = colorArray[randomNumber(0, colorArray.length - 1)];

  console.log($(this).data().color == randomColor);

$('.coloredBoxes').on('click', function(){
if ($(this).data().color == randomColor) {
  $('#clickResult').text('You did it! Why not you play again.');
  randomColor = colorArray[randomNumber(0, colorArray.length - 1)];
} else {
  $('#clickResult').text('No way! Guess again.');
}
});

function randomNumber(min, max){
return Math.floor(Math.random() * (1 + max - min) + min);
}

});
// var correctMessage = ("You are correct!");
// var incorrectMessage = ("You are incorrect");

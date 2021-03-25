$(document).ready(function () {

  $("form").submit(function (event) {
    event.preventDefault();
    const green = document.getElementById("green").checked;
    const blue = document.getElementById("blue").checked;
    const pink = document.getElementById("pink").checked;
    const dog = document.getElementById("dog").checked;
    const cat = document.getElementById("cat").checked;
    const lizard = document.getElementById("lizard").checked;
    const burger = document.getElementById("burger").checked;
    const sushi = document.getElementById("sushi").checked;
    const icecream = document.getElementById("icecream").checked;

    if (green && dog && burger) {
      $(".celebrity").hide();
      $("#Queen").show();
    } else if (blue && cat && sushi) {
      $(".celebrity").hide();
      $("#Cher").show();
    } else if (green && cat && burger) {
      $(".celebrity").hide();
      $("#sylvester-staloner").show();
    } else if (pink && cat && sushi) {
      $(".celebrity").hide();
      $("#Chris-Farley").show();
    } else if (pink && dog && sushi) {
      $(".celebrity").hide();
      $("#Brad-Pitt").show();
    } else if (blue && lizard && icecream) {
      $(".celebrity").hide();
      $("#Madonna").show();
    } else {
      $(".celebrity").hide();
      $("#nomatch").show();
    }
  });
});

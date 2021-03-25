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

    let answer1 = "";
    let answer2 = "";
    let answer3 = "";

    if (green === true) {
      console.log("green");
      answer1 = "green";
      console.log(answer1);
    } else if (blue === true) {
      console.log("blue");
      answer2 = "blue";
    } else if (pink === true) {
      console.log("pink");
      answer3 = "pink";
    }

  });


});
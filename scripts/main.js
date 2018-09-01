var myHeading = document.querySelector('h1');
myHeading.textContent = ("Hello world!");

// ### Instructions

// * Create a website that accomplishes the following:

//   * Create an array of your favorite bands.

//   * With a prompt, ask the user's favorite band.

//   * If it's one of your favorites, alert: "YEAH I LOVE THEM!"

//   * If it's not, alert: "Nah. They're pretty lame."

//   * **HINT:**  You will need to research how to use `.indexOf()`.

//   * **HINT:** You will need to research how to use `.toLowerCase()`. 

var myFavBands = ["tryo", "la belle bleue", "saez", "indochine"];
var userBands = prompt("What is your favorite band?");
var userBandsLower = userBands.toLowerCase();
console.log(userBandsLower);

if(myFavBands.indexOf(userBandsLower)=== -1){
    // If it returns -1 it means that what you are looking for is NOT part of your array.
    console.log("We really don't have the same taste")
} else {
    console.log("We like the same band!")
};

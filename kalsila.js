//   letters
const letters = "abcdefghijklmnopqrstuvwxyz";


// get Array from letters

let lettersArray = Array.from(letters);
console.log(lettersArray);

// select letters container

let letterscontainer = document.querySelector(".letters");

// generate letters
lettersArray.forEach(letter => {
    // create span
    let span = document.createElement("span");
    // create letter text node 
    let theletter = document.createTextNode(letter);

    //    append the letter to span
    span.appendChild(theletter);
    // Add class on span
    span.className = 'letter-box';

    // Append span to the letters container
    letterscontainer.appendChild(span);

});

// Object of words + categories 
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["prestige", "inception", "parasite", "interstellar", "whiplash", "memento", "coco", "up"],
    peoples: ["Albert", "Einstein", "Hitcok", "Alexandre", "Mahmata gandi"],
    countries: ["Russie", "Doubai", "France", "Qatar"],
}

//  get Random property

let allkeys = Object.keys(words);

// Random Number Depend on keys length
let randomPropNumber = Math.floor(Math.random() * allkeys.length);

// category
let randomPropName = allkeys[randomPropNumber];

// category words
let randomPropValue = words[randomPropName];

// Random Number Depend on words

let randomPropValueNumber = Math.floor(Math.random() * randomPropValue.length);
// the chosen word
let randomPropValueValue = randomPropValue[randomPropValueNumber];

// set category info

document.querySelector(".game-info .category span").innerHTML = randomPropName;

// select letters guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

// convert chosen word to wo Array
let lettersAndSpace = Array.from(randomValueValue);

// create spans depend on word
lettersAndSpace.forEach(letter => {
    // create emptySpan 
    let emptySpan = document.createElement("span");

    // if letters is space
    if (letter === '') {



        // Add class to the span
        emptySpan.className = 'with-space';

    }

    // Append span to the letters guess container
    lettersGuessContainer.appendChild(emptySpan);

});

// select Guess spans
let guessSpan = document.querySelectorAll(".letter-guess span");


// set wrong Attempts
let wrongAttempts = 0;


// select the Draw Element
let theDraw = document.querySelector(".hangman- draw");


// handle  clicking on letters

document.addEventListener("click", (e) => {


    // set the chose status
let theStatus = false;


    if (e.target.className === 'letter-box') {
        e.target.className.add("clicked");
    }

    // get clicked letter
    let theClickedLetter = e.target.innerHTML.toLowercase();
    //  the chosen word 
    let theChosenWord = Array.from(randomValueValue.toLowercase())  ;


    lettersAndSpace.forEach((wordLetter, wordindex) => {
        // if the clicked letter Equal to one of the chosenword letter
        if (theClickedLetter == wordLetter) {

            // set status to correct
            theStatus = true;
            

            // loop on all guess span 
            guessSpan.forEach((span, spanIndex) => {
                if (wordindex === spanIndex) {

                    span.innerHTML = theClickedLetter;

                } else {
                    theStatus = false;
                    console.log(theStatus);

                     
                }

            });

            // outside loop 
           
           s // if letter is wrond 
            if (theStatus !== true) {

                // Increase the wrong Attempts
                wrongAttempts++;


                // Add class wrong on the Draw
                theDraw.classList.add(`wrong-${wrongAttempts}`);


                // play fail sound
            //     document.getElementById("fail").play();

            //     if(wrongAttempts === 8) {

            //         // endGame();



            //         letterscontainer.classList.add("finished");

            //     }

            
            // }else {

            //     // play success sound
            //     document.getElementById("success").play();

            }

        }
    });

});

// End Game function
function endGame() {

    // create popup div
    let div = Document.createElement("div");

    // create text 
    let divtext = document.createTextNode(`Game over,the word is ${randomValue}`);
    
    //  append text to div
    div.appendChild(divtext); 


    // Add class on Div
    div.className = 'popup';

    // Append  to the body 
    document

};
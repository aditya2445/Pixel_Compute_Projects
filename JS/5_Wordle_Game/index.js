const words = [
    "which", "there", "their", "about", "would", "these", "other", "words", "could", "write", "first", "water", 
    "after", "where", "right", "think", "three", "years", "place", "sound", "great", "again", "still", "every", 
    "small", "found", "those", "never", "under", "might", "while", "house", "world", "below", "asked", "going", 
    "large", "until", "along", "shall", "being", "often", "earth", "began", "since", "study", "night", "light", 
    "above", "paper", "parts", "young", "story", "point", "times", "heard", "whole", "white", "given", "means", 
    "music", "miles", "thing", "today", "later", "using", "money", "lines", "order", "group", "among", "learn", 
    "known", "space", "table", "early", "trees", "short", "hands", "state", "black", "shown", "stood", "front", 
    "voice", "kinds", "makes", "comes", "close", "power", "lived", "vowel", "taken", "built", "heart", "ready", 
    "quite", "class", "bring", "round", "horse", "shows", "piece", "green", "stand", "birds", "start", "river", 
    "tried", "least", "field", "whose", "girls", "leave", "added", "color", "third", "hours", "moved", "plant", 
    "doing", "names", "forms", "heavy", "ideas", "cried", "check", "floor", "begin", "woman", "alone", "plane", 
    "spell", "watch", "carry", "wrote", "clear", "named", "books", "child", "glass", "human", "takes", "party", 
    "build", "seems", "blood", "sides", "seven", "mouth", "solve", "north", "value", "death", "maybe", "happy", 
    "tells", "gives", "looks", "shape", "lives", "steps", "areas", "sense", "speak", "force", "ocean", "speed", 
    "women", "metal", "south", "grass", "scale", "cells", "lower", "sleep", "wrong", "pages", "ships", "needs", 
    "rocks", "eight", "major", "level", "total", "ahead", "reach", "stars", "store", "sight", "terms", "catch", 
    "works", "board", "cover", "songs", "equal", "stone", "waves", "guess", "dance", "spoke", "break", "cause", 
    "radio", "weeks", "lands", "basic", "liked", "trade", "fresh", "final", "fight", "meant", "drive", "spent", 
    "local", "waxes", "knows", "train", "bread", "homes", "teeth", "coast", "thick", "brown", "clean", "quiet", 
    "sugar", "facts", "steel", "forth", "rules", "notes", "units", "peace", "month", "verbs", "seeds", "helps", 
    "sharp", "visit", "woods", "chief", "walls", "cross", "wings", "grown", "cases", "foods", "crops", "fruit", 
    "stick", "wants", "stage", "sheep", "nouns", "plain", "drink", "bones", "apart", "turns", "moves", "touch", 
    "angle", "based", "range", "marks", "tired", "older", "farms", "spend", "shoes", "goods", "chair", "twice", 
    "cents", "empty", "alike", "style", "broke", "pairs", "count", "enjoy", "score", "shore", "roots", "paint", 
    "heads", "shook", "serve", "angry", "crowd", "wheel", "quick", "dress", "share", "alive", "noise", "solid", 
    "cloth", "signs", "hills", "types", "drawn", "worth", "truck", "piano", "upper", "loved", "usual", "faces", 
    "drove", "cabin", "boats", "towns", "proud", "court", "model", "prime", "fifty", "plans", "yards", "prove", 
    "tools", "price", "sheet", "smell", "boxes", "raise", "match", "truth", "roads", "threw", "enemy", "lunch", 
    "chart", "scene", "graph", "doubt", "guide", "winds", "block", "grain", "smoke", "mixed", "games", "wagon", 
    "sweet", "topic", "extra", "plate", "title", "knife", "fence", "falls", "cloud", "wheat", "plays", "enter", 
    "broad", "steam", "atoms", "press", "lying", "basis", "clock", "taste", "grows", "thank", "storm", "agree", 
    "brain", "track", "smile", "funny", "beach", "stock", "hurry", "saved", "sorry", "giant", "trail", "offer", 
    "ought", "rough", "daily", "avoid", "keeps", "throw", "allow", "cream", "laugh", "edges", "teach", "frame", 
    "bells", "dream", "magic", "occur", "ended", "chord", "false", "skill", "holes", "dozen", "brave", "apple", 
    "climb", "outer", "pitch", "ruler", "holds", "fixed", "costs", "calls", "blank", "staff", "labor", "eaten", 
    "youth", "tones", "honor", "globe", "gases", "doors", "poles", "loose", "apply", "tears", "exact", "brush", 
    "chest", "layer", "whale", "minor", "faith", "tests", "judge", "items", "worry", "waste", "hoped", "strip", 
    "begun", "aside", "lakes", "bound", "depth", "candy", "event", "worse", "aware", "shell", "rooms", "ranch", 
    "image", "snake", "aloud", "dried", "likes", "motor", "pound", "knees", "refer", "fully", "chain", "shirt", 
    "flour", "drops", "spite", "orbit", "banks", "shoot", "curve", "tribe", "tight", "blind", "slept", "shade", 
    "claim", "flies", "theme", "queen", "fifth", "union", "hence", "straw", "entry", "issue", "birth", "feels", 
    "anger", "brief", "rhyme", "glory", "guard", "flows", "flesh", "owned", "trick", "yours", "sizes", "noted", 
    "width", "burst", "route", "lungs", "uncle", "bears", "royal", "kings", "forty", "trial", "cards", "brass", 
    "opera", "chose", "owner", "vapor", "beats", "mouse", "tough", "wires", "meter", "tower", "finds", "inner", 
    "stuck", "arrow", "poems", "label", "swing", "solar", "truly", "tense", "beans", "split", "rises", "weigh", 
    "hotel", "stems", "pride", "swung", "grade", "digit", "badly", "boots", "pilot", "sales", "swept", "lucky", 
    "prize", "stove", "tubes", "acres", "wound", "steep", "slide", "trunk", "error", "porch", "slave", "exist", 
    "faced", "mines", "marry", "juice", "raced", "waved", "goose", "trust", "fewer", "favor", "mills", "views", 
    "joint", "eager", "spots", "blend", "rings", "adult", "index", "nails", "horns", "balls", "flame", "rates", 
    "drill", "trace", "skins", "waxed", "seats", "stuff", "ratio", "minds", "silly", "coins", "hello", "trips"]

let map = new Map([
    [0,[0,4]],
    [1,[5,9]],
    [2,[10,14]],
    [3,[15,19]],
    [4,[20,24]],
])

let word = words[Math.floor(Math.random() * words.length)];
console.log(word)

let count = 0;
const guess = document.getElementById("guess");
const button = document.getElementById("button");
let arr = Array.from(document.getElementById("grid-container").children);
button.addEventListener('click',function(){
    let [a,e] = map.get(count);
    let guessWord = guess.value.toLowerCase();
    let i;
    for(i=a,j=0;i<=e,j<5;i++,j++){
        arr[i].innerHTML = guessWord[j];
    }
    checkStatus(i,count,a,e,guessWord);
    count++;
    if(count === 5){
        alert("Game Over!")
        return
    }
})

// Logic 1
// function checkStatus(i,count,a,e,guessWord){
//     //case 1: when both words are same
//     if(guessWord === word){
//         alert("You Win!")
//         for(let j=a;j<=e;j++){
//             arr[j].style.backgroundColor = "green";
//         }
//         return;
//     }else{
//         //case 2: when letters are in the word but not in the right position
//         for(let j=a;j<=e;j++){
//             if(word.includes(guessWord[j-a]) && word[j-a] === guessWord[j-a]){
//                 arr[j].style.backgroundColor = "green";
//             }else if(word.includes(guessWord[j-a]) && word[j-a] !== guessWord[j-a]){
//                 arr[j].style.backgroundColor = "yellow";
//             }else{
//                 arr[j].style.backgroundColor = "red";
//             }
//         }   
//     }
// }


//Logic 2
function checkStatus(i, count, a, e, guessWord) {
    if (guessWord === word) {
        for (let j = a; j <= e; j++) {
            arr[j].style.backgroundColor = "green";
        }
        alert("You Win!");
        return;
    }

    let targetLetters = word.split('');
    let guessLetters = guessWord.split('');
    let colorMap = new Array(5).fill("red");

    // Step 1: Mark green (correct letter and position)
    for (let j = 0; j < 5; j++) {
        if (guessLetters[j] === targetLetters[j]) {
            colorMap[j] = "green";
            targetLetters[j] = null; // Mark this letter as used
            guessLetters[j] = null;  // Prevent it from being reused
        }
    }

    // Step 2: Mark yellow (correct letter, wrong position)
    for (let j = 0; j < 5; j++) {
        if (guessLetters[j] !== null) {
            let index = targetLetters.indexOf(guessLetters[j]);
            if (index !== -1) {
                colorMap[j] = "yellow";
                targetLetters[index] = null; // Mark as used
            }
        }
    }

    // Step 3: Apply colors
    for (let j = a, k = 0; j <= e; j++, k++) {
        arr[j].style.backgroundColor = colorMap[k];
    }
}

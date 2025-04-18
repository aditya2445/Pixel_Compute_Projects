const passwordField = document.getElementById('password');
const rangeField = document.getElementById('range');
const sliderValue = document.getElementById('sliderValue');
const copyButton = document.getElementById('copyButton');
const includeNumbers = document.getElementById('numbers');
const includeLetters = document.getElementById('letters');
const includeMixedCase = document.getElementById('mixedCase');
const includePunctuation = document.getElementById('punctuation');
const copyStatus = document.getElementById('copyStatus');

let length = rangeField.value;
let numbers = "1234567890";
let letters = "abcdefghijklmnopqrstuvwxyz";
let mixedCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let punctuation = "`~!@#$%^&*()_+=-<>,./?{}[]|";

function generatePassword(){
    let string = "";
    let password = "";
    if(includeNumbers.checked){
        string+=numbers;
    }
    if(includeLetters.checked){
        string+=letters;
    }
    if(includeMixedCase.checked){
        string+=mixedCase;
    }
    if(includePunctuation.checked){
        string+=punctuation;
    }
    if(includeNumbers.checked || includeLetters.checked || includeMixedCase.checked || includePunctuation.checked){
        copyStatus.classList.remove("bgRed");
        copyStatus.classList.add("hidden");
    }
    let stringLen = string.length;
    for(let i=0;i<length;i++){
        let index = Math.floor(Math.random()*(stringLen-1));
        password+=string[index];
    }
    if(stringLen === 0){
        copyStatus.innerText = "Please select atleast one checkbox to generate password"
        copyStatus.classList.add("bgRed");
        return;
    }
    if(password !== undefined) passwordField.value = password;
}

// Slider change (real-time)
rangeField.addEventListener('input', () => {
    length = rangeField.value;
    sliderValue.textContent = length;  // Update slider display if needed
    generatePassword();
});

// Checkbox changes
includeNumbers.addEventListener('change', generatePassword);
includeLetters.addEventListener('change', generatePassword);
includeMixedCase.addEventListener('change', generatePassword);
includePunctuation.addEventListener('change', generatePassword);

copyButton.addEventListener('click', () => {
    const textToCopy = passwordField.value;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        copyStatus.innerText = "Copied password successfully"
        copyStatus.classList.remove("hidden")
        copyStatus.classList.remove("bgRed");
        copyStatus.classList.add("bgGreen");
        setTimeout(() => {
          copyStatus.innerText = "";
          copyStatus.classList.add("hidden")
        }, 2000);
      })
      .catch(err => {
        console.error("Copy failed: ", err);
        copyStatus.textContent = "Failed to copy!";
        copyStatus.style.color = "red";
      });
  });

generatePassword();
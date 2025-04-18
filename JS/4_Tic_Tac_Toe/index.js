const container = document.getElementById('grid-container');
const cells = document.querySelectorAll('.cell');

let playerX = true;
let arr = Array.from(container.children)

arr.forEach((cell,idx) => {
    cell.addEventListener('click',()=>{
        if(cell.innerHTML !== '') return;
        // Check if the cell is already occupied
        // If occupied, do nothing and return
        if(playerX){
            cell.innerHTML = 'X';
            playerX = false;
        }else{
            cell.innerHTML = 'O';
            playerX = true;
        }
        checkStatus();
    })
})


function checkStatus(){
    // Check for winning conditions
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    winningConditions.forEach(condition => {
        const [a, b, c] = condition;
        if (arr[a].innerHTML && arr[a].innerHTML === arr[b].innerHTML && arr[a].innerHTML === arr[c].innerHTML) {
            alert(`${arr[a].innerHTML} wins!`);
            arr[a].style.backgroundColor = 'green';
            arr[b].style.backgroundColor = 'green';
            arr[c].style.backgroundColor = 'green';
        }
    });

    // Check for draw
    if ([...arr].every(cell => cell.innerHTML !== '')) {
        alert("It's a draw!");
    }
}

const button = document.querySelector('button');
button.addEventListener('click',()=>{
    arr.forEach(cell => {
        cell.innerHTML = '';
    })
    playerX = true;

})
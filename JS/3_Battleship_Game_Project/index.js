const list = document.getElementsByClassName("cell");
let arr = Array.from(list);

let images = document.querySelectorAll(".cell img");

let i = 0;
let set = new Set();

// Randomly select 5 unique indices to place battleships
while (i < 5) {
    let ind = Math.floor(Math.random() * arr.length);
    if (!set.has(ind)) {
        set.add(ind);
        images[ind].src = "assets/battleship.png"; // replace the water image with battleship
        images[ind].classList.add("battleship");
        i++;
    }
}

let water = 0;
let battleship = 0;
let count = 0;

arr.forEach((cell, ind) => {
    cell.addEventListener("click", (e) => {
        if(count === 8) {
            console.log("Lost 💀");
            return;
        }
        let img = cell.querySelector("img");
        if(img.classList.contains("revealed")) {
            return;
        }
        count++;
        if (!img.classList.contains("revealed")) {
            img.classList.remove("hidden"); // Remove hidden class
            img.classList.add("revealed");  // Mark as revealed
            count++;

            if (img.classList.contains("battleship")) {
                battleship++;
                if (battleship === 5) {
                    console.log("Won 🏆");
                }
            } else {
                water++;
                if (count - battleship === 8) { // 8 wrong clicks
                    console.log("Lost 💀");
                }
            }
        }
    });
});

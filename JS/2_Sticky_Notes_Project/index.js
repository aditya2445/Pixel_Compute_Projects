// const button = document.getElementById("addNote");
// button.addEventListener('click', function() {
//     const note = document.createElement('div');
//     const value = document.getElementById("notes").value;
//     const p = document.createElement('p');
//     p.innerText = value;
//     const cross = document.createElement('p')
//     cross.innerText = 'x';
//     note.appendChild(cross)
//     note.appendChild(p);
//     note.style.width = 'max-content';
//     note.style.display = 'grid';
//     note.style.flexDirection = "column";
//     note.style.justifyContent = "center";
//     note.style.alignItems = "center";
//     cross.style.alignSelf = "flex-end";
//     note.style.padding = "5px";
//     document.getElementById("notesContainer").appendChild(note);
// })

const button = document.getElementById("addNote");

button.addEventListener('click', function() {
    const note = document.createElement('div');
    const value = document.getElementById("notes").value;

    // Create the text and close button
    const cross = document.createElement('div');
    cross.innerText = 'x';
    cross.style.cursor = "pointer";
    cross.style.alignSelf = "flex-end";
    cross.style.backgroundColor = "red";
    cross.style.padding = "2px 5px";
    cross.style.color = "white";

    const p = document.createElement('p');
    p.innerText = value;
    p.style.textAlign = "center";

    // Style the note
    note.style.width = "200px";
    note.style.minHeight = "120px";
    note.style.display = "flex";
    note.style.flexDirection = "column";
    note.style.padding = "6px";
    note.style.borderRadius = "8px";
    note.style.gap = "10px";
    note.style.position = "relative";

    // Delete note on click of 'X'
    cross.addEventListener('click', function() {
        note.remove();
    });

    note.appendChild(cross);
    note.appendChild(p);

    document.getElementById("notesContainer").appendChild(note);
    document.getElementById('notes').value = ""; // Clear the input field
});

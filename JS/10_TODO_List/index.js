const button = document.getElementById('add');
const dueContainer = document.getElementById('dueTasks');
const upcomingContainer = document.getElementById('upcomingTasks');

function isDateToday(dateString) {
    const taskDate = new Date(dateString);
    const today = new Date();
    return (
        taskDate.getDate() === today.getDate() &&
        taskDate.getMonth() === today.getMonth() &&
        taskDate.getFullYear() === today.getFullYear()
    );
}

function initializeArrays(){
    let dueTasks = JSON.parse(localStorage.getItem(0) || "[]");
    let upcomingTasks = JSON.parse(localStorage.getItem(1) || "[]");

    dueTasks.forEach(element => {
        const { date, title, time } = element;
        const task = createTaskElement(date, title, time);
        dueContainer.appendChild(task);
    });

    upcomingTasks.forEach(element => {
        const { date, title, time } = element;
        const task = createTaskElement(date, title, time);
        upcomingContainer.appendChild(task);
    });
}

initializeArrays();

function createTaskElement(dateInput, titleInput, timeInput) {
    const task = document.createElement('div');
    const date = document.createElement('p');
    const titleAndTime = document.createElement('p');
    const editDelete = document.createElement('div');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    editBtn.classList.add("edit");
    deleteBtn.classList.add("delete");
    editBtn.innerHTML = 'Edit';
    deleteBtn.innerHTML = 'Delete';

    date.innerHTML = dateInput;
    titleAndTime.innerHTML = `${titleInput} at <span>${timeInput}</span>`;
    
    editDelete.appendChild(editBtn);
    editDelete.appendChild(deleteBtn);
    editDelete.style.display = "flex";
    editDelete.style.gap = "10px";
    editDelete.style.alignSelf = "flex-end";

    task.classList.add("task");
    task.appendChild(date);
    task.appendChild(titleAndTime);
    task.appendChild(editDelete);
    deleteBtn.addEventListener('click', () => {
        task.remove();

        const isToday = isDateToday(dateInput);
        const key = isToday ? 0 : 1;
        let tasks = JSON.parse(localStorage.getItem(key) || "[]");

        tasks = tasks.filter(t => !(t.date === dateInput && t.title === titleInput && t.time === timeInput));
        localStorage.setItem(key, JSON.stringify(tasks));
    });
    editBtn.addEventListener('click', () => {
        editBtn.style.display = 'none';
        deleteBtn.style.display = 'none';
    
        // Create input field with full width
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = titleInput;
        inputField.classList.add("border", "rounded-md", "p-1", "w-full", "mt-2");
    
        // Insert the input below the task content
        task.appendChild(inputField);
        inputField.focus();
    
        function saveTitle() {
            const newTitle = inputField.value.trim();
            if (newTitle) {
                titleAndTime.innerHTML = `${newTitle} ${timeInput}`;
    
                const isToday = isDateToday(dateInput);
                const key = isToday ? 0 : 1;
                let tasks = JSON.parse(localStorage.getItem(key) || "[]");
    
                // Update the title in localStorage
                const updatedTasks = tasks.map(t =>
                    t.date === dateInput && t.title === titleInput && t.time === timeInput
                        ? { ...t, title: newTitle }
                        : t
                );
                localStorage.setItem(key, JSON.stringify(updatedTasks));
    
                titleInput = newTitle;
            }
    
            inputField.remove();
            editBtn.style.display = 'inline-block';
            deleteBtn.style.display = 'inline-block';
        }
    
        inputField.addEventListener('blur', saveTitle);
        inputField.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') saveTitle();
        });
    });
    return task;
}

function showMessage(){
    const div = document.getElementById("modal");
    div.classList.remove("hidden")
    const cross = document.getElementById("cross");
    const closeBtn = document.getElementById('closeBtn');
    cross.addEventListener('click',function(){
        div.classList.add("hidden");
    })
    closeBtn.addEventListener('click',function(){
        div.classList.add("hidden");
    })
}

button.addEventListener('click', function () {
    const titleInputEl = document.getElementById('taskInput');
    const dateInputEl = document.getElementById('dateInput');
    const timeInputEl = document.getElementById('timeInput');

    const titleInput = titleInputEl.value.trim();
    const dateInput = dateInputEl.value;
    const timeInput = timeInputEl.value;
    if (!titleInput || !dateInput || !timeInput) {
        showMessage();
        return;
    }

    const task = createTaskElement(dateInput, titleInput, timeInput);
    const taskDate = new Date(dateInput);
    const today = new Date();

    const isToday =
        taskDate.getDate() === today.getDate() &&
        taskDate.getMonth() === today.getMonth() &&
        taskDate.getFullYear() === today.getFullYear();

    let dueTasks = JSON.parse(localStorage.getItem(0) || "[]");
    let upcomingTasks = JSON.parse(localStorage.getItem(1) || "[]");

    if (isToday) {
        dueContainer.appendChild(task);
        dueTasks.push({ date: dateInput, title: titleInput, time: timeInput });
        localStorage.setItem(0, JSON.stringify(dueTasks));
    } else {
        upcomingContainer.appendChild(task);
        upcomingTasks.push({ date: dateInput, title: titleInput, time: timeInput });
        localStorage.setItem(1, JSON.stringify(upcomingTasks));
    }

    // ✅ Clear input fields
    titleInputEl.value = "";
    dateInputEl.value = "";
    timeInputEl.value = "";
});

const search = document.getElementById('search');

search.addEventListener('input', function () {
    const query = search.value.toLowerCase();
    const allTasks = document.querySelectorAll('.task');

    allTasks.forEach(task => {
        const taskTitleTime = task.querySelectorAll('p')[1];
        const taskTitle = taskTitleTime?.textContent.split(" ")[0].toLowerCase(); 
        if (taskTitle.includes(query)) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
});

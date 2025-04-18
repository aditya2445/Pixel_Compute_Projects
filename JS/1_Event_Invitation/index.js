const button = document.querySelector("#submit")
function addThisOne(){
    const extraTab = document.querySelector("#error-message");
    extraTab.style.display = "block"
    const cross = document.querySelector("#cross")
    cross.addEventListener("click", function (event) {
        event.preventDefault()
        extraTab.style.display = "none"
    })
}
button.addEventListener("click", function (event) {
    event.preventDefault()
    const eventName = document.querySelector("#event-name").value
    const eventDate = document.querySelector("#event-date").value
    const startTime = document.querySelector("#start-time").value
    const endTime = document.querySelector("#end-time").value
    const eventDescription = document.querySelector("#event-description").value
    const eventLocation = document.querySelector("#event-location").value
    if(!eventName || !eventDate || !startTime || !endTime || !eventDescription || !eventLocation) {
        addThisOne();
    }
    else{
        const res = document.querySelector("#result")
        res.style.display = "block"
        const nameField = document.getElementById("name");
        const dateField = document.getElementById("date");
        const descField = document.getElementById("desc");
        const timeField = document.getElementById("time");
        const locationField = document.getElementById("location");
        nameField.textContent = eventName;
        descField.textContent = eventDescription;
        const date = new Date(eventDate);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        dateField.textContent = formattedDate;
        timeField.textContent = `${startTime} - ${endTime}`;
        locationField.textContent = eventLocation;
    }
})
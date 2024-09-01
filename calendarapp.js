const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("month-year");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function digitalClock(){
    let datefunction = new Date()
    let hours = datefunction.getHours()
    let minutes = datefunction.getMinutes()
    let seconds = datefunction.getSeconds()
    let timeformat = 'AM'

    timeformat = hours >= 12 ? 'PM' : 'AM'
    hours = hours == 0 ? 12 : hours
    hours = hours > 12 ? hours - 12 : hours
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    document.querySelector('.hours').innerHTML = hours
    document.querySelector('.minutes').innerHTML = minutes
    document.querySelector('.seconds').innerHTML = seconds
    document.querySelector('.format').innerHTML = timeformat
}
setInterval(digitalClock, 1000)

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let today = new Date()
document.getElementById("date").innerHTML = today.toDateString()

function renderCalendar(month, year) {
    daysContainer.innerHTML = "";
    monthYear.textContent = `${months[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        daysContainer.appendChild(emptyCell);
    }

    for (let day = 1; day <= lastDate; day++) {
        const dayCell = document.createElement("div");
        dayCell.textContent = day;

        if (
            day === currentDate.getDate() &&
            month === currentDate.getMonth() &&
            year === currentDate.getFullYear()
        ) {
            dayCell.classList.add("today");
        }

        daysContainer.appendChild(dayCell);
    }
}

prev.addEventListener("click", () => {
    currentMonth--;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }

    renderCalendar(currentMonth, currentYear);
});

next.addEventListener("click", () => {
    currentMonth++;

    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);

let initDate, finalDate;
const button = document.getElementById("submit");
const result = document.querySelector(".result");
const error = document.querySelector(".errorMessage");

function calculateDifference(initDate, finalDate) {
    const toDays = 1000 * 60 * 60 * 24;
    let milis = finalDate.getTime() - initDate.getTime();
    return Math.round(milis / toDays);
}
button.addEventListener("click", () => {
    error.classList.remove("show");
    initDate = new Date(document.getElementById("init-date").value);
    finalDate = new Date(document.getElementById("final-date").value);
    
    if (!initDate.getTime() || !finalDate.getTime()) {
        error.textContent = "Die Daten kann nicht Null sein!";
        error.classList.add("show", "shake");
        setTimeout(() => {
            error.classList.remove("shake");
        }, 2000)
        result.innerHTML = "Bitte wahlen Sie gultigen Daten an!";
        return;
    } else if (initDate > finalDate) {
        error.textContent = "Das Anfangdatum darf nicht nach dem Enddatum liegen!"
        error.classList.add("show", "shake");
        setTimeout(() => {
            error.classList.remove("shake");
        }, 1000)
        result.innerHTML = "Bitte wahlen Sie gultigen Daten an!";
        return;
    }
    let differenz = calculateDifference(initDate, finalDate);
    result.innerHTML = "die Differenz zwischen: " + initDate.toDateString() + " und " + finalDate.toDateString() + " von   <em>" + differenz + "</em>   ist!"; 
})


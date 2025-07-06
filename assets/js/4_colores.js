// function blackBox(event) {
//     event.target.style.backgroundColor = "Black";
// }

// const box = document.getElementById("blueBox");
// box.addEventListener("click", blackBox)

function blackBox(id) {
    const box = document.getElementById(id);
    box.addEventListener("click", function () {
        box.style.backgroundColor = "black";
    });
}

blackBox("blueBox")
blackBox("redBox")
blackBox("greenBox")
blackBox("yellowBox")

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

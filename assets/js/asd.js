document.addEventListener("keydown", function (event) {
    if (event.key === "a" || event.key === "A") {
        keyBox.style.backgroundColor = "pink";
    } else if (event.key === "s" || event.key === "S") {
        keyBox.style.backgroundColor = "orange";
    } else if (event.key === "d" || event.key === "D") {
        keyBox.style.backgroundColor = "skyblue";
    } else if (event.key === "q" || event.key === "Q") {
        newBox("violet");
    } else if (event.key === "w" || event.key === "W") {
        newBox("gray");
    } else if (event.key === "e" || event.key === "E") {
        newBox("brown");
    }
});

const keyBox = document.getElementById("key");

function newBox(color) {
    const body = document.getElementById("body");
    const box = document.createElement("div");
    body.appendChild(box);
    box.style.backgroundColor = color;
}

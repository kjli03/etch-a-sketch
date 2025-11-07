const container = document.getElementById("container");
createGrid(16);

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", () => resetGrid());

function resetGrid() {
    // ask user for grid size
    gridWidth = Number(window.prompt("How many squares across should the grid be?", ""));
    while (!Number.isInteger(gridWidth) || gridWidth > 100) {
        if (!Number.isInteger(gridWidth)) { gridWidth = Number(window.prompt("Please input a whole number! How many squares across should the grid be?", "")); }
        if (gridWidth > 100) {
            // popup dialog that says it's too big, enter a new one
            gridWidth = Number(window.prompt("That's too big! Please keep the width under 100 squares.", ""));
        }
    }
    // delete current grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(gridWidth);

}

function createGrid(gridWidth) {
    for (let i = 0; i < gridWidth; i++) {
        let row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        for (let j = 0; j < gridWidth; j++) {
            let square = document.createElement("div");
            square.className = "square";
            square.style.opacity = 0.1;
            // let color = getRandomColor();
            square.addEventListener("mouseenter", (event) => {
                square.style.backgroundColor = getRandomColor();
                square.style.opacity = Number(square.style.opacity) + 0.1;
                /* disappearing effect - color disappears after short delay
                setTimeout(() => {
                    event.target.style.backgroundColor = "";
                }, 500); */
            });
            row.appendChild(square);
        }
    }
}

function getRandomColor() {
    let rgb1, rgb2, rgb3;
    rgb1 = Math.round(Math.random() * 255);
    rgb2 = Math.round(Math.random() * 255);
    rgb3 = Math.round(Math.random() * 255);

    return "rgb(" + rgb1 + " " + rgb2 + " " + rgb3 + ")";
}



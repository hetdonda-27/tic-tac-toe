let boxes = document.querySelectorAll(".box");
let msgcon = document.getElementsByClassName(".msg-container")[0]

let turn = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];



const disbox = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerHTML = "O";
            turn = false;
        }
        else {
            box.innerHTML = "X";
            turn = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const showwinner = (winner) => {
    console.log(msgcon);

    msgcon.innerHTML = `Congratulation,winner is ${winner}`;
    msgcon.classList.remove("hide")
};

const checkwinner = () => {
    for (let pattern of winpattern) {
        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;
        
        if (a != "" && b != "" && c != "") {
            if (a === b && b === c) {
                showwinner(a);
                disbox();
            }
        }
    }
};


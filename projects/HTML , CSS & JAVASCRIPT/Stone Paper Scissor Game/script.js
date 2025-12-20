//player
let player = document.querySelector("#playerDisplay");
let playerScore = document.querySelector("#playerScore");

//Computer
let comp = document.querySelector("#compDisplay")
let compScore = document.querySelector("#compScore")


// Reset animations automatically after they finish
player.addEventListener("animationend", () => {
    player.classList.remove("winAnimation");
    player.classList.remove("drawAnimation");
});

comp.addEventListener("animationend", () => {
    comp.classList.remove("winAnimation");
    comp.classList.remove("drawAnimation");
});


//move
let move = document.querySelectorAll(".pMove")

//does player win or losses
let winLossStatus = document.querySelector("#winLossStatus")

let outcome = ["stone", "paper", "scissor"];

function display(id, image) {
    if (id == "stone") {
        image.setAttribute("src", "asstes/fist.png");
    }

    else if (id == "paper") {
        image.setAttribute("src", "asstes/hello.png")
    }

    else {
        image.setAttribute("src", "asstes/peace.png");
    }
}

//winning animation
function playWinAnimation(element) {
    // 1️⃣ Remove the class in case it was already there
    element.classList.remove("winAnimation");

    // 2️⃣ Force the browser to notice the change
    element.offsetWidth; // just reading offsetWidth triggers a "reflow"

    // 3️⃣ Add the class again to play the animation
    element.classList.add("winAnimation");
}


//when match draw
function drawAnimation(element) {
    // 1️⃣ Remove the class in case it was already there
    element.classList.remove("drawAnimation");

    // 2️⃣ Force the browser to notice the change
    element.offsetWidth; // just reading offsetWidth triggers a "reflow"

    // 3️⃣ Add the class again to play the animation
    element.classList.add("drawAnimation");
}

move.forEach(element => {
    element.addEventListener("click", () => {
        let randomIndex = Math.floor(Math.random() * outcome.length);
        let compMove = outcome[randomIndex];

        let PlayerMove = element.id;

        display(compMove, comp);
        display(PlayerMove, player);
        let pScore = Number(playerScore.innerText);
        let cScore = Number(compScore.innerText);

        if (PlayerMove == compMove) {
            winLossStatus.textContent = "Draw";
            drawAnimation(player);
            drawAnimation(comp);
        }

        else if (PlayerMove == "stone" && compMove == "scissor") {
            winLossStatus.textContent = "Player Wins";
            pScore++;
            playWinAnimation(player);
            playerScore.textContent = pScore;
        }
        else if (PlayerMove == "paper" && compMove == "scissor") {
            winLossStatus.textContent = "Comp Wins";
            cScore++;
            playWinAnimation(comp);
            compScore.textContent = cScore;
        }
        else if (PlayerMove == "scissor" && compMove == "stone") {
            winLossStatus.textContent = "Comp Wins";
            cScore++;
            playWinAnimation(comp);
            compScore.textContent = cScore;
        }
        else if (PlayerMove == "paper" && compMove == "stone") {
            winLossStatus.textContent = "Player Wins";
            pScore++;
            playWinAnimation(player);
            playerScore.textContent = pScore;
        }

        else if (PlayerMove == "stone" && compMove == "paper") {
            winLossStatus.textContent = "Comp Wins";
            cScore++;
            playWinAnimation(comp);
            compScore.textContent = cScore;

        }

        else if (PlayerMove == "scissor" && compMove == "paper") {
            winLossStatus.textContent = "Player Wins";
            pScore++;
            playWinAnimation(player);
            playerScore.textContent = pScore;
        }
    });
});


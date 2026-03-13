let secretNumber;
let attempts;

function initGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById("feedback").textContent = "";
    document.getElementById("attempts").textContent = "次数: 0";
    document.getElementById("guess").value = "";
}

document.getElementById("submitBtn").addEventListener("click", function() {
    let guessInput = document.getElementById("guess");
    let feedback = document.getElementById("feedback");
    let userGuess = Number(guessInput.value);

    if (!userGuess) {
        feedback.textContent = "⚠️ 请输入数字";
        return;
    }

    attempts++;
    document.getElementById("attempts").textContent = `次数: ${attempts}`;

    if (userGuess === secretNumber) {
        feedback.textContent = `🎉 太棒了！你猜对了，答案是 ${secretNumber}！`;
    } else if (userGuess > secretNumber) {
        feedback.textContent = "📉 太大了！再试一次";
    } else {
        feedback.textContent = "📈 太小了！再试一次";
    }
});

// 重置游戏按钮
document.getElementById("resetBtn").addEventListener("click", initGame);

// 初始化游戏
initGame();
document.addEventListener("DOMContentLoaded", function() {
    const scoreForm = document.getElementById("scoreForm");
    const scoreList = document.getElementById("scoreList");

    if (scoreForm) {
        scoreForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const matchInput = document.getElementById("match");
            const scoreInput = document.getElementById("score");
            const match = matchInput.value.trim();
            const score = scoreInput.value.trim();

            if (match && score) {
                const li = document.createElement("li");
                li.textContent = `${match}: ${score}`;
                scoreList.appendChild(li);
                matchInput.value = "";
                scoreInput.value = "";
            }
        });
    }
});
const form = document.getElementById("calcForm");
const errorMsg = document.getElementById("errorMsg");
const historyList = document.getElementById("historyList");

let history = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const a = document.getElementById("numberA").value;
    const b = document.getElementById("numberB").value;
    const op = document.getElementById("operation").value;

    errorMsg.textContent = "";

    // Validation
    if (a === "" || b === "") {
        errorMsg.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    if (op === "/" && b == 0) {
        errorMsg.textContent = "Erreur : division par zéro interdite.";
        return;
    }

    // Calcul
    const result = eval(`${a} ${op} ${b}`);

    // Ajout à l'historique
    const operationStr = `${a} ${op} ${b} = ${result}`;
    history.push(operationStr);

    updateHistory();
});

function updateHistory() {
    historyList.innerHTML = "";
    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}

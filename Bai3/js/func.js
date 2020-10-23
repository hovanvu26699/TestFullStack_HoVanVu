/////////// Chưa chọn được đáp án và tính tổng điểm 

document.getElementById("start").addEventListener("click", () => {

    reSet()
    fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
        .then(response => response.json()).then(data => {
            for (let h = 0; h < 5; h++) {
                document.getElementById("question" + `${h + 1}`).innerHTML = "Câu " + parseInt(h + 1) + ": " + data.results[h].question
                let Arr = data.results[h].incorrect_answers
                Arr.push(data.results[h].correct_answer)

                for (let i = 0; i < 4; i++) {
                    document.getElementById("ans" + `${h + 1}`).innerHTML += String.fromCharCode(65 + i) + ". " + Arr[i] + "</br>"

                }
                console.log(Arr)
            }
        });

})

function reSet() {
    for (let h = 0; h < 5; h++) {
        document.getElementById("question" + `${h + 1}`).innerHTML = ""
        for (let i = 0; i < 4; i++) {
            document.getElementById("ans" + `${h + 1}`).innerHTML = ""

        }
    }
}

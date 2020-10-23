function Check() {
    let arr = []
    let A = document.getElementById("A1").value;
    let B = document.getElementById("A2").value;
    let A1 = A.split("");
    let A2 = B.split("");
    let len = A1.length + A2.length;
    let flag = false
    let k = 0;
    for (let i = 0; i < len; i++) {
        if (i < A1.length) {
            for (let j = 0; j < A2.length; j++) {
                if (A1[i] == A2[j]) {
                    flag = true
                }
            }
            if (!flag) {
                arr.push(A1[i])
                flag = false
            } else {
                flag = false
            }
        }
        else {
            for (let t = 0; t < A1.length; t++) {
                if (A1[t] == A2[k]) {
                    flag = true
                    break;
                }
            }
            if (!flag) {
                arr.push(A2[k])
                k++;
                flag = false
            }
            else {
                flag = false
                k++
            }
        }
    }
    alert(arr)
}
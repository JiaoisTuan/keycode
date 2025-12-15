function xuLy() {
    let good = document.getElementById("good").checked;
    let fast = document.getElementById("fast").checked;
    let cheap = document.getElementById("cheap").checked;

    if (good && fast && cheap) {
        if (good && fast) {
            document.getElementById("cheap").checked = false;
        }
        else if (good && cheap) {
            document.getElementById("fast").checked = false;
        }
        else if (fast && cheap) {
            document.getElementById("good").checked = false;
        }
    }
}

var cat = document.getElementById("task_type");
function Handler() {
    var val = document.getElementById("category").value;
    console.log(val);
    cat.classList.add("red_back");
    if (val == "work") {
        cat.style.backgroundColor = "orange";
    } else if (val == "home") {
        cat.style.backgroundColor = "lightblue";
    } else if (val == "study") {
        cat.style.backgroundColor = "green";
    } else {
        cat.style.backgroundColor = "lightgreen";
    }
}

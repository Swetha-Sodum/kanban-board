let addBtn = document.querySelector(".add-btn");
let modalContainer = document.querySelector(".modal-container");
let addTaskFlag = false;

addBtn.addEventListener("click", (event) => {
    addTaskFlag = !addTaskFlag;
    if (addTaskFlag == true) {
        // show
        modalContainer.style.display = "flex";
    }
    else {
        // hide
        modalContainer.style.display = "none";
    }
})
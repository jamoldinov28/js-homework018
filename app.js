const sidebarEl = document.querySelector(".sidebar")

function showSidebar(){
    sidebarEl.classList.toggle("show")
}



const modalEl = document.querySelector(".modal")

function showModal(){
    modalEl.style.display = "block"
}

function closeModal(){
    modalEl.style.display = "none"
}
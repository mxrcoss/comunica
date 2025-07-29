
const menuBtn = document.getElementById("menuBtn");
const navlist = document.getElementById("navlist");
const list = navlist.querySelectorAll("a")

menuBtn.addEventListener("click", () => {
    navlist.classList.toggle("active");
    if (navlist.classList.contains("active")) {
        menuBtn.innerHTML = "X";
        menuBtn.setAttribute("aria-expanded","true")
    }else{
        menuBtn.innerHTML = "&#9776;";
        menuBtn.setAttribute("aria-expanded","false")
    }
});

list.forEach(lists => {
    lists.addEventListener("click", () =>{
        navlist.classList.remove("active");
        menuBtn.innerHTML = "&#9776;";
        menuBtn.setAttribute("aria-expanded", "false");
    })
});
